import React, { memo, useState } from "react";
import { StyleSheet, View, Pressable, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, BorderRadius, Typography } from "@/constants/theme";
import { Question } from "@/data/chapterContent";

const graphImages: Record<string, any> = {
  "graph_ex2_1_q1_a": require("../../../assets/images/polynomials/graph_ex2_1_q1_a.jpg"),
  "graph_ex2_1_q1_b": require("../../../assets/images/polynomials/graph_ex2_1_q1_b.jpg"),
  "graph_ex2_1_q1_c": require("../../../assets/images/polynomials/graph_ex2_1_q1_c.jpg"),
  "graph_ex2_1_q1_d": require("../../../assets/images/polynomials/graph_ex2_1_q1_d.jpg"),
  "graph_ex2_1_q1_e": require("../../../assets/images/polynomials/graph_ex2_1_q1_e.jpg"),
  "graph_ex2_1_q1_f": require("../../../assets/images/polynomials/graph_ex2_1_q1_f.jpg"),
};

interface QuestionCardProps {
  question: Question;
  accentColor?: string;
}

function QuestionCard({ question, accentColor = JiguuColors.quadraticEquations }: QuestionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <View style={[styles.questionBox, { borderLeftColor: accentColor }]}>
        <ThemedText style={[styles.questionNumber, { color: accentColor }]}>
          {question.number}
        </ThemedText>
        <ThemedText style={styles.questionText}>{question.question}</ThemedText>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.toggleButton,
          { backgroundColor: accentColor + "15" },
          pressed && { opacity: 0.7 },
        ]}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <ThemedText style={[styles.toggleText, { color: accentColor }]}>
          {isExpanded ? "Hide Solution" : "View Solution"}
        </ThemedText>
        <Feather
          name={isExpanded ? "chevron-up" : "chevron-down"}
          size={18}
          color={accentColor}
        />
      </Pressable>

      {isExpanded ? (
        <View style={styles.solutionBox}>
          {question.image && graphImages[question.image] ? (
            <View style={styles.imageContainer}>
              <Image
                source={graphImages[question.image]}
                style={styles.graphImage}
                resizeMode="contain"
              />
            </View>
          ) : null}
          <ThemedText style={styles.solutionLabel}>Solution:</ThemedText>
          {question.solution.map((step, index) => (
            <View key={index} style={styles.stepRow}>
              <ThemedText style={styles.stepText}>{step}</ThemedText>
            </View>
          ))}
          <View style={[styles.answerBox, { backgroundColor: "#4CAF50" + "15", borderColor: "#4CAF50" }]}>
            <ThemedText style={styles.answerText}>{question.answer}</ThemedText>
          </View>
        </View>
      ) : null}
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
  questionText: {
    ...Typography.body,
    color: JiguuColors.textPrimary,
    lineHeight: 24,
    textAlign: "justify",
  },
  toggleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Spacing.sm,
    gap: Spacing.xs,
  },
  toggleText: {
    ...Typography.small,
    fontFamily: "Nunito_600SemiBold",
  },
  solutionBox: {
    padding: Spacing.md,
    paddingTop: 0,
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
