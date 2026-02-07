import React, { memo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, BorderRadius, Typography } from "@/constants/theme";
import { Question } from "@/data/chapterContent";





import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useSavedItems } from "@/context/SavedItemsContext";
const graphImages: Record<string, any> = {
  "graph_ex2_1_q1_a": require("../../../assets/images/polynomials/graph_ex2_1_q1_a.jpg"),
  "graph_ex2_1_q1_b": require("../../../assets/images/polynomials/graph_ex2_1_q1_b.jpg"),
  "graph_ex2_1_q1_c": require("../../../assets/images/polynomials/graph_ex2_1_q1_c.jpg"),
  "graph_ex2_1_q1_d": require("../../../assets/images/polynomials/graph_ex2_1_q1_d.jpg"),
  "graph_ex2_1_q1_e": require("../../../assets/images/polynomials/graph_ex2_1_q1_e.jpg"),
  "graph_ex2_1_q1_f": require("../../../assets/images/polynomials/graph_ex2_1_q1_f.jpg"),
  "ap_spiral": require("../../assets/Chapter - 5/images/fig_5_4.png"),
  "ap_logs": require("../../assets/Chapter - 5/images/fig_5_5.png"),
  "ap_potato_race": require("../../assets/Chapter - 5/images/fig_5_6.png"),
};

interface QuestionCardProps {
  question: Question;
  accentColor?: string;
  chapterId?: string;
  titleStyle?: any;
  contentStyle?: any;
}

function QuestionCard({ question, accentColor = JiguuColors.quadraticEquations, chapterId = "ch1-real-numbers", titleStyle, contentStyle }: QuestionCardProps) {
  // Ideally chapterId should be passed. For now, if not passed, we might fail to save correctly or need to infer.
  // We MUST update call sites to pass chapterId.

  const { isBookmarked, isImportant, toggleBookmark, toggleImportant } = useSavedItems();

  const bookmarked = isBookmarked(question.id);
  const important = isImportant(question.id);

  const handleBookmark = () => {
    toggleBookmark({
      id: question.id,
      type: "question", // or 'example' - logic needed to distinguish or just use generic 'question' type?
      // Since QuestionCard is used for both exercises and examples, maybe we should differentiate.
      // Ideally pass 'type' prop or infer.
      // For now, let's assume 'question' unless we know better.
      chapterId: chapterId,
    });
  };

  const handleImportant = () => {
    toggleImportant({
      id: question.id,
      type: "question",
      chapterId: chapterId,
    });
  };
  return (
    <View style={styles.container}>
      <View style={[styles.questionBox, { borderLeftColor: accentColor }]}>
        <View style={styles.headerRow}>
          <ThemedText style={[styles.questionNumber, { color: accentColor }, titleStyle]}>
            {question.number}
          </ThemedText>
          <View style={styles.actionsContainer}>
            <Pressable onPress={handleBookmark} style={styles.actionButton}>
              <Feather
                name="bookmark"
                size={20}
                color={bookmarked ? JiguuColors.accent1 : JiguuColors.textSecondary}
              />
            </Pressable>
            <Pressable onPress={handleImportant} style={styles.actionButton}>
              <Feather
                name="star"
                size={20}
                color={important ? "#FFAB00" : JiguuColors.textSecondary}
              />
            </Pressable>
          </View>
        </View>
        <ThemedText style={[styles.questionText, contentStyle]}>{question.question}</ThemedText>
      </View>

      <View style={styles.solutionBox}>
        {question.image && graphImages[question.image] ? (
          <View style={styles.imageContainer}>
            {typeof graphImages[question.image] === 'function' || typeof graphImages[question.image] === 'object' && !graphImages[question.image].uri && !Number.isInteger(graphImages[question.image]) ? (
              React.createElement(graphImages[question.image])
            ) : (
              <Image
                source={graphImages[question.image]}
                style={styles.graphImage}
                resizeMode="contain"
              />
            )}
          </View>
        ) : null}
        <ThemedText style={[styles.solutionLabel, titleStyle]}>Solution:</ThemedText>
        {question.solution.map((step, index) => (
          <View key={index} style={styles.stepRow}>
            <Text style={[styles.stepText, contentStyle]}>{step}</Text>
          </View>
        ))}
        <View style={[styles.answerBox, { backgroundColor: "#4CAF50" + "15", borderColor: "#4CAF50" }]}>
          <ThemedText style={[styles.answerText, titleStyle]}>{question.answer}</ThemedText>
        </View>
      </View>
    </View>
  );
}

export default memo(QuestionCard);

const styles = StyleSheet.create({
  container: {
    backgroundColor: JiguuColors.surface,
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.md,
    overflow: "hidden",
  },
  questionBox: {
    padding: Spacing.md,
    borderLeftWidth: 3,
  },
  questionNumber: {
    ...Typography.small,
    fontFamily: "Nunito_700Bold",
    marginBottom: Spacing.xs,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: Spacing.xs,
  },
  actionsContainer: {
    flexDirection: "row",
    gap: Spacing.md,
  },
  actionButton: {
    padding: 2,
  },
  questionText: {
    ...Typography.body,
    color: JiguuColors.textPrimary,
    lineHeight: 24,
    textAlign: "justify",
  },
  solutionBox: {
    padding: Spacing.md,
    paddingTop: Spacing.sm,
    borderTopWidth: 1,
    borderTopColor: JiguuColors.border,
  },
  solutionLabel: {
    ...Typography.small,
    fontFamily: "Nunito_700Bold",
    color: "#4CAF50",
    marginBottom: Spacing.sm,
    marginTop: Spacing.sm,
  },
  stepRow: {
    marginBottom: Spacing.xs,
  },
  stepText: {
    ...Typography.small,
    color: JiguuColors.textSecondary,
    lineHeight: 22,
    textAlign: "justify",
  },
  answerBox: {
    marginTop: Spacing.md,
    padding: Spacing.sm,
    borderRadius: BorderRadius.xs,
    borderWidth: 1,
  },
  answerText: {
    ...Typography.body,
    fontFamily: "Nunito_700Bold",
    color: "#4CAF50",
    textAlign: "justify",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: Spacing.md,
    marginTop: Spacing.sm,
    backgroundColor: "#FFFFFF",
    borderRadius: BorderRadius.sm,
    padding: Spacing.sm,
  },
  graphImage: {
    width: "100%",
    height: 200,
    borderRadius: BorderRadius.xs,
  },

});
