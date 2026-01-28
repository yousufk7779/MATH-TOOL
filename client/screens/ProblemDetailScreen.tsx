import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useHeaderHeight } from "@react-navigation/elements";
import { useRoute, RouteProp } from "@react-navigation/native";

import { ThemedText } from "@/components/ThemedText";
import { StepCard } from "@/components/StepCard";
import { useTheme } from "@/hooks/useTheme";
import { Spacing, BorderRadius } from "@/constants/theme";
import type { RootStackParamList } from "@/navigation/RootStackNavigator";

type ProblemDetailRouteProp = RouteProp<RootStackParamList, "ProblemDetail">;

export default function ProblemDetailScreen() {
  const insets = useSafeAreaInsets();
  const headerHeight = useHeaderHeight();
  const { theme } = useTheme();
  const route = useRoute<ProblemDetailRouteProp>();
  
  const { historyItem } = route.params;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.backgroundRoot }]}
      contentContainerStyle={[
        styles.content,
        {
          paddingTop: headerHeight + Spacing.xl,
          paddingBottom: insets.bottom + Spacing["3xl"],
        },
      ]}
      scrollIndicatorInsets={{ bottom: insets.bottom }}
    >
      <View style={[styles.problemCard, { backgroundColor: theme.backgroundDefault, borderColor: theme.border }]}>
        <View style={styles.problemHeader}>
          <View style={[styles.categoryBadge, { backgroundColor: theme.primary + "20" }]}>
            <ThemedText type="small" style={{ color: theme.primary, fontWeight: "600" }}>
              {historyItem.category}
            </ThemedText>
          </View>
        </View>
        <ThemedText type="body" style={styles.problemText}>
          {historyItem.problem}
        </ThemedText>
      </View>

      <View style={[styles.answerCard, { backgroundColor: theme.success + "10", borderColor: theme.success + "40" }]}>
        <ThemedText type="small" style={[styles.answerLabel, { color: theme.textSecondary }]}>
          Answer
        </ThemedText>
        <ThemedText type="h3" style={{ color: theme.success }}>
          {historyItem.answer}
        </ThemedText>
      </View>

      <View style={styles.stepsSection}>
        <ThemedText type="h4" style={styles.stepsTitle}>
          Step-by-Step Solution
        </ThemedText>
        {historyItem.steps.map((step, index) => (
          <StepCard
            key={step.stepNumber}
            stepNumber={step.stepNumber}
            title={step.title}
            explanation={step.explanation}
            formula={step.formula}
            isLast={index === historyItem.steps.length - 1}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing.lg,
  },
  problemCard: {
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
    padding: Spacing.lg,
    marginBottom: Spacing.lg,
  },
  problemHeader: {
    flexDirection: "row",
    marginBottom: Spacing.md,
  },
  categoryBadge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.xs,
  },
  problemText: {
    fontWeight: "500",
  },
  answerCard: {
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
    padding: Spacing.lg,
    marginBottom: Spacing.xl,
    alignItems: "center",
  },
  answerLabel: {
    marginBottom: Spacing.xs,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  stepsSection: {
    marginBottom: Spacing.lg,
  },
  stepsTitle: {
    marginBottom: Spacing.lg,
  },
});
