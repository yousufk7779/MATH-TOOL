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
import { getChapterContent, ChapterContent, Exercise, Example, Theorem, Question } from "@/data/chapterContent";

type SolutionRouteProp = RouteProp<RootStackParamList, "Solution">;

type SectionType = "overview" | "exercises" | "mcq";
type ExerciseViewType = "menu" | "exercise" | "examples" | "theorems";

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

interface NavigationButtonProps {
  title: string;
  color: string;
  onPress: () => void;
  icon?: keyof typeof Feather.glyphMap;
}

const NavigationButton = memo(({ title, color, onPress, icon }: NavigationButtonProps) => (
  <Pressable
    style={[styles.navButton, { backgroundColor: color }]}
    onPress={onPress}
  >
    {icon ? <Feather name={icon} size={18} color="#fff" style={styles.navButtonIcon} /> : null}
    <ThemedText style={styles.navButtonText}>{title}</ThemedText>
    <Feather name="chevron-right" size={20} color="#fff" />
  </Pressable>
));

interface QuestionButtonProps {
  number: string;
  onPress: () => void;
  isActive: boolean;
  color: string;
}

const QuestionButton = memo(({ number, onPress, isActive, color }: QuestionButtonProps) => (
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
        isActive ? { color: "#fff" } : { color: color },
      ]}
    >
      {number}
    </ThemedText>
  </Pressable>
));

function SolutionScreen() {
  const route = useRoute<SolutionRouteProp>();
  // @ts-ignore - Ignoring TS warning for now as RootStackParamList update is pending or complex to type fully quickly
  // @ts-ignore - Ignoring TS warning for now as RootStackParamList update is pending or complex to type fully quickly
  const { chapterId, chapterName, section, exerciseId, questionId, view } = route.params;
  const [activeSection, setActiveSection] = useState<SectionType>("overview");
  const [exerciseView, setExerciseView] = useState<ExerciseViewType>("menu");
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);

  const chapter = getChapter(chapterId);
  const content = getChapterContent(chapterId);
  const accentColor = chapter?.color || JiguuColors.quadraticEquations;

  // Handle Deep Linking / Search Navigation
  React.useEffect(() => {
    if (section) {
      setActiveSection(section as SectionType);
    }

    if (content && section === "exercises") {
      if (view === "examples") {
        setExerciseView("examples");
      } else if (view === "theorems") {
        setExerciseView("theorems");
      } else if (exerciseId) {
        const exercise = content.exercises.find(e => e.id === exerciseId);
        if (exercise) {
          setSelectedExercise(exercise);
          setExerciseView("exercise");

          if (questionId) {
            const question = exercise.questions.find(q => q.id === questionId);
            if (question) {
              setSelectedQuestion(question);
            }
          }
        }
      } else if (questionId && questionId.includes("theorem")) {
        // Legacy/Fallback for theorem deep link
        setExerciseView("theorems");
      }
    }
  }, [section, exerciseId, questionId, content, view]);

  const handleExerciseClick = useCallback((exercise: Exercise) => {
    setSelectedExercise(exercise);
    setSelectedQuestion(null);
    setExerciseView("exercise");
  }, []);

  const handleExamplesClick = useCallback(() => {
    setExerciseView("examples");
  }, []);

  const handleTheoremsClick = useCallback(() => {
    setExerciseView("theorems");
  }, []);

  const handleBackToMenu = useCallback(() => {
    setExerciseView("menu");
    setSelectedExercise(null);
    setSelectedQuestion(null);
  }, []);

  const handleQuestionClick = useCallback((question: Question) => {
    setSelectedQuestion(question);
  }, []);

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
        backgroundColor="#E8F5E915"
      >
        {data.definitions.map((def, index) => (
          <DefinitionItem key={index} term={def.term} description={def.description} />
        ))}
      </SectionCard>

      <SectionCard
        title="Key Points"
        icon="star"
        iconColor="#FFA000"
        backgroundColor="#FFF8E115"
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
        backgroundColor="#F3E5F515"
      >
        {data.formulas.map((formula, index) => (
          <FormulaItem key={index} name={formula.name} formula={formula.formula} />
        ))}
      </SectionCard>

      <SectionCard
        title="Chapter Crux"
        icon="zap"
        iconColor="#2196F3"
        backgroundColor="#E3F2FD15"
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
        backgroundColor="#E3F2FD15"
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

  const renderExerciseMenu = useCallback((data: ChapterContent) => (
    <View style={styles.exerciseMenuContainer}>
      {data.exercises.map((exercise) => (
        <NavigationButton
          key={exercise.id}
          title={exercise.name}
          color={accentColor}
          onPress={() => handleExerciseClick(exercise)}
          icon="edit"
        />
      ))}

      {data.examples.length > 0 ? (
        <NavigationButton
          title="NCERT Examples"
          color="#6C63FF"
          onPress={handleExamplesClick}
          icon="book"
        />
      ) : null}

      {data.theorems && data.theorems.length > 0 ? (
        <NavigationButton
          title="Important Theorems"
          color="#9C27B0"
          onPress={handleTheoremsClick}
          icon="award"
        />
      ) : null}
    </View>
  ), [accentColor, handleExerciseClick, handleExamplesClick, handleTheoremsClick]);

  const renderExerciseQuestions = useCallback((exercise: Exercise) => (
    <View style={styles.questionsContainer}>
      <Pressable style={styles.backButton} onPress={handleBackToMenu}>
        <Feather name="arrow-left" size={18} color={accentColor} />
        <ThemedText style={[styles.backButtonText, { color: accentColor }]}>Back to Menu</ThemedText>
      </Pressable>

      <View style={[styles.exerciseHeader, { backgroundColor: accentColor }]}>
        <Feather name="edit" size={16} color="#fff" />
        <ThemedText style={styles.exerciseHeaderText}>{exercise.name}</ThemedText>
      </View>

      <ThemedText style={styles.selectQuestionText}>Select a Question:</ThemedText>

      <View style={styles.questionButtonsGrid}>
        {exercise.questions.map((question) => (
          <QuestionButton
            key={question.id}
            number={question.number}
            onPress={() => handleQuestionClick(question)}
            isActive={selectedQuestion?.id === question.id}
            color={accentColor}
          />
        ))}
      </View>

      {selectedQuestion ? (
        <View style={styles.questionContent}>
          <QuestionCard
            question={selectedQuestion}
            accentColor={accentColor}
          />
        </View>
      ) : null}
    </View>
  ), [accentColor, handleBackToMenu, handleQuestionClick, selectedQuestion]);

  const renderExamples = useCallback((data: ChapterContent) => {
    const examplesToShow = questionId
      ? data.examples.filter(e => e.id === questionId)
      : data.examples;

    return (
      <View style={styles.questionsContainer}>
        <Pressable style={styles.backButton} onPress={handleBackToMenu}>
          <Feather name="arrow-left" size={18} color="#6C63FF" />
          <ThemedText style={[styles.backButtonText, { color: "#6C63FF" }]}>Back to Menu</ThemedText>
        </Pressable>

        <View style={[styles.exerciseHeader, { backgroundColor: "#6C63FF" }]}>
          <Feather name="book" size={16} color="#fff" />
          <ThemedText style={styles.exerciseHeaderText}>NCERT Examples</ThemedText>
        </View>

        {examplesToShow.map((example) => (
          <QuestionCard
            key={example.id}
            question={{
              id: example.id,
              number: example.number,
              question: example.question,
              solution: example.solution,
              answer: example.answer,
            }}
            accentColor="#6C63FF"
          />
        ))}
      </View>
    );
  }, [handleBackToMenu, questionId]);

  const renderTheorems = useCallback((data: ChapterContent) => {
    // If view is already 'theorems', we can trust questionId refers to a theorem if present
    const theoremsToShow = questionId
      ? data.theorems?.filter(t => t.id === questionId)
      : data.theorems;

    return (
      <View style={styles.questionsContainer}>
        <Pressable style={styles.backButton} onPress={handleBackToMenu}>
          <Feather name="arrow-left" size={18} color="#9C27B0" />
          <ThemedText style={[styles.backButtonText, { color: "#9C27B0" }]}>Back to Menu</ThemedText>
        </Pressable>

        <View style={[styles.exerciseHeader, { backgroundColor: "#9C27B0" }]}>
          <Feather name="award" size={16} color="#fff" />
          <ThemedText style={styles.exerciseHeaderText}>Important Theorems</ThemedText>
        </View>

        {theoremsToShow?.map((theorem) => (
          <View key={theorem.id} style={styles.theoremCard}>
            <View style={styles.theoremHeader}>
              <ThemedText style={styles.theoremNumber}>{theorem.number}</ThemedText>
              <ThemedText style={styles.theoremName}>{theorem.name}</ThemedText>
            </View>

            <View style={styles.theoremSection}>
              <ThemedText style={styles.theoremLabel}>Statement:</ThemedText>
              <ThemedText style={styles.theoremStatement}>{theorem.statement}</ThemedText>
            </View>

            {theorem.proof && theorem.proof.length > 0 ? (
              <View style={styles.theoremSection}>
                <ThemedText style={styles.theoremLabel}>Proof:</ThemedText>
                {theorem.proof.map((step, index) => (
                  <ThemedText key={index} style={styles.theoremStep}>{step}</ThemedText>
                ))}
              </View>
            ) : null}

            {theorem.example ? (
              <View style={styles.theoremSection}>
                <ThemedText style={styles.theoremLabel}>Example:</ThemedText>
                <ThemedText style={styles.theoremExample}>{theorem.example}</ThemedText>
              </View>
            ) : null}
          </View>
        ))}
      </View>
    );
  }, [handleBackToMenu, questionId]);

  const renderExercises = useCallback((data: ChapterContent) => {
    switch (exerciseView) {
      case "menu":
        return renderExerciseMenu(data);
      case "exercise":
        return selectedExercise ? renderExerciseQuestions(selectedExercise) : renderExerciseMenu(data);
      case "examples":
        return renderExamples(data);
      case "theorems":
        return renderTheorems(data);
      default:
        return renderExerciseMenu(data);
    }
  }, [exerciseView, selectedExercise, renderExerciseMenu, renderExerciseQuestions, renderExamples, renderTheorems]);

  const renderMCQ = useCallback((data: ChapterContent) => (
    <MCQSection mcqs={data.mcqs} accentColor={accentColor} />
  ), [accentColor]);

  const handleSectionChange = useCallback((section: SectionType) => {
    setActiveSection(section);
    if (section !== "exercises") {
      setExerciseView("menu");
      setSelectedExercise(null);
      setSelectedQuestion(null);
    }
  }, []);

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
          <ThemedText style={[styles.chapterNumber, { color: accentColor }]}>
            Chapter {content.number}
          </ThemedText>
          <ThemedText style={styles.title}>{content.title}</ThemedText>
        </View>

        <View style={styles.tabContainer}>
          <TabButton
            title="Overview"
            isActive={activeSection === "overview"}
            onPress={() => handleSectionChange("overview")}
            color={accentColor}
          />
          <TabButton
            title="Exercises"
            isActive={activeSection === "exercises"}
            onPress={() => handleSectionChange("exercises")}
            color={accentColor}
          />
          <TabButton
            title="MCQs"
            isActive={activeSection === "mcq"}
            onPress={() => handleSectionChange("mcq")}
            color={accentColor}
          />
        </View>

        {activeSection === "overview" ? renderOverview(content) : null}
        {activeSection === "exercises" ? renderExercises(content) : null}
        {activeSection === "mcq" ? renderMCQ(content) : null}
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
    gap: Spacing.sm,
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
