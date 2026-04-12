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
  const isScience = chapterId.startsWith("sci-");
  const isJustifySec = !chapterId.startsWith("sst-") && !chapterId.startsWith("eng-");

  return (
    <View style={styles.container}>
      <View style={[styles.questionBox, { borderLeftColor: accentColor }]}>
        <View style={styles.questionTextContainer}>
          <ThemedText
            style={{
              ...Typography.body,
              color: JiguuColors.textPrimary,
              lineHeight: isJustifySec ? 26 : 24,
              textAlign: isJustifySec ? "justify" : "left",
              ...StyleSheet.flatten(contentStyle),
              fontFamily: isScience ? "NotoSans_400Regular" : "NotoSans_400Regular",
            }}
          >
            <ThemedText style={{ color: accentColor, fontFamily: "NotoSans_400Regular" }}>{question.number} </ThemedText>
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

        <ThemedText style={[styles.solutionLabel, StyleSheet.flatten(titleStyle), { fontFamily: "NotoSans_400Regular" }]}>Solution:</ThemedText>
        {question.solution && question.solution.map((step, index) => {
          const isFormula = step.startsWith("[Formula]");
          const isImage = step.trim().startsWith("<img") && step.includes("src=");

          if (isImage) {
            const srcMatch = step.match(/src=["']([^"']+)["']/);
            const src = srcMatch ? srcMatch[1] : null;
            if (src) {
              return (
                <View key={index} style={styles.imageContainer}>
                  <Image
                    source={{ uri: src }}
                    style={styles.graphImage}
                  />
                </View>
              );
            }
          }

          const displayStep = isFormula ? step.replace(/\[Formula\]\s?/, "") : step;
          return (
            <View key={index} style={styles.stepRow}>
              <ThemedText
                style={{
                  ...Typography.small,
                  color: isFormula ? "#FF7043" : JiguuColors.textSecondary,
                  lineHeight: isJustifySec ? 26 : 28,
                  textAlign: isJustifySec ? "justify" : "left",
                  fontFamily: "NotoSans_400Regular",
                  ...StyleSheet.flatten(contentStyle)
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
              style={{ 
                ...Typography.body, 
                fontFamily: "NotoSans_400Regular", 
                color: "#4CAF50", 
                textAlign: isJustifySec ? "justify" : "left",
                lineHeight: isJustifySec ? 26 : 24 
              }}
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
    fontFamily: "NotoSans_400Regular",
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
    fontFamily: "NotoSans_400Regular",
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
    fontFamily: "NotoSans_400Regular",
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
    width: "100%", // Responsive width
    height: 180, // Base height
    borderRadius: BorderRadius.xs,
    alignSelf: 'center',
    resizeMode: 'contain', // Proportional scaling
    marginVertical: Spacing.sm,
  },
  questionTextContainer: {},
});
