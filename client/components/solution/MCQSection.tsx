
import React, { memo, useState, useRef, useEffect, useCallback } from "react";
import { StyleSheet, View, Pressable, Animated, Modal, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ThemedText } from "@/components/ThemedText";
import { MathRender } from "@/components/MathRender";
import { JiguuColors, Spacing, BorderRadius, Typography } from "@/constants/theme";
import { MCQ } from "@/data/chapterContent";

interface MCQSectionProps {
  mcqs: MCQ[];
  accentColor?: string;
  textStyle?: any;
}

interface ShuffledOption {
  originalLabel: string;
  text: string;
  isCorrect: boolean;
}

interface MCQState {
  shuffledOptions: ShuffledOption[];
  answered: boolean;
  isCorrect: boolean;
  selectedOptionIndex: number | null;
}

// ----------------------------------------------------------------------------
// Helper: Shuffle Options
// ----------------------------------------------------------------------------
const generateMCQStates = (mcqs: MCQ[]): MCQState[] => {
  const optionLabels = ["a", "b", "c", "d"];

  return mcqs.map((mcq) => {
    // Create option objects with metadata
    const rawOptions = mcq.options.map((opt, i) => ({
      originalLabel: optionLabels[i],
      text: opt,
      isCorrect: optionLabels[i] === mcq.correctAnswer,
    }));

    // Shuffle
    const shuffled = [...rawOptions].sort(() => Math.random() - 0.5);

    return {
      shuffledOptions: shuffled,
      answered: false,
      isCorrect: false,
      selectedOptionIndex: null,
    };
  });
};

// ----------------------------------------------------------------------------
// Component: MCQ Card
// ----------------------------------------------------------------------------
const MCQCard = memo(({
  mcq,
  index,
  state,
  onAnswer,
  textStyle
}: {
  mcq: MCQ;
  index: number;
  state: MCQState;
  onAnswer: (index: number, optionIndex: number, isCorrect: boolean) => void;
  textStyle?: any;
}) => {

  // Local animations
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current; // For tick

  useEffect(() => {
    if (state.answered) {
      // Always fade in indicators (check marks etc)
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }).start();

      if (!state.isCorrect) {
        // Shake only on wrong answer
        shakeAnim.setValue(0);
        Animated.sequence([
          Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
          Animated.timing(shakeAnim, { toValue: -10, duration: 50, useNativeDriver: true }),
          Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
          Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true }),
        ]).start();
      }
    } else {
      // Reset animations if state reset
      fadeAnim.setValue(0);
      shakeAnim.setValue(0);
    }
  }, [state.answered, state.isCorrect]);

  const handleSelect = (optionIndex: number) => {
    if (state.answered) return; // Strict Mode: Already locked

    const selectedOption = state.shuffledOptions[optionIndex];
    onAnswer(index, optionIndex, selectedOption.isCorrect);
  };

  const optionLabelsDisplay = ["a", "b", "c", "d"];

  return (
    <Animated.View style={[styles.mcqCard, { transform: [{ translateX: shakeAnim }] }]}>
      <MathRender
        html={`${index + 1}. ${mcq.question}`}
        baseStyle={{
          ...Typography.body,
          fontFamily: "Kalam_700Bold",
          color: JiguuColors.textPrimary,
          marginBottom: Spacing.sm,
          ...textStyle
        }}
        ignoredTags={['img']}
      />

      <View style={styles.optionsGrid}>
        {state.shuffledOptions.map((option, optIndex) => {
          const isSelected = state.selectedOptionIndex === optIndex;
          const displayLabel = optionLabelsDisplay[optIndex]; // a, b, c, d based on CURRENT position

          // Colors
          let backgroundColor = JiguuColors.surfaceLight;
          let borderColor = "transparent";
          let labelBg = JiguuColors.border;
          let labelColor = JiguuColors.textSecondary;

          // Strict Logic Visuals WITH Correction
          if (state.answered) {
            if (option.isCorrect) {
              // Always highlight correct answer Green
              backgroundColor = "#4CAF50" + "20";
              borderColor = "#4CAF50";
              labelBg = "#4CAF50";
              labelColor = "#fff";
            } else if (isSelected) {
              // Highlight wrong selected answer Red
              backgroundColor = "#F44336" + "20";
              borderColor = "#F44336";
              labelBg = "#F44336";
              labelColor = "#fff";
            }
          }

          return (
            <Pressable
              key={optIndex}
              style={[
                styles.optionButton,
                { backgroundColor, borderColor },
                // Dim if answered AND (not selected AND not correct)
                state.answered && !isSelected && !option.isCorrect && { opacity: 0.5 }
              ]}
              onPress={() => handleSelect(optIndex)}
              disabled={state.answered}
            >
              <View style={[styles.optionLabel, { backgroundColor: labelBg }]}>
                {state.answered && option.isCorrect ? (
                  <Animated.View style={{ opacity: fadeAnim }}>
                    <Feather name="check" size={14} color="#fff" />
                  </Animated.View>
                ) : (
                  <ThemedText style={[styles.optionLabelText, { color: labelColor }]}>
                    {displayLabel}
                  </ThemedText>
                )}
              </View>
              <View style={{ flex: 1 }}>
                <MathRender
                  html={option.text}
                  baseStyle={{
                    ...Typography.small,
                    fontFamily: 'Kalam_400Regular',
                    color: JiguuColors.textPrimary,
                    ...textStyle
                  }}
                  ignoredTags={['img']}
                />
              </View>

              {/* Tick for correct answer (Always show if answered) */}
              {state.answered && option.isCorrect && (
                <Animated.View style={{ opacity: fadeAnim, marginLeft: 'auto' }}>
                  <Feather name="check-circle" size={20} color="#4CAF50" />
                </Animated.View>
              )}
              {/* Cross for wrong selected answer */}
              {state.answered && isSelected && !option.isCorrect && (
                <View style={{ marginLeft: 'auto' }}>
                  <Feather name="x-circle" size={20} color="#F44336" />
                </View>
              )}
            </Pressable>
          );
        })}
      </View>
    </Animated.View>
  );
});

// Wrapper Component
function MCQSection({ mcqs, accentColor = "#9C27B0", textStyle }: MCQSectionProps) {
  const [mcqStates, setMcqStates] = useState<MCQState[]>([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [attemptKey, setAttemptKey] = useState(0);

  // Computed feedback based on current score
  const currentScorePercentage = mcqs.length > 0 ? (score / mcqs.length) * 100 : 0;
  let feedbackMessage = "";
  if (currentScorePercentage >= 90) feedbackMessage = "Excellent! Perfect Score!";
  else if (currentScorePercentage >= 70) feedbackMessage = "Very good performance.";
  else if (currentScorePercentage >= 40) feedbackMessage = "Good effort. Keep practicing.";
  else feedbackMessage = "Better luck next time.";


  const initQuiz = useCallback(() => {
    // Generate new states with reshuffled options
    const newStates = generateMCQStates(mcqs);
    setMcqStates(newStates);
    setScore(0);
    setShowResult(false);
    setAttemptKey(prev => prev + 1); // Force re-render of cards
  }, [mcqs]);

  // Re-init when MCQs prop changes (e.g. tab switch if unmounted)
  useEffect(() => {
    initQuiz();
  }, [initQuiz]);

  const handleAnswer = (index: number, optionIndex: number, isCorrect: boolean) => {
    setMcqStates(prev => {
      const newState = [...prev];
      newState[index] = {
        ...newState[index],
        answered: true,
        isCorrect: isCorrect,
        selectedOptionIndex: optionIndex
      };

      // Check completion immediately
      const allAnswered = newState.every(s => s.answered);
      if (allAnswered) {
        // Show result immediately with no delay
        setShowResult(true);
      }

      return newState;
    });

    if (isCorrect) {
      setScore(s => s + 1);
    }
  };

  const handleRetry = () => {
    // Hide modal first then re-init
    setShowResult(false);
    // Small timeout to allow modal to close before state reset if needed visually, 
    // but user asked for "smoothly", immediate might be better or specific sequence.
    // Immediate state update:
    initQuiz();
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, { backgroundColor: accentColor }]}>
        <ThemedText style={[styles.headerText, textStyle]}>Practice MCQs</ThemedText>
      </View>

      {mcqStates.map((state, index) => (
        <MCQCard
          key={`${index}-${attemptKey}`}
          mcq={mcqs[index]}
          index={index}
          state={state}
          onAnswer={handleAnswer}
          textStyle={textStyle}
        />
      ))}

      <Modal
        visible={showResult}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowResult(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={[styles.modalHeader, { backgroundColor: accentColor }]}>
              <ThemedText style={styles.modalTitle}>MCQs Completed!</ThemedText>
            </View>
            <View style={styles.modalBody}>
              <ThemedText style={styles.modalScore}>{score} / {mcqs.length}</ThemedText>
              <ThemedText style={styles.modalFeedback}>{feedbackMessage}</ThemedText>
            </View>
            <TouchableOpacity
              style={[styles.resetButton, { backgroundColor: accentColor }]}
              onPress={handleRetry}
            >
              <ThemedText style={styles.resetButtonText}>Retry MCQs</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
}
export default memo(MCQSection);

const styles = StyleSheet.create({
  container: {
    backgroundColor: JiguuColors.surface,
    borderRadius: BorderRadius.md,
    overflow: "hidden",
    marginBottom: Spacing.lg,
  },
  header: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    ...Typography.button,
    color: "#fff",
    fontFamily: "Kalam_700Bold",
  },
  // Score container styles removed
  mcqCard: {
    padding: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: JiguuColors.border,
  },
  question: {
    ...Typography.body,
    fontFamily: "Kalam_700Bold",
    color: JiguuColors.textPrimary,
    marginBottom: Spacing.sm,
  },
  optionsGrid: {
    gap: Spacing.xs,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: JiguuColors.surfaceLight,
    borderRadius: BorderRadius.xs,
    padding: Spacing.sm,
    borderWidth: 1,
    borderColor: "transparent",
  },
  optionLabel: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: JiguuColors.border,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Spacing.sm,
  },
  optionLabelText: {
    ...Typography.caption,
    fontFamily: "Nunito_700Bold",
    textTransform: "uppercase",
  },
  optionText: {
    ...Typography.small,
    fontFamily: 'Kalam_400Regular',
    color: JiguuColors.textPrimary,
    flex: 1,
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
  },
  modalHeader: {
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontFamily: 'Kalam_700Bold',
    color: '#fff',
  },
  modalBody: {
    padding: 30,
    alignItems: 'center'
  },
  modalScore: {
    fontSize: 40, // Reduced from 48
    lineHeight: 50, // Added to ensure visibility
    fontFamily: 'Nunito_700Bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center'
  },
  modalFeedback: {
    fontSize: 18,
    fontFamily: 'Kalam_400Regular',
    textAlign: 'center',
    color: '#666'
  },
  resetButton: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  resetButtonText: {
    fontSize: 18,
    fontFamily: 'Kalam_700Bold',
    color: '#fff'
  }
});

