import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useHeaderHeight } from "@react-navigation/elements";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { GradientButton } from "@/components/GradientButton";
import { Button } from "@/components/Button";
import { StepCard } from "@/components/StepCard";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useTheme } from "@/hooks/useTheme";
import { Spacing, BorderRadius } from "@/constants/theme";
import { apiRequest, getApiUrl } from "@/lib/query-client";
import type { RootStackParamList } from "@/navigation/RootStackNavigator";

type SolutionRouteProp = RouteProp<RootStackParamList, "Solution">;

interface SolutionStep {
  stepNumber: number;
  title: string;
  explanation: string;
  formula?: string;
}

interface SolutionData {
  problem: string;
  category: string;
  answer: string;
  steps: SolutionStep[];
}

export default function SolutionScreen() {
  const insets = useSafeAreaInsets();
  const headerHeight = useHeaderHeight();
  const { theme } = useTheme();
  const navigation = useNavigation();
  const route = useRoute<SolutionRouteProp>();
  
  const { problemText, imageBase64 } = route.params;
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [solution, setSolution] = useState<SolutionData | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    solveProblem();
  }, []);

  const solveProblem = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await apiRequest("POST", "/api/solve", {
        problemText,
        imageBase64,
      });
      
      const data = await response.json();
      setSolution(data);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } catch (err) {
      console.error("Error solving problem:", err);
      setError("Failed to solve the problem. Please try again.");
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!solution || saving) return;
    
    setSaving(true);
    try {
      await apiRequest("POST", "/api/history", {
        problem: solution.problem,
        category: solution.category,
        answer: solution.answer,
        steps: solution.steps,
      });
      setSaved(true);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } catch (err) {
      console.error("Error saving to history:", err);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <ThemedView style={[styles.container, styles.centered]}>
        <View style={styles.loadingContent}>
          <LoadingSpinner size={48} />
          <ThemedText type="body" style={[styles.loadingText, { color: theme.textSecondary }]}>
            Analyzing problem...
          </ThemedText>
        </View>
      </ThemedView>
    );
  }

  if (error) {
    return (
      <ThemedView style={[styles.container, styles.centered]}>
        <View style={styles.errorContent}>
          <View style={[styles.errorIcon, { backgroundColor: theme.error + "20" }]}>
            <Feather name="alert-circle" size={32} color={theme.error} />
          </View>
          <ThemedText type="h4" style={styles.errorTitle}>
            Oops!
          </ThemedText>
          <ThemedText type="body" style={[styles.errorText, { color: theme.textSecondary }]}>
            {error}
          </ThemedText>
          <GradientButton onPress={solveProblem} style={styles.retryButton}>
            Try Again
          </GradientButton>
        </View>
      </ThemedView>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundRoot }]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.content,
          {
            paddingTop: headerHeight + Spacing.xl,
            paddingBottom: insets.bottom + Spacing["4xl"],
          },
        ]}
        scrollIndicatorInsets={{ bottom: insets.bottom }}
      >
        {imageBase64 ? (
          <View style={styles.imagePreview}>
            <Image
              source={{ uri: `data:image/jpeg;base64,${imageBase64}` }}
              style={[styles.problemImage, { borderColor: theme.border }]}
              resizeMode="contain"
            />
          </View>
        ) : null}

        <View style={[styles.problemCard, { backgroundColor: theme.backgroundDefault, borderColor: theme.border }]}>
          <View style={styles.problemHeader}>
            <View style={[styles.categoryBadge, { backgroundColor: theme.primary + "20" }]}>
              <ThemedText type="small" style={{ color: theme.primary, fontWeight: "600" }}>
                {solution?.category || "Math"}
              </ThemedText>
            </View>
          </View>
          <ThemedText type="body" style={styles.problemText}>
            {solution?.problem || problemText}
          </ThemedText>
        </View>

        {solution?.answer ? (
          <View style={[styles.answerCard, { backgroundColor: theme.success + "10", borderColor: theme.success + "40" }]}>
            <ThemedText type="small" style={[styles.answerLabel, { color: theme.textSecondary }]}>
              Answer
            </ThemedText>
            <ThemedText type="h3" style={{ color: theme.success }}>
              {solution.answer}
            </ThemedText>
          </View>
        ) : null}

        <View style={styles.stepsSection}>
          <ThemedText type="h4" style={styles.stepsTitle}>
            Step-by-Step Solution
          </ThemedText>
          {solution?.steps.map((step, index) => (
            <StepCard
              key={step.stepNumber}
              stepNumber={step.stepNumber}
              title={step.title}
              explanation={step.explanation}
              formula={step.formula}
              isLast={index === solution.steps.length - 1}
            />
          ))}
        </View>
      </ScrollView>

      <View style={[styles.footer, { backgroundColor: theme.backgroundRoot, borderTopColor: theme.border, paddingBottom: insets.bottom + Spacing.lg }]}>
        {saved ? (
          <View style={[styles.savedBadge, { backgroundColor: theme.success + "20" }]}>
            <Feather name="check-circle" size={20} color={theme.success} />
            <ThemedText type="body" style={{ color: theme.success, marginLeft: Spacing.sm }}>
              Saved to History
            </ThemedText>
          </View>
        ) : (
          <GradientButton
            onPress={handleSave}
            disabled={saving}
            icon={<Feather name="bookmark" size={18} color="#FFFFFF" />}
            style={styles.saveButton}
          >
            {saving ? "Saving..." : "Save to History"}
          </GradientButton>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing.lg,
  },
  loadingContent: {
    alignItems: "center",
  },
  loadingText: {
    marginTop: Spacing.xl,
  },
  errorContent: {
    alignItems: "center",
    paddingHorizontal: Spacing["3xl"],
  },
  errorIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Spacing.lg,
  },
  errorTitle: {
    marginBottom: Spacing.sm,
  },
  errorText: {
    textAlign: "center",
    marginBottom: Spacing.xl,
  },
  retryButton: {
    paddingHorizontal: Spacing["3xl"],
  },
  imagePreview: {
    marginBottom: Spacing.lg,
  },
  problemImage: {
    width: "100%",
    height: 150,
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
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
  footer: {
    paddingTop: Spacing.lg,
    paddingHorizontal: Spacing.lg,
    borderTopWidth: 1,
  },
  saveButton: {
    width: "100%",
  },
  savedBadge: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Spacing.lg,
    borderRadius: BorderRadius.sm,
  },
});
