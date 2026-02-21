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
import { ContentService } from "@/services/ContentService";
import { HTMLPanelRenderer } from "@/components/HTMLPanelRenderer";


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

  const availableSections = ContentService.getAvailableSections(chapterId);
  const exerciseSubSections = React.useMemo(() => {
    return [
      ...availableSections.filter(s => s.startsWith('exercise') && s !== 'exercises').sort(),
      availableSections.includes('examples') ? 'examples' : null,
      availableSections.includes('theorems') ? 'theorems' : null,
    ].filter(Boolean) as string[];
  }, [chapterId]);

  const [activeSubSection, setActiveSubSection] = useState<string>("");

  useEffect(() => {
    if (activeSection === "exercises" && exerciseSubSections.length > 0) {
      if (!activeSubSection || !exerciseSubSections.includes(activeSubSection)) {
        setActiveSubSection(exerciseSubSections[0]);
      }
    }
  }, [activeSection, exerciseSubSections]);

  const renderSectionContent = useCallback(() => {
    let sectionToFetch = activeSection as string;

    if (activeSection === "exercises") {
      sectionToFetch = activeSubSection || "exercises";
    }

    const uri = ContentService.getSectionUri(chapterId, sectionToFetch);

    if (!uri) {
      return (
        <EmptyState
          title="Content Not Found"
          message={`The ${sectionToFetch} content for this chapter is missing or being updated.`}
          icon="alert-circle"
        />
      );
    }

    return (
      <HTMLPanelRenderer
        htmlUri={uri}
        targetId=""
      />
    );
  }, [chapterId, activeSection, activeSubSection]);





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
            title="Overview"
            isActive={activeSection === "overview"}
            onPress={() => handleSectionChange("overview")}
            color={accentColor}
            textStyle={hwTitleStyle}
          />
          <TabButton
            title={
              chapterId.startsWith("sci-") ? "Solutions" :
                chapterId.startsWith("sst-") ? "Solutions" :
                  chapterId.startsWith("eng-") ? "Q & A" :
                    "Exercises"
            }
            isActive={activeSection === "exercises"}
            onPress={() => handleSectionChange("exercises")}
            color={accentColor}
            textStyle={hwTitleStyle}
          />
          <TabButton
            title="MCQs"
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
              {exerciseSubSections.map((sub, index) => {
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
    fontFamily: "Nunito_700Bold",
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
    fontFamily: "Nunito_600SemiBold",
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
    fontFamily: "Nunito_700Bold",
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
    fontFamily: "Nunito_700Bold",
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
    fontFamily: "Nunito_600SemiBold",
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
    fontFamily: "Nunito_700Bold",
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
    fontFamily: "Nunito_700Bold",
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
    fontFamily: "Nunito_700Bold",
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
