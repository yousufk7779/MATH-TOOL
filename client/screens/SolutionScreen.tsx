import React, { memo, useState, useCallback, useEffect } from "react";
import { StyleSheet, View, ScrollView, Pressable } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { EmptyState } from "@/components/EmptyState";
// Removing unused imports related to old JSON UI architecture

import { JiguuColors, Spacing, Typography, BorderRadius } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { getChapter } from "@/data/chapters";
import { getChapterContent } from "@/data/chapterContent";


type SolutionRouteProp = RouteProp<RootStackParamList, "Solution">;

type SectionType = "overview" | "exercises" | "mcq";
type ExerciseViewType = "menu" | "exercise" | "examples" | "theorems";

interface TabButtonProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
  color: string;
  textStyle?: any;
}

const TabButton = memo(({ title, isActive, onPress, color, textStyle }: TabButtonProps) => (
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
        textStyle,
      ]}
    >
      {title}
    </ThemedText>
  </Pressable>
));

const SubTabButton = memo(({ title, isActive, onPress, color, textStyle }: TabButtonProps) => (
  <Pressable
    style={[
      styles.subTabButton,
      isActive && { backgroundColor: color, borderColor: color },
    ]}
    onPress={onPress}
  >
    <ThemedText
      style={[
        styles.tabText,
        isActive && styles.tabTextActive,
        textStyle,
      ]}
    >
      {title}
    </ThemedText>
  </Pressable>
));

interface NavigationButtonProps {
  title: string;
  color: string;
  onPress: () => void;
  icon?: keyof typeof Feather.glyphMap;
  textStyle?: any;
}

const NavigationButton = memo(({ title, color, onPress, icon, textStyle }: NavigationButtonProps) => (
  <Pressable
    style={[styles.navButton, { backgroundColor: color }]}
    onPress={onPress}
  >
    {icon ? <Feather name={icon} size={18} color="#fff" style={styles.navButtonIcon} /> : null}
    <ThemedText style={[styles.navButtonText, textStyle]}>{title}</ThemedText>
    <Feather name="chevron-right" size={20} color="#fff" />
  </Pressable>
));

interface QuestionButtonProps {
  number: string;
  onPress: () => void;
  isActive: boolean;
  color: string;
  textStyle?: any;
}

const QuestionButton = memo(({ number, onPress, isActive, color, textStyle }: QuestionButtonProps) => (
  <Pressable
    style={[
      styles.questionButton,
      isActive ? { backgroundColor: color, borderColor: color } : { borderColor: color },
    ]}
    onPress={onPress}
  >
    <ThemedText
      style={[
        styles.questionButtonText,
        textStyle,
        { color: isActive ? "#fff" : color }
      ]}
    >
      {number}
    </ThemedText>
  </Pressable>
));

function SolutionScreen() {
  const route = useRoute<SolutionRouteProp>();
  const { chapterId, chapterName, section } = route.params;
  const [activeSection, setActiveSection] = useState<SectionType>("overview");

  const chapter = getChapter(chapterId);

  const accentColor = chapter?.color || JiguuColors.quadraticEquations;

  // Handwritten Style Logic for All Chapters
  const isHandwritten = true;
  const hwStyle = isHandwritten ? { fontFamily: "Kalam_400Regular", color: "#fff" } : {};
  // For headings or larger text if needed
  const hwTitleStyle = isHandwritten ? { fontFamily: "Kalam_700Bold", color: "#fff" } : {};
  // Background for Chapter 5 needs to be dark for white text
  const ch5Background = isHandwritten ? { backgroundColor: "#1a1a2e" } : {}; // Dark blue equivalent

  // Handle Deep Linking / Search Navigation
  useEffect(() => {
    if (section) {
      setActiveSection(section as SectionType);
    }
  }, [section]);

  const handleSectionChange = useCallback((section: SectionType) => {
    setActiveSection(section);
  }, []);

  const chapterData = getChapterContent(chapterId);

  const exerciseSubSections = React.useMemo(() => {
    if (!chapterData || !chapterData.exercises) return [];
    return chapterData.exercises.map((ex: any) => ex.id);
  }, [chapterData]);

  const [activeSubSection, setActiveSubSection] = useState<string>("");

  useEffect(() => {
    if (activeSection === "exercises" && exerciseSubSections.length > 0) {
      if (!activeSubSection || !exerciseSubSections.includes(activeSubSection)) {
        setActiveSubSection(exerciseSubSections[0]);
      }
    }
  }, [activeSection, exerciseSubSections]);

  const [contentScale, setContentScale] = useState<number>(1);
  const zoomIn = useCallback(() => setContentScale(prev => Math.min(prev + 0.2, 2.5)), []);
  const zoomOut = useCallback(() => setContentScale(prev => Math.max(prev - 0.2, 0.8)), []);

  const renderSectionContent = useCallback(() => {
    let sectionToFetch = activeSection as string;
    if (activeSection === "exercises") {
      sectionToFetch = activeSubSection || "exercises";
    }

    if (!chapterData) {
      return (
        <EmptyState
          title="Content Update in Progress"
          message={`Premium JSON structured content for this chapter is currently being migrated and will be available very soon.`}
          icon="clock"
        />
      );
    }

    const scaledBody = { ...Typography.body, fontSize: (Typography.body.fontSize || 16) * contentScale };
    const scaledH4 = { ...Typography.h4, fontSize: (Typography.h4.fontSize || 20) * contentScale };
    const scaledSmall = { ...Typography.small, fontSize: (Typography.small.fontSize || 14) * contentScale };

    return (
      <View style={{ padding: Spacing.md, paddingBottom: 60 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: Spacing.sm, gap: Spacing.sm }}>
          <Pressable onPress={zoomIn} style={{ padding: 8, backgroundColor: JiguuColors.surfaceLight, borderRadius: 8 }}>
            <Feather name="zoom-in" size={20} color={JiguuColors.textPrimary} />
          </Pressable>
          <Pressable onPress={zoomOut} style={{ padding: 8, backgroundColor: JiguuColors.surfaceLight, borderRadius: 8 }}>
            <Feather name="zoom-out" size={20} color={JiguuColors.textPrimary} />
          </Pressable>
        </View>

        {activeSection === "overview" && (
          <View style={{ gap: Spacing.md }}>
            <ThemedText style={[scaledBody, { color: JiguuColors.textPrimary }]}>{chapterData.introduction}</ThemedText>

            {chapterData.definitions && chapterData.definitions.length > 0 && (
              <View style={{ marginTop: Spacing.md, backgroundColor: JiguuColors.surface, padding: Spacing.md, borderRadius: BorderRadius.md }}>
                <ThemedText style={[scaledH4, { color: accentColor, marginBottom: Spacing.sm }]}>Key Definitions</ThemedText>
                {chapterData.definitions.map((def, idx) => (
                  <View key={idx} style={{ marginBottom: Spacing.sm }}>
                    <ThemedText style={[scaledBody, { fontFamily: "Kalam_700Bold", color: JiguuColors.textPrimary }]}>{def.term}:</ThemedText>
                    <ThemedText style={[scaledSmall, { color: JiguuColors.textSecondary }]}>{def.description}</ThemedText>
                  </View>
                ))}
              </View>
            )}

            {chapterData.keyPoints && chapterData.keyPoints.length > 0 && (
              <View style={{ marginTop: Spacing.md }}>
                <ThemedText style={[scaledH4, { color: accentColor, marginBottom: Spacing.sm }]}>Important Points</ThemedText>
                {chapterData.keyPoints.map((kp, idx) => (
                  <View key={idx} style={{ flexDirection: 'row', marginBottom: Spacing.xs }}>
                    <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: accentColor, marginTop: 8, marginRight: 8 }} />
                    <ThemedText style={[scaledBody, { color: JiguuColors.textPrimary, flex: 1 }]}>{kp}</ThemedText>
                  </View>
                ))}
              </View>
            )}
          </View>
        )}

        {activeSection === "exercises" && (
          <View style={{ gap: Spacing.lg }}>
            {chapterData.exercises?.find((ex: any) => ex.id === sectionToFetch)?.questions?.map((q: any) => (
              <View key={q.id} style={{ backgroundColor: JiguuColors.surface, padding: Spacing.md, borderRadius: BorderRadius.md }}>
                <ThemedText style={[scaledH4, { color: accentColor, marginBottom: Spacing.sm }]}>Q{q.number}. {q.question}</ThemedText>
                <View style={{ marginTop: Spacing.sm, paddingLeft: Spacing.sm, borderLeftWidth: 2, borderLeftColor: JiguuColors.border }}>
                  {q.solution.map((step: string, sIdx: number) => (
                    <ThemedText key={sIdx} style={[scaledBody, { color: JiguuColors.textSecondary, marginBottom: Spacing.xs }]}>{step}</ThemedText>
                  ))}
                </View>
              </View>
            ))}
          </View>
        )}

        {activeSection === "mcq" && (
          <View style={{ gap: Spacing.lg }}>
            {chapterData.mcqs?.map((mcq: any, idx: number) => (
              <View key={mcq.id} style={{ backgroundColor: JiguuColors.surface, padding: Spacing.md, borderRadius: BorderRadius.md }}>
                <ThemedText style={[scaledH4, { color: accentColor, marginBottom: Spacing.md }]}>Q{idx + 1}. {mcq.question}</ThemedText>
                {mcq.options.map((opt: string, oIdx: number) => (
                  <View key={oIdx} style={{ padding: Spacing.sm, borderWidth: 1, borderColor: JiguuColors.border, borderRadius: BorderRadius.sm, marginBottom: Spacing.xs }}>
                    <ThemedText style={[scaledBody, { color: JiguuColors.textSecondary }]}>{opt}</ThemedText>
                  </View>
                ))}
              </View>
            ))}
          </View>
        )}

      </View>
    );
  }, [chapterData, activeSection, activeSubSection, contentScale, accentColor]);





  let tab1Title = "Overview";
  let tab2Title = "Exercises";
  const tab3Title = "MCQs";

  if (chapterId.startsWith("sci-")) {
    tab1Title = "Quick Revision";
    tab2Title = "NCERT Solutions";
  } else if (chapterId.startsWith("sst-")) {
    tab1Title = "Key Concepts";
    tab2Title = "Q & A";
  } else if (chapterId.startsWith("eng-gra-")) {
    tab1Title = "Rules & Formats";
    tab2Title = "Practice Sets";
  } else if (chapterId.startsWith("eng-")) {
    tab1Title = "Summary";
    tab2Title = "Q & A";
  }

  return (
    <ScreenWrapper showBackButton>
      <View style={[styles.staticContainer, ch5Background]}>
        <View style={styles.header}>
          <View style={[styles.chapterIcon, { backgroundColor: accentColor }]}>
            <ThemedText style={styles.chapterIconText}>{chapter?.number}</ThemedText>
          </View>
          <ThemedText style={[styles.title, hwTitleStyle]} numberOfLines={1}>
            {chapter?.name}
          </ThemedText>
        </View>

        <View style={styles.tabContainer}>
          <TabButton
            title={tab1Title}
            isActive={activeSection === "overview"}
            onPress={() => handleSectionChange("overview")}
            color={accentColor}
            textStyle={hwTitleStyle}
          />
          <TabButton
            title={tab2Title}
            isActive={activeSection === "exercises"}
            onPress={() => handleSectionChange("exercises")}
            color={accentColor}
            textStyle={hwTitleStyle}
          />
          <TabButton
            title={tab3Title}
            isActive={activeSection === "mcq"}
            onPress={() => handleSectionChange("mcq")}
            color={accentColor}
            textStyle={hwTitleStyle}
          />
        </View>

        {activeSection === "exercises" && exerciseSubSections.length > 0 && (
          <View style={{ height: 42, marginBottom: Spacing.sm }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.subTabScroll}
              contentContainerStyle={styles.subTabContainer}
            >
              {exerciseSubSections.map((sub: string, index: number) => {
                const title = sub === 'examples' ? 'Examples' :
                  sub === 'theorems' ? 'Theorems' :
                    sub.replace('exercise', 'Exercise ');
                return (
                  <SubTabButton
                    key={sub}
                    title={title}
                    isActive={activeSubSection === sub}
                    onPress={() => setActiveSubSection(sub)}
                    color={accentColor}
                    textStyle={hwTitleStyle}
                  />
                );
              })}
            </ScrollView>
          </View>
        )}

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {renderSectionContent()}
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
}

export default memo(SolutionScreen);

const styles = StyleSheet.create({
  staticContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.sm,
    paddingBottom: 120,
  },
  header: {
    flexDirection: "row",
    marginBottom: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.sm,
    alignItems: "center",
    justifyContent: "center",
  },
  chapterIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: Spacing.sm,
  },
  chapterIconText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Kalam_700Bold",
  },
  title: {
    ...Typography.h4,
    color: JiguuColors.textPrimary,
    textAlign: "center",
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: Spacing.sm,
    marginHorizontal: Spacing.lg,
    backgroundColor: JiguuColors.surface,
    borderRadius: BorderRadius.md,
    padding: Spacing.xs,
    gap: Spacing.xs,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 6, // Reduced vertical padding
    alignItems: "center",
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
    borderColor: "transparent",
  },
  tabText: {
    ...Typography.small,
    fontFamily: "Kalam_400Regular",
    color: JiguuColors.textSecondary,
  },
  tabTextActive: {
    color: "#fff",
  },
  subTabScroll: {
    flex: 1,
  },
  subTabContainer: {
    paddingHorizontal: Spacing.lg,
    gap: Spacing.sm,
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  subTabButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    alignItems: "center",
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: "transparent",
    backgroundColor: JiguuColors.surface, // Provide a default background
  },
  introText: {
    ...Typography.body,
    color: JiguuColors.textSecondary,
    lineHeight: 26,
    textAlign: "justify",
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
    textAlign: "justify",
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
    fontFamily: "Kalam_700Bold",
  },
  cruxText: {
    ...Typography.small,
    color: JiguuColors.textSecondary,
    flex: 1,
    lineHeight: 22,
    textAlign: "justify",
  },
  summaryRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: Spacing.sm,
  },
  summaryNumber: {
    ...Typography.body,
    color: "#1565C0",
    fontFamily: "Kalam_700Bold",
    marginRight: Spacing.sm,
    width: 24,
  },
  summaryText: {
    ...Typography.small,
    color: JiguuColors.textSecondary,
    flex: 1,
    lineHeight: 22,
    textAlign: "justify",
  },
  exerciseMenuContainer: {
    gap: Spacing.md,
  },
  navButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.xs,
  },
  navButtonIcon: {
    marginRight: Spacing.sm,
  },
  navButtonText: {
    ...Typography.button,
    color: "#fff",
    flex: 1,
  },
  questionsContainer: {
    flex: 1,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Spacing.md,
    paddingVertical: Spacing.xs,
  },
  backButtonText: {
    ...Typography.small,
    fontFamily: "Kalam_400Regular",
    marginLeft: Spacing.xs,
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
  selectQuestionText: {
    ...Typography.small,
    color: JiguuColors.textSecondary,
    marginBottom: Spacing.md,
  },
  questionButtonsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: Spacing.md,
    justifyContent: "center", // Center grid items
    marginBottom: Spacing.lg,
  },
  questionButton: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.sm,
    borderWidth: 2,
    minWidth: 70,
    alignItems: "center",
  },
  questionButtonText: {
    ...Typography.small,
    fontFamily: "Kalam_700Bold",
  },
  questionContent: {
    marginTop: Spacing.md,
  },
  theoremCard: {
    backgroundColor: JiguuColors.surface,
    borderRadius: BorderRadius.md,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: "#9C27B0",
  },
  theoremHeader: {
    marginBottom: Spacing.md,
  },
  theoremNumber: {
    ...Typography.small,
    color: "#9C27B0",
    fontFamily: "Kalam_700Bold",
    marginBottom: Spacing.xs,
  },
  theoremName: {
    ...Typography.h4,
    color: JiguuColors.textPrimary,
  },
  theoremSection: {
    marginTop: Spacing.md,
  },
  theoremLabel: {
    ...Typography.small,
    color: "#9C27B0",
    fontFamily: "Kalam_700Bold",
    marginBottom: Spacing.xs,
  },
  theoremStatement: {
    ...Typography.body,
    color: JiguuColors.textPrimary,
    lineHeight: 24,
    textAlign: "justify",
  },
  theoremStep: {
    ...Typography.small,
    color: JiguuColors.textSecondary,
    lineHeight: 22,
    marginBottom: Spacing.xs,
    textAlign: "justify",
  },
  theoremExample: {
    ...Typography.small,
    color: JiguuColors.textSecondary,
    fontStyle: "italic",
    lineHeight: 22,
    textAlign: "justify",
  },
});
