import React, { memo, useState, useCallback } from "react";
import { StyleSheet, View, ScrollView, Pressable } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { EmptyState } from "@/components/EmptyState";
import SectionCard from "@/components/solution/SectionCard";
import DefinitionItem from "@/components/solution/DefinitionItem";
import FormulaItem from "@/components/solution/FormulaItem";
import QuestionCard from "@/components/solution/QuestionCard";
import MCQSection from "@/components/solution/MCQSection";
import { JiguuColors, Spacing, Typography, BorderRadius } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { getChapter } from "@/data/chapters";
import { getChapterContent, ChapterContent } from "@/data/chapterContent";

type SolutionRouteProp = RouteProp<RootStackParamList, "Solution">;

type SectionType = "overview" | "exercises" | "mcq";

interface TabButtonProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
  color: string;
}

const TabButton = memo(({ title, isActive, onPress, color }: TabButtonProps) => (
  <Pressable
    style={[
      styles.tabButton,
      isActive && { backgroundColor: color, borderColor: color },
    ]}
    onPress={onPress}
  >
    <ThemedText
      style={[
        styles.tabText,
        isActive && styles.tabTextActive,
      ]}
    >
      {title}
    </ThemedText>
  </Pressable>
));

function SolutionScreen() {
  const route = useRoute<SolutionRouteProp>();
  const { chapterId, chapterName } = route.params;
  const [activeSection, setActiveSection] = useState<SectionType>("overview");

  const chapter = getChapter(chapterId);
  const content = getChapterContent(chapterId);
  const accentColor = chapter?.color || JiguuColors.quadraticEquations;

  const renderOverview = useCallback((data: ChapterContent) => (
    <>
      <SectionCard
        title="Introduction"
        icon="book-open"
        iconColor="#6C63FF"
        borderColor="#6C63FF"
      >
        <ThemedText style={styles.introText}>{data.introduction}</ThemedText>
      </SectionCard>

      <SectionCard
        title="Definitions"
        icon="bookmark"
        iconColor="#4CAF50"
        backgroundColor="#E8F5E9" + "15"
      >
        {data.definitions.map((def, index) => (
          <DefinitionItem key={index} term={def.term} description={def.description} />
        ))}
      </SectionCard>

      <SectionCard
        title="Key Points"
        icon="star"
        iconColor="#FFA000"
        backgroundColor="#FFF8E1" + "15"
      >
        {data.keyPoints.map((point, index) => (
          <View key={index} style={styles.keyPointRow}>
            <View style={[styles.bullet, { backgroundColor: "#FFA000" }]} />
            <ThemedText style={styles.keyPointText}>{point}</ThemedText>
          </View>
        ))}
      </SectionCard>

      <SectionCard
        title="Formulas"
        icon="edit-3"
        iconColor="#9C27B0"
        backgroundColor="#F3E5F5" + "15"
      >
        {data.formulas.map((formula, index) => (
          <FormulaItem key={index} name={formula.name} formula={formula.formula} />
        ))}
      </SectionCard>

      <SectionCard
        title="Chapter Crux"
        icon="zap"
        iconColor="#2196F3"
        backgroundColor="#E3F2FD" + "15"
      >
        {data.crux.map((item, index) => (
          <View key={index} style={styles.cruxRow}>
            <View style={[styles.cruxNumber, { backgroundColor: "#2196F3" }]}>
              <ThemedText style={styles.cruxNumberText}>{index + 1}</ThemedText>
            </View>
            <ThemedText style={styles.cruxText}>{item}</ThemedText>
          </View>
        ))}
      </SectionCard>

      <SectionCard
        title="Summary"
        icon="file-text"
        iconColor="#1565C0"
        backgroundColor="#E3F2FD" + "15"
      >
        {data.summary.map((item, index) => (
          <View key={index} style={styles.summaryRow}>
            <ThemedText style={styles.summaryNumber}>{index + 1}.</ThemedText>
            <ThemedText style={styles.summaryText}>{item}</ThemedText>
          </View>
        ))}
      </SectionCard>
    </>
  ), []);

  const renderExercises = useCallback((data: ChapterContent) => (
    <>
      {data.exercises.map((exercise) => (
        <View key={exercise.id} style={styles.exerciseSection}>
          <View style={[styles.exerciseHeader, { backgroundColor: accentColor }]}>
            <Feather name="edit" size={16} color="#fff" />
            <ThemedText style={styles.exerciseHeaderText}>{exercise.name}</ThemedText>
          </View>
          {exercise.questions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              accentColor={accentColor}
            />
          ))}
        </View>
      ))}
    </>
  ), [accentColor]);

  const renderMCQ = useCallback((data: ChapterContent) => (
    <MCQSection mcqs={data.mcqs} accentColor={accentColor} />
  ), [accentColor]);

  if (!content) {
    return (
      <ScreenWrapper showBackButton>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <ThemedText style={[styles.chapterNumber, { color: accentColor }]}>
              Chapter {chapter?.number || ""}
            </ThemedText>
            <ThemedText style={styles.title}>{chapterName}</ThemedText>
          </View>
          <EmptyState
            title="Coming Soon"
            message="Step-by-step solutions for this chapter will be added soon."
            icon="book-open"
          />
        </ScrollView>
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper showBackButton>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={[styles.badge, { backgroundColor: accentColor }]}>
            <ThemedText style={styles.badgeText}>Class 10 - NCERT</ThemedText>
          </View>
          <ThemedText style={[styles.chapterNumber, { color: accentColor }]}>
            Chapter {content.number}
          </ThemedText>
          <ThemedText style={styles.title}>{content.title}</ThemedText>
        </View>

        <View style={styles.tabContainer}>
          <TabButton
            title="Overview"
            isActive={activeSection === "overview"}
            onPress={() => setActiveSection("overview")}
            color={accentColor}
          />
          <TabButton
            title="Exercises"
            isActive={activeSection === "exercises"}
            onPress={() => setActiveSection("exercises")}
            color={accentColor}
          />
          <TabButton
            title="MCQs"
            isActive={activeSection === "mcq"}
            onPress={() => setActiveSection("mcq")}
            color={accentColor}
          />
        </View>

        {activeSection === "overview" && renderOverview(content)}
        {activeSection === "exercises" && renderExercises(content)}
        {activeSection === "mcq" && renderMCQ(content)}
      </ScrollView>
    </ScreenWrapper>
  );
}

export default memo(SolutionScreen);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.lg,
    paddingBottom: 120,
  },
  header: {
    marginBottom: Spacing.xl,
    alignItems: "center",
  },
  badge: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.full,
    marginBottom: Spacing.sm,
  },
  badgeText: {
    ...Typography.caption,
    color: "#fff",
    fontFamily: "Nunito_600SemiBold",
  },
  chapterNumber: {
    ...Typography.small,
    fontWeight: "700",
    marginBottom: Spacing.xs,
  },
  title: {
    ...Typography.h3,
    color: JiguuColors.textPrimary,
    textAlign: "center",
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: Spacing.xl,
    backgroundColor: JiguuColors.surface,
    borderRadius: BorderRadius.md,
    padding: Spacing.xs,
    gap: Spacing.xs,
  },
  tabButton: {
    flex: 1,
    paddingVertical: Spacing.sm,
    alignItems: "center",
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
    borderColor: "transparent",
  },
  tabText: {
    ...Typography.small,
    fontFamily: "Nunito_600SemiBold",
    color: JiguuColors.textSecondary,
  },
  tabTextActive: {
    color: "#fff",
  },
  introText: {
    ...Typography.body,
    color: JiguuColors.textSecondary,
    lineHeight: 26,
  },
  keyPointRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: Spacing.sm,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 8,
    marginRight: Spacing.sm,
  },
  keyPointText: {
    ...Typography.small,
    color: JiguuColors.textSecondary,
    flex: 1,
    lineHeight: 22,
  },
  cruxRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: Spacing.md,
  },
  cruxNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Spacing.sm,
  },
  cruxNumberText: {
    ...Typography.caption,
    color: "#fff",
    fontFamily: "Nunito_700Bold",
  },
  cruxText: {
    ...Typography.small,
    color: JiguuColors.textSecondary,
    flex: 1,
    lineHeight: 22,
  },
  summaryRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: Spacing.sm,
  },
  summaryNumber: {
    ...Typography.body,
    color: "#1565C0",
    fontFamily: "Nunito_700Bold",
    marginRight: Spacing.sm,
    width: 24,
  },
  summaryText: {
    ...Typography.small,
    color: JiguuColors.textSecondary,
    flex: 1,
    lineHeight: 22,
  },
  exerciseSection: {
    marginBottom: Spacing.xl,
  },
  exerciseHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.xs,
    marginBottom: Spacing.md,
    gap: Spacing.sm,
  },
  exerciseHeaderText: {
    ...Typography.button,
    color: "#fff",
  },
});
