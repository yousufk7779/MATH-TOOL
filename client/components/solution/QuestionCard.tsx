import React, { memo } from "react";
import { StyleSheet, View, Image } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, BorderRadius, Typography } from "@/constants/theme";
import { Question } from "@/data/pyqData";

// Placeholder for future image handling - currently empty to avoid missing asset errors
const graphImages: Record<string, any> = {};

interface QuestionCardProps {
  question: Question;
  accentColor?: string;
  chapterId?: string;
  titleStyle?: any;
  contentStyle?: any;
}

function QuestionCard({ question, accentColor = JiguuColors.quadraticEquations, chapterId = "ch1-real-numbers", titleStyle, contentStyle }: QuestionCardProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.questionBox, { borderLeftColor: accentColor }]}>
        <View style={styles.headerRow}>
          <ThemedText style={[styles.questionNumber, { color: accentColor }, titleStyle]}>
            {question.number}
          </ThemedText>
        </View>
        <View style={styles.questionTextContainer}>
          <ThemedText
            style={{
              ...Typography.body,
              color: JiguuColors.textPrimary,
              lineHeight: 24,
              textAlign: "justify",
              ...contentStyle
            }}
          >
            {question.question}
          </ThemedText>
        </View>
      </View>

      <View style={styles.solutionBox}>
        {/* Image rendering logic paused/removed until assets are restored/new assets added */}
        {question.image && graphImages[question.image] ? (
          <View style={styles.imageContainer}>
            {/* Placeholder for future image rendering */}
          </View>
        ) : null}

        <ThemedText style={[styles.solutionLabel, titleStyle]}>Solution:</ThemedText>
        {question.solution && question.solution.map((step, index) => {
          const isFormula = step.startsWith("[Formula]");
          const displayStep = isFormula ? step.replace(/\[Formula\]\s?/, "") : step;
          return (
            <View key={index} style={styles.stepRow}>
              <ThemedText
                style={{
                  ...Typography.small,
                  color: isFormula ? "#FF7043" : JiguuColors.textSecondary,
                  lineHeight: 28,
                  textAlign: "justify",
                  fontFamily: isFormula ? "Kalam_700Bold" : undefined,
                  fontWeight: isFormula ? "bold" : undefined,
                  ...contentStyle
                }}
              >
                {displayStep}
              </ThemedText>
            </View>
          );
        })}
        {question.answer && (
          <View style={[styles.answerBox, { backgroundColor: "#4CAF50" + "15", borderColor: "#4CAF50" }]}>
            <ThemedText
              style={{ ...Typography.body, fontFamily: "Kalam_700Bold", color: "#4CAF50", textAlign: "justify" }}
            >
              {question.answer}
            </ThemedText>
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
    fontFamily: "Kalam_700Bold",
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
    fontFamily: "Kalam_700Bold",
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
    fontFamily: "Kalam_700Bold",
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
});
