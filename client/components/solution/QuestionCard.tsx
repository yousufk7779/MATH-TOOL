import React, { memo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, BorderRadius, Typography } from "@/constants/theme";
import { Question } from "@/data/pyqData";





import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useSavedItems } from "@/context/SavedItemsContext";

import { MathRender } from "@/components/MathRender";

const graphImages: Record<string, any> = {
  // ... (keeping existing map)
  "graph_ex2_1_q1_a": require("@/assets/images/polynomials/graph_ex2_1_q1_a.jpg"),
  "graph_ex2_1_q1_b": require("@/assets/images/polynomials/graph_ex2_1_q1_b.jpg"),
  "graph_ex2_1_q1_c": require("@/assets/images/polynomials/graph_ex2_1_q1_c.jpg"),
  "graph_ex2_1_q1_d": require("@/assets/images/polynomials/graph_ex2_1_q1_d.jpg"),
  "graph_ex2_1_q1_e": require("@/assets/images/polynomials/graph_ex2_1_q1_e.jpg"),
  "graph_ex2_1_q1_f": require("@/assets/images/polynomials/graph_ex2_1_q1_f.jpg"),
  "ap_spiral": require("@/assets/chapter5/images/fig_5_4.png"),
  "ap_logs": require("@/assets/chapter5/images/fig_5_5.png"),
  "ap_potato_race": require("@/assets/chapter5/images/fig_5_6.png"),
  "fig_ex3_1_q1_aftab.svg": require("@/assets/chapter3/images/fig_ex3_1_q1_aftab.svg"),
  "fig_ex3_1_q2_cricket.svg": require("@/assets/chapter3/images/fig_ex3_1_q2_cricket.svg"),
  "fig_ex3_1_q3_grapes.svg": require("@/assets/chapter3/images/fig_ex3_1_q3_grapes.svg"),
  "fig_ex3_2_q1_i.svg": require("@/assets/chapter3/images/fig_ex3_2_q1_i.svg"),
  "fig_ex3_2_q1_ii.svg": require("@/assets/chapter3/images/fig_ex3_2_q1_ii.svg"),
  "fig_ex3_2_q4_iii.svg": require("@/assets/chapter3/images/fig_ex3_2_q4_iii.svg"),
  "fig_ex3_2_q5.svg": require("@/assets/chapter3/images/fig_ex3_2_q5.svg"),
  "fig_ex3_2_q7.svg": require("@/assets/chapter3/images/fig_ex3_2_q7.svg"),
  "fig_ex3_new_q4_i.svg": require("@/assets/chapter3/images/fig_ex3_new_q4_i.svg"),
  "fig_example_1.svg": require("@/assets/chapter3/images/fig_example_1.svg"),
  "fig_example_2.svg": require("@/assets/chapter3/images/fig_example_2.svg"),
  "fig_example_3.svg": require("@/assets/chapter3/images/fig_example_3.svg"),
  "fig_example_7.svg": require("@/assets/chapter3/images/fig_example_7.svg"),
  "mcq_k_value.svg": require("@/assets/chapter3/images/mcq_k_value.svg"),
  "mcq_ratios.svg": require("@/assets/chapter3/images/mcq_ratios.svg"),
  "mcq_solutions.svg": require("@/assets/chapter3/images/mcq_solutions.svg"),
  "fig_5_4.png": require("@/assets/chapter5/images/fig_5_4.png"),
  "fig_5_5.png": require("@/assets/chapter5/images/fig_5_5.png"),
  "fig_5_6.png": require("@/assets/chapter5/images/fig_5_6.png"),
  "ex4_1_q2_i.svg": require("@/assets/chapter4/images/ex4_1_q2_i.svg"),
  "ex4_2_q5.svg": require("@/assets/chapter4/images/ex4_2_q5.svg"),
  "ex4_3_q3.svg": require("@/assets/chapter4/images/ex4_3_q3.svg"),
  "ex4_3_q5.svg": require("@/assets/chapter4/images/ex4_3_q5.svg"),
};

interface QuestionCardProps {
  question: Question;
  accentColor?: string;
  chapterId?: string;
  titleStyle?: any;
  contentStyle?: any;
}

function QuestionCard({ question, accentColor = JiguuColors.quadraticEquations, chapterId = "ch1-real-numbers", titleStyle, contentStyle }: QuestionCardProps) {
  const { isBookmarked, isImportant, toggleBookmark, toggleImportant } = useSavedItems();

  const bookmarked = isBookmarked(question.id);
  const important = isImportant(question.id);

  const handleBookmark = () => {
    toggleBookmark({
      id: question.id,
      type: "question",
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
        <View style={styles.questionTextContainer}>
          <MathRender
            html={question.question}
            baseStyle={{
              ...Typography.body,
              color: JiguuColors.textPrimary,
              lineHeight: 24,
              textAlign: "justify",
              ...contentStyle
            }}
            classesStyles={{
              'sub-question': { fontFamily: "Nunito_700Bold", color: accentColor, marginTop: 4 }
            }}
            ignoredTags={['img']}
          />
        </View>
      </View>

      <View style={styles.solutionBox}>
        {question.image && graphImages[question.image] ? (
          <View style={styles.imageContainer}>
            {typeof graphImages[question.image] === 'function' || typeof graphImages[question.image] === 'object' && !graphImages[question.image].uri && !Number.isInteger(graphImages[question.image]) ? (
              React.createElement(graphImages[question.image]?.default ?? graphImages[question.image], { width: "90%", height: 150 })
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
        {question.solution && question.solution.map((step, index) => {
          const isFormula = step.startsWith("[Formula]");
          const displayStep = isFormula ? step.replace(/\[Formula\]\s?/, "") : step;
          return (
            <View key={index} style={styles.stepRow}>
              <MathRender
                html={displayStep}
                baseStyle={{
                  ...Typography.small,
                  color: isFormula ? "#FF7043" : JiguuColors.textSecondary,
                  lineHeight: 28,
                  textAlign: "justify",
                  fontFamily: isFormula ? "Kalam_700Bold" : undefined,
                  fontWeight: isFormula ? "bold" : undefined,
                  ...contentStyle
                }}
                ignoredTags={['img']}
              />
            </View>
          );
        })}
        {question.answer && (
          <View style={[styles.answerBox, { backgroundColor: "#4CAF50" + "15", borderColor: "#4CAF50" }]}>
            <MathRender
              html={question.answer}
              baseStyle={{ ...Typography.body, fontFamily: "Nunito_700Bold", color: "#4CAF50", textAlign: "justify" }}
              ignoredTags={['img']}
            />
          </View>
        )}
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
    lineHeight: 28,
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
    width: "90%",
    height: 150,
    borderRadius: BorderRadius.xs,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  questionTextContainer: {},
  fractionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 3,
    transform: [{ translateY: 4 }],
  },
  numeratorContainer: {
    alignItems: 'center',
    marginBottom: 1,
  },
  numeratorText: {
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 14,
  },
  separator: {
    height: 1,
    width: '100%',
    minWidth: 10,
    backgroundColor: 'black',
  },
  denominatorContainer: {
    alignItems: 'center',
    marginTop: 1,
  },
  denominatorText: {
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 14,
  },
});
