
import React, { memo, useState, useCallback, useEffect, useMemo } from "react";
import { StyleSheet, View, ScrollView, Pressable, ActivityIndicator } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { EmptyState } from "@/components/EmptyState";
import { HTMLPanelRenderer } from "@/components/HTMLPanelRenderer";
import MCQSection from "@/components/solution/MCQSection";
import { JiguuColors, Spacing, Typography, BorderRadius } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { chapterList } from "@/data/chapterRegistry";
import { ContentService, QuestionBlock, MCQ as MCQType } from "@/services/ContentService";
import { useSavedItems } from "@/context/SavedItemsContext";

type SolutionRouteProp = RouteProp<RootStackParamList, "Solution">;

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
  const { chapterId } = route.params;
  const { isBookmarked, toggleBookmark, isImportant, toggleImportant } = useSavedItems();

  // Find Chapter Info
  const chapter = useMemo(() => chapterList.find(c => c.id === chapterId), [chapterId]);
  const defaultTab = chapter?.exercises[0]?.id || 'overview';

  const [activeTabId, setActiveTabId] = useState<string>(defaultTab);
  const [loading, setLoading] = useState(false);

  // Data States
  const [questions, setQuestions] = useState<QuestionBlock[]>([]);
  const [mcqs, setMcqs] = useState<MCQType[]>([]);
  const [currentHtmlUri, setCurrentHtmlUri] = useState<string | null>(null);
  const [currentHtmlContent, setCurrentHtmlContent] = useState<string | null>(null);

  // Selection State (for Exercises)
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);

  // Load Content when Tab Changes
  useEffect(() => {
    let isMounted = true;

    const loadContent = async () => {
      if (!chapter) return;
      setLoading(true);
      setSelectedQuestionId(null);
      setCurrentHtmlUri(null);
      setCurrentHtmlContent(null);
      setQuestions([]);
      setMcqs([]);

      try {
        // resolve URI
        const uri = await ContentService.getHtmlUri(chapter.id, activeTabId);
        if (isMounted) setCurrentHtmlUri(uri);

        if (activeTabId === 'mcqs') {
          const fetchedMcqs = await ContentService.getMCQs(chapter.id);
          if (isMounted) setMcqs(fetchedMcqs);
        } else if (activeTabId === 'overview') {
          // For overview, we prefer loading content string to avoid WebView file access issues
          const content = await ContentService.getHtmlContent(chapter.id, activeTabId);
          if (isMounted) setCurrentHtmlContent(content);
        } else if (activeTabId !== 'eg') {
          // Exercises
          const fetchedQuestions = await ContentService.getQuestions(chapter.id, activeTabId);
          if (isMounted) {
            setQuestions(fetchedQuestions);
            // Always load content string to ensure we can inject MathJax and avoid access denied
            const content = await ContentService.getHtmlContent(chapter.id, activeTabId);
            if (isMounted) setCurrentHtmlContent(content);
          }
        } else if (activeTabId === 'eg') {
          // Examples
          const fetchedQuestions = await ContentService.getQuestions(chapter.id, activeTabId);
          if (isMounted) {
            setQuestions(fetchedQuestions);
            const content = await ContentService.getHtmlContent(chapter.id, activeTabId);
            if (isMounted) setCurrentHtmlContent(content);
          }
        }

      } catch (e) {
        console.error("Failed to load tab content", e);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadContent();
    return () => { isMounted = false; };
  }, [chapter, activeTabId]);

  const handleQuestionSelect = useCallback((qId: string) => {
    setSelectedQuestionId(qId);
  }, []);

  const handleBookmark = useCallback(() => {
    if (!selectedQuestionId) return;
    toggleBookmark({
      id: selectedQuestionId,
      type: 'question',
      chapterId: chapterId
    });
  }, [selectedQuestionId, chapterId, toggleBookmark]);

  const handleImportant = useCallback(() => {
    if (!selectedQuestionId) return;
    toggleImportant({
      id: selectedQuestionId,
      type: 'question',
      chapterId: chapterId
    });
  }, [selectedQuestionId, chapterId, toggleImportant]);

  // Renderers
  const renderTabs = () => (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.tabsContainer}
      contentContainerStyle={styles.tabsContent}
    >
      {chapter?.exercises.map((ex) => (
        <TabButton
          key={ex.id}
          title={ex.title}
          isActive={activeTabId === ex.id}
          onPress={() => setActiveTabId(ex.id)}
          color={JiguuColors.accent3}
        />
      ))}
    </ScrollView>
  );

  const renderContent = () => {
    if (loading) {
      return <ActivityIndicator size="large" color={JiguuColors.accent3} style={{ marginTop: 50 }} />;
    }

    if (activeTabId === 'mcqs') {
      return (
        <View style={styles.contentArea}>
          <MCQSection mcqs={mcqs} />
        </View>
      );
    }

    if (activeTabId === 'overview') {
      if (!currentHtmlContent && !currentHtmlUri) return <EmptyState title="Error" message="Could not load content." />;
      return (
        <View style={styles.fullPanel}>
          <HTMLPanelRenderer
            htmlUri={currentHtmlUri || undefined}
            htmlContent={currentHtmlContent || undefined}
            targetId=""
          />
        </View>
      );
    }

    // Exercise or Examples
    return (
      <View style={styles.contentArea}>
        {/* Question Grid */}
        {questions.length > 0 ? (
          <View style={styles.gridContainer}>
            <ThemedText style={styles.sectionTitle}>Select a Question:</ThemedText>
            <View style={styles.grid}>
              {questions.map((q) => (
                <Pressable
                  key={q.id}
                  onPress={() => handleQuestionSelect(q.id)}
                  style={[
                    styles.gridButton,
                    selectedQuestionId === q.id && styles.gridButtonActive
                  ]}
                >
                  <ThemedText
                    style={[
                      styles.gridButtonText,
                      selectedQuestionId === q.id && styles.gridButtonTextActive
                    ]}
                  >
                    {q.label}
                  </ThemedText>
                </Pressable>
              ))}
            </View>
          </View>
        ) : (
          <HTMLPanelRenderer
            htmlUri={currentHtmlUri || ""}
            htmlContent={currentHtmlContent || undefined}
            targetId=""
          />
        )}

        {/* Question Panel */}
        {selectedQuestionId && currentHtmlUri && (
          <View style={styles.panelContainer}>
            <View style={styles.panelHeader}>
              <ThemedText style={styles.panelTitle}>
                Question {questions.find(q => q.id === selectedQuestionId)?.label}
              </ThemedText>
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <Pressable onPress={handleImportant} style={styles.iconButton}>
                  <Feather
                    name={isImportant(selectedQuestionId) ? "star" : "star"}
                    size={22}
                    color={isImportant(selectedQuestionId) ? "#FFD700" : JiguuColors.textSecondary}
                  />
                </Pressable>
                <Pressable onPress={handleBookmark} style={styles.iconButton}>
                  <Feather
                    name={isBookmarked(selectedQuestionId) ? "bookmark" : "bookmark"}
                    size={22}
                    color={isBookmarked(selectedQuestionId) ? JiguuColors.accent1 : JiguuColors.textSecondary}
                  />
                </Pressable>
              </View>
            </View>
            <HTMLPanelRenderer
              htmlUri={currentHtmlUri}
              htmlContent={currentHtmlContent || undefined}
              targetId={selectedQuestionId}
            />
          </View>
        )}
      </View>
    );
  };

  if (!chapter) {
    return (
      <ScreenWrapper>
        <EmptyState title="Chapter Not Found" message="The requested chapter does not exist." />
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper showBackButton>
      <View style={styles.header}>
        <ThemedText style={styles.headerTitle}>{chapter.name}</ThemedText>
      </View>
      {renderTabs()}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {renderContent()}
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: Spacing.md,
    backgroundColor: JiguuColors.background,
  },
  headerTitle: {
    ...Typography.h3,
    color: JiguuColors.textPrimary,
  },
  tabsContainer: {
    maxHeight: 60,
    marginBottom: Spacing.sm,
    backgroundColor: JiguuColors.background,
    borderBottomWidth: 1,
    borderBottomColor: JiguuColors.border,
  },
  tabsContent: {
    paddingHorizontal: Spacing.md,
    alignItems: 'center',
    gap: Spacing.sm,
  },
  tabButton: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderColor: JiguuColors.border,
    marginRight: Spacing.xs,
    backgroundColor: JiguuColors.surface,
  },
  tabText: {
    ...Typography.button,
    color: JiguuColors.textSecondary,
    fontSize: 14,
  },
  tabTextActive: {
    color: "#fff",
  },
  scrollContent: {
    padding: Spacing.md,
    paddingBottom: 100,
  },
  contentArea: {
    flex: 1,
  },
  fullPanel: {
    minHeight: 600,
    marginTop: Spacing.md,
  },
  gridContainer: {
    marginBottom: Spacing.xl,
  },
  sectionTitle: {
    ...Typography.h4,
    marginBottom: Spacing.md,
    color: JiguuColors.textPrimary,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  gridButton: {
    width: 45,
    height: 45,
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
    borderColor: JiguuColors.accent3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: JiguuColors.surface,
  },
  gridButtonActive: {
    backgroundColor: JiguuColors.accent3,
  },
  gridButtonText: {
    ...Typography.body,
    fontWeight: 'bold',
    color: JiguuColors.accent3,
  },
  gridButtonTextActive: {
    color: '#fff',
  },
  panelContainer: {
    backgroundColor: '#fff',
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    minHeight: 300,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  panelHeader: {
    padding: Spacing.sm,
    backgroundColor: JiguuColors.surfaceLight,
    borderBottomWidth: 1,
    borderBottomColor: JiguuColors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  panelTitle: {
    ...Typography.h4,
    fontSize: 18,
    color: JiguuColors.textPrimary,
  },
  iconButton: {
    padding: 5,
  }
});

export default memo(SolutionScreen);
