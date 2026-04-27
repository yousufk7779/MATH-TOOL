import React, { memo, useState, useCallback, useEffect, useRef } from "react";
import { StyleSheet, View, ScrollView, Pressable, TouchableOpacity, useWindowDimensions, Modal, Animated } from "react-native";
import { useRoute, RouteProp, useFocusEffect } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import RenderHtml, { defaultSystemFonts } from "react-native-render-html";
import { WebView } from 'react-native-webview';
import { LinearGradient } from "expo-linear-gradient";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { EmptyState } from "@/components/EmptyState";
import { ZoomableScrollView } from "@/components/ZoomableScrollView";

import { JiguuColors, Spacing, Typography, BorderRadius } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { getChapter, getChapterGradient } from "@/data/chapters";
import { getChapterContent } from "@/data/chapterContent";

type SolutionRouteProp = RouteProp<RootStackParamList, "Solution">;

type SectionType = "overview" | "exercises" | "mcq";

const HtmlText = memo(({ html, style, chapterId }: { html: string; style?: any, chapterId?: string }) => {
  const { width } = useWindowDimensions();

  // Detect justification and boldness from styles
  const stylesArr = Array.isArray(style) ? style : [style];
  const isBold = false;
  const isJustified = stylesArr.some(s => s?.textAlign === 'justify');

  const cid = chapterId || "";
  const isMath = !cid.startsWith('sci-') && !cid.startsWith('sst-') && !cid.startsWith('eng-');

  const baseStyle = {
    ...Typography.body,
    lineHeight: isJustified ? 26 : 24, // 1.6x line-height for science/math
    color: JiguuColors.textPrimary,
    fontFamily: 'NotoSans_400Regular',
    textAlign: isJustified ? ('justify' as const) : ('left' as const),
    ...StyleSheet.flatten(style),
  };

  const systemFonts = [...defaultSystemFonts, 'NotoSans_400Regular'];

  const tagsStyles: any = {
    b: { fontFamily: 'NotoSans_700Bold' },
    strong: { fontFamily: 'NotoSans_700Bold' },
    p: { textAlign: isJustified ? 'justify' : 'left', marginBottom: Spacing.sm },
    div: { textAlign: isJustified ? 'justify' : 'left', maxWidth: width - 32 },
    li: { textAlign: isJustified ? 'justify' : 'left' },
    span: { fontFamily: 'NotoSans_400Regular', textAlign: isJustified ? 'justify' : 'left' },
    sup: { fontSize: 12, lineHeight: 16 },
    sub: { fontSize: 12, lineHeight: 16 },
    View: { flexDirection: 'column' },
    Text: { color: JiguuColors.textPrimary, fontFamily: 'NotoSans_400Regular' },
    webview: { flex: 1, height: 250, marginVertical: 10 },
  };

  const renderers = {
    webview: ({ tnode }: any) => {
      // Extract inner HTML from the custom tag
      const htmlContent = tnode.init.domNode.children[0]?.data || "";
      return (
        <View style={{ height: 250, width: width - 32, marginVertical: 10, borderRadius: 8, overflow: 'hidden' }}>
          <WebView
            originWhitelist={['*']}
            source={{ 
              html: `
                <html>
                  <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                      body { 
                        background-color: transparent; 
                        color: white; 
                        font-family: sans-serif; 
                        margin: 0; 
                        padding: 10px;
                      }
                      table { 
                        width: 100%; 
                        border-collapse: collapse; 
                        border: 1px solid white; 
                      }
                      th, td { 
                        border: 1px solid white; 
                        padding: 8px; 
                        text-align: center; 
                        font-size: 12px;
                      }
                      th { 
                        background-color: #FFA726; 
                        color: black; 
                      }
                    </style>
                  </head>
                  <body>${htmlContent}</body>
                </html>
              ` 
            }}
            style={{ backgroundColor: 'transparent' }}
            scrollEnabled={true}
          />
        </View>
      );
    }
  };

  return (
    <RenderHtml
      contentWidth={width}
      source={{ html }}
      baseStyle={{
        ...baseStyle,
        margin: 0,
        padding: 0,
      }}
      systemFonts={systemFonts}
      defaultTextProps={{ selectable: false }}
      tagsStyles={tagsStyles}
      renderers={renderers as any}
      renderersProps={{
        img: {
          enableExperimentalPercentWidth: true,
        },
      }}
    />
  );
}, (prevProps, nextProps) => {
  return prevProps.html === nextProps.html &&
    JSON.stringify(prevProps.style) === JSON.stringify(nextProps.style);
});

interface TabButtonProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
  gradient: string[];
  textStyle?: any;
}

const TabButton = memo(({ title, isActive, onPress, gradient, textStyle }: TabButtonProps) => {
  const isGlossy = gradient[0] === "#FFA726";
  return (
    <Pressable
      delayPressIn={0}
      style={({ pressed }) => [
        styles.tabButton,
        pressed && { opacity: 0.8 },
      ]}
      onPress={onPress}
    >
      {isActive ? (
        <View style={styles.tabButtonWrapper}>
          <LinearGradient
            colors={gradient as any}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.tabButtonGradient}
          >
            <ThemedText style={[styles.tabText, styles.tabTextActive, textStyle]}>
              {title}
            </ThemedText>
          </LinearGradient>
          {isGlossy && <View style={styles.glossOverlay} />}
        </View>
      ) : (
        <ThemedText style={[styles.tabText, textStyle]}>
          {title}
        </ThemedText>
      )}
    </Pressable>
  );
});

interface SubTabButtonProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
  gradient: string[];
  textStyle?: any;
}

const SubTabButton = memo(({ title, isActive, onPress, gradient, textStyle }: SubTabButtonProps) => {
  const isGlossy = gradient[0] === "#FFA726";
  return (
    <Pressable
      delayPressIn={0}
      style={({ pressed }) => [
        styles.subTabButton,
        pressed && { opacity: 0.8 },
      ]}
      onPress={onPress}
    >
      {isActive ? (
        <View style={styles.tabButtonWrapper}>
          <LinearGradient
            colors={gradient as any}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.tabButtonGradient}
          >
            <ThemedText style={[styles.tabText, styles.tabTextActive, textStyle]}>
              {title}
            </ThemedText>
          </LinearGradient>
          {isGlossy && <View style={styles.glossOverlay} />}
        </View>
      ) : (
        <ThemedText style={[styles.tabText, textStyle]}>
          {title}
        </ThemedText>
      )}
    </Pressable>
  );
});

interface SubSectionProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
}

function SolutionScreen() {
  const route = useRoute<SolutionRouteProp>();
  const { chapterId } = route.params;
  const scrollViewRef = useRef<any>(null);
  const shakeAnimRefs = useRef<Record<string, Animated.Value>>({});

  const [activeSection, setActiveSection] = useState<SectionType>("overview");
  const [mountedSections, setMountedSections] = useState<Record<string, boolean>>({ overview: true });
  const [activeSubSection, setActiveSubSection] = useState<string>("");
  const [mountedSubSections, setMountedSubSections] = useState<Record<string, boolean>>({});
  
  const [mcqAnswers, setMcqAnswers] = useState<Record<string, string>>({});
  const [shuffledOptions, setShuffledOptions] = useState<Record<string, string[]>>({});
  const [showResultDialog, setShowResultDialog] = useState(false);
  const [quizId, setQuizId] = useState(0);

  const chapter = React.useMemo(() => getChapter(chapterId), [chapterId]);
  const chapterData = React.useMemo(() => getChapterContent(chapterId), [chapterId]);
  const chapterGradient = React.useMemo(() => getChapterGradient(chapterId), [chapterId]);
  const accentColor = chapterGradient[0]; 

  const isScienceSection = chapterId.startsWith("sci-");
  const isMathSection = !chapterId.startsWith("sci-") && !chapterId.startsWith("sst-") && !chapterId.startsWith("eng-");
  
  const hwTitleStyle = { fontFamily: "NotoSans_700Bold", color: "#fff" };

  const scaledBody = { 
    ...Typography.body, 
    fontFamily: "NotoSans_400Regular", 
    ...((isScienceSection || isMathSection) ? { textAlign: "justify" as const, lineHeight: 26 } : { lineHeight: 24 }) 
  };
  const scaledH3 = { 
    ...Typography.h3, 
    fontFamily: "NotoSans_400Regular", 
    ...((isScienceSection || isMathSection) ? { textAlign: "justify" as const } : {}) 
  };
  const scaledH4 = { 
    ...Typography.h4, 
    fontFamily: "NotoSans_400Regular", 
    ...((isScienceSection || isMathSection) ? { textAlign: "justify" as const } : {}) 
  };
  const scaledButton = { ...Typography.button, fontFamily: "NotoSans_700Bold" };
  const scaledQuestionTitle = { 
    ...Typography.h4, 
    fontFamily: "NotoSans_400Regular", 
    ...((isScienceSection || isMathSection) ? { textAlign: "justify" as const, lineHeight: 28 } : { lineHeight: 24 }) 
  };
  const scaledSmall = { 
    ...Typography.small, 
    fontFamily: "NotoSans_400Regular", 
    ...((isScienceSection || isMathSection) ? { textAlign: "justify" as const, lineHeight: 22 } : { lineHeight: 20 }) 
  };

  const exerciseSubSections = React.useMemo(() => {
    const subs: string[] = [];
    if (chapterData?.exercises && chapterData.exercises.length > 0) {
      subs.push(...chapterData.exercises.map((ex: any) => ex.id));
    }
    if (chapterData?.examples && chapterData.examples.length > 0) {
      subs.push("examples");
    }
    if (chapterData?.theorems && chapterData.theorems.length > 0) {
      subs.push("theorems");
    }
    return Array.from(new Set(subs));
  }, [chapterData]);

  const generateShuffledOptions = useCallback(() => {
    if (!chapterData?.mcqs) return;
    const newShuffled: Record<string, string[]> = {};
    chapterData.mcqs.forEach((mcq: any) => {
      const options = [...mcq.options];
      // ONLY shuffle options if it is NOT a Maths chapter AND NOT a Science chapter
      if (!isMathSection && !isScienceSection) {
        for (let i = options.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [options[i], options[j]] = [options[j], options[i]];
        }
      }
      newShuffled[mcq.id] = options;
    });
    setShuffledOptions(newShuffled);
  }, [chapterData, isMathSection]);

  const resetMCQs = useCallback(() => {
    setQuizId((prev) => prev + 1);
    setMcqAnswers({});
    setShowResultDialog(false);
    generateShuffledOptions();
  }, [generateShuffledOptions]);

  const handleSectionChange = useCallback((section: SectionType) => {
    // Instant state updates for visual feedback
    setActiveSection(section);
    
    // Batch setting mounted sections to avoid multiple renders
    setMountedSections(prev => prev[section] ? prev : { ...prev, [section]: true });

    if (section === "exercises" && exerciseSubSections.length > 0) {
      if (!activeSubSection || !exerciseSubSections.includes(activeSubSection)) {
        const first = exerciseSubSections[0];
        setActiveSubSection(first);
        setMountedSubSections(prev => prev[first] ? prev : { ...prev, [first]: true });
      }
    }

    if (section === "mcq") {
      resetMCQs();
    } else {
      // Use requestAnimationFrame for smoother, more native scroll response
      requestAnimationFrame(() => {
        scrollViewRef.current?.scrollTo({ y: 0, animated: false });
      });
    }
  }, [resetMCQs, exerciseSubSections, activeSubSection]);

  const handleSubSectionChange = useCallback((sub: string) => {
    setActiveSubSection(sub);
    setMountedSubSections(prev => prev[sub] ? prev : { ...prev, [sub]: true });
    requestAnimationFrame(() => {
      scrollViewRef.current?.scrollTo({ y: 0, animated: false });
    });
  }, []);

  // Remove redundant effects and focus listeners that cause lag
  useEffect(() => {
    if (activeSection === "mcq") {
      requestAnimationFrame(() => {
        scrollViewRef.current?.scrollTo({ y: 0, animated: false });
      });
    }
  }, [quizId]);

  useEffect(() => {
    // Reset state when chapter changes ONLY
    setMcqAnswers({});
    setShowResultDialog(false);
    setMountedSections({ overview: true, [activeSection]: true });
    setMountedSubSections({ [activeSubSection]: true });
  }, [chapterId]);

  useEffect(() => {
    if (activeSection === "mcq" && chapterData?.mcqs && chapterData.mcqs.length > 0) {
      const answeredCount = Object.keys(mcqAnswers).length;
      if (answeredCount === chapterData.mcqs.length) {
        setShowResultDialog(true);
        setTimeout(() => {
          scrollViewRef.current?.scrollTo({ y: 0, animated: true });
        }, 500);
      }
    }
  }, [mcqAnswers, activeSection, chapterData]);

 

  const renderSectionContent = useCallback(() => {
    if (!chapterData) {
      return (
        <EmptyState
          title="Content Update in Progress"
          message={`Premium JSON structured content for this chapter is currently being migrated and will be available very soon.`}
          icon="clock"
        />
      );
    }
    if (chapterData) {
      if (chapterData.isHtmlView) {
        if (activeSection === "mcq" && !chapterData.htmlMcqs && chapterData.mcqs && chapterData.mcqs.length > 0) {
          // Let it fall through to native rn UI
        } else {
          return <MathWebView chapterData={chapterData} activeSection={activeSection} activeSubSection={activeSubSection} onScrollTop={() => scrollViewRef.current?.scrollTo({y: 0, animated: true})} />;
        }
      }
    }

    return (
      <View style={{ flex: 1, padding: Spacing.lg }}>
        {mountedSections.overview && (
          <View style={{ display: activeSection === "overview" ? "flex" : "none", gap: Spacing.lg, width: "100%" }}>
            <HtmlText html={chapterData.introduction} style={[scaledBody, { color: JiguuColors.textPrimary }]} />
            {chapterData.summary && (
              <View style={{ marginTop: Spacing.lg, padding: Spacing.lg, backgroundColor: JiguuColors.surfaceLight, borderRadius: BorderRadius.md }}>
                 <HtmlText html="Summary" style={[scaledH4, { color: accentColor, marginBottom: Spacing.sm }]} />
                 <HtmlText html={Array.isArray(chapterData.summary) ? chapterData.summary.join('<br/>') : chapterData.summary} style={[scaledSmall]} />
              </View>
            )}
            {chapterData.definitions && chapterData.definitions.length > 0 && (
              <View style={{ marginTop: Spacing.md, backgroundColor: JiguuColors.surface, padding: Spacing.md, borderRadius: BorderRadius.md }}>
                <ThemedText style={[scaledH4, { color: accentColor, marginBottom: Spacing.sm }]}>Key Definitions</ThemedText>
                {chapterData.definitions?.map((def: any, idx: number) => (
                  <View key={idx} style={{ marginBottom: Spacing.sm }}>
                    <HtmlText html={def.term + ":"} style={[scaledBody, { fontFamily: "NotoSans_400Regular", color: JiguuColors.textPrimary }]} />
                    <HtmlText html={def.description ?? ""} style={[scaledSmall, { color: JiguuColors.textSecondary }]} />
                  </View>
                ))}
              </View>
            )}
            {chapterData.keyPoints && chapterData.keyPoints.length > 0 && (
              <View style={{ marginTop: Spacing.md }}>
                <ThemedText style={[scaledH4, { color: accentColor, marginBottom: Spacing.sm }]}>Important Points</ThemedText>
                {chapterData.keyPoints?.map((kp, idx) => (
                  <View key={idx} style={{ flexDirection: 'row', marginBottom: Spacing.xs }}>
                    <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: accentColor, marginTop: 8, marginRight: 8 }} />
                    <View style={{ flex: 1 }}>
                      <HtmlText html={kp} style={[scaledBody, { color: JiguuColors.textPrimary }]} />
                    </View>
                  </View>
                ))}
              </View>
            )}
          </View>
        )}

        {mountedSections.exercises && (
          <View style={{ display: activeSection === "exercises" ? "flex" : "none", gap: Spacing.lg, width: "100%" }}>
            {exerciseSubSections.map(sub => {
              const isActiveSub = sub === activeSubSection;
              const isMountedSub = mountedSubSections[sub] || isActiveSub;
              if (!isMountedSub) return null;
              let questions: any[] | undefined;
              if (sub === 'examples') questions = chapterData.examples;
              else if (sub === 'theorems') questions = chapterData.theorems?.map((th: any) => ({
                id: th.id, number: th.number, question: `${th.name}<br/><br/><span style="color: #2E7D32; font-weight: normal;">Statement:</span><br/>${th.statement}`, solution: th.proof || []
              }));
              else questions = chapterData.exercises?.find((ex: any) => ex.id === sub)?.questions;
              return (
                <View key={sub} style={{ display: isActiveSub ? 'flex' : 'none', gap: Spacing.lg, width: "100%" }}>
                  {questions?.map((q: any) => (
                    <View key={q.id} style={{ backgroundColor: JiguuColors.surface, padding: Spacing.md, borderRadius: BorderRadius.md }}>
                      <HtmlText 
                        chapterId={chapterId} 
                        html={sub === 'theorems' ? `Theorem ${q.number}:<br/>${q.question}` : (q.number ? `Q${q.number}. ${q.question}` : q.question)} 
                        style={[scaledQuestionTitle, { color: accentColor, marginBottom: Spacing.sm }]} 
                      />
                      <View style={{ marginTop: Spacing.sm, paddingLeft: Spacing.sm, borderLeftWidth: 2, borderLeftColor: JiguuColors.border }}>
                        {q.solution?.map((step: string, sIdx: number) => (
                          <View key={sIdx} style={{ marginBottom: Spacing.xs }}>
                            <HtmlText chapterId={chapterId} html={step.replace(/\n/g, '<br/>')} style={[scaledBody, { color: JiguuColors.textSecondary, marginBottom: Spacing.xs }]} />
                          </View>
                        ))}
                      </View>
                    </View>
                  ))}
                </View>
              );
            })}
          </View>
        )}

        {mountedSections.mcq && (
          <View style={{ display: activeSection === "mcq" ? "flex" : "none", gap: Spacing.lg, width: "100%" }}>
            {chapterData.mcqs?.map((mcq: any, idx: number) => {
              if (!shakeAnimRefs.current[mcq.id]) {
                shakeAnimRefs.current[mcq.id] = new Animated.Value(0);
              }
              return (
                <Animated.View key={mcq.id} style={{ transform: [{ translateX: shakeAnimRefs.current[mcq.id] }], backgroundColor: JiguuColors.surface, padding: Spacing.md, borderRadius: BorderRadius.md }}>
                  <View style={{ marginBottom: Spacing.md }}>
                    <HtmlText chapterId={chapterId} html={`Q${idx + 1}. ${mcq.question}`} style={[scaledQuestionTitle, { color: accentColor }]} />
                  </View>
                  {(shuffledOptions[mcq.id] || mcq.options || []).map((opt: string, oIdx: number) => {
                    const isSelected = mcqAnswers[mcq.id] === opt;
                    const isSubmitted = !!mcqAnswers[mcq.id];
                    let correctOptionText = mcq.correctAnswer;
                    if (mcq.correctAnswer.length === 1) {
                      const charCode = mcq.correctAnswer.toLowerCase().charCodeAt(0);
                      if (charCode >= 97 && charCode <= 122) {
                        const correctIdx = charCode - 97;
                        if (correctIdx >= 0 && correctIdx < mcq.options.length) {
                          correctOptionText = mcq.options[correctIdx];
                        }
                      }
                    }
                    const isCorrect = opt === correctOptionText;
                    const isWrong = isSelected && !isCorrect;
                    let borderColor = JiguuColors.border;
                    let backgroundColor = 'transparent';
                    if (isSubmitted) {
                      if (isCorrect) {
                        borderColor = '#4CAF50';
                        backgroundColor = '#4CAF5020';
                      } else if (isWrong) {
                        borderColor = '#F44336';
                        backgroundColor = '#F4433620';
                      }
                    } else if (isSelected) {
                      borderColor = accentColor;
                      backgroundColor = accentColor + '20';
                    }
                    const isTallMathChapter = ['ch8', 'ch9', 'ch10', 'ch11', 'ch12', 'ch13', 'ch14'].includes(chapterId);
                    return (
                      <TouchableOpacity delayPressIn={0} activeOpacity={0.7} key={oIdx} onPress={() => {
                        if (!isSubmitted) {
                          setMcqAnswers(prev => ({ ...prev, [mcq.id]: opt }));
                          if (opt !== correctOptionText) {
                            Animated.sequence([
                              Animated.timing(shakeAnimRefs.current[mcq.id], { toValue: 10, duration: 50, useNativeDriver: true }),
                              Animated.timing(shakeAnimRefs.current[mcq.id], { toValue: -10, duration: 50, useNativeDriver: true }),
                              Animated.timing(shakeAnimRefs.current[mcq.id], { toValue: 10, duration: 50, useNativeDriver: true }),
                              Animated.timing(shakeAnimRefs.current[mcq.id], { toValue: 0, duration: 50, useNativeDriver: true })
                            ]).start();
                          }
                        }
                      }} style={{ padding: isTallMathChapter ? 14 : Spacing.sm, minHeight: isTallMathChapter ? 62 : undefined, justifyContent: 'center', borderWidth: 1, borderColor, backgroundColor, borderRadius: BorderRadius.sm, marginBottom: Spacing.xs }}>
                        <HtmlText html={opt} style={[scaledBody, { color: JiguuColors.textSecondary, lineHeight: isTallMathChapter ? 32 : (isMathSection ? 26 : 24) }]} />
                      </TouchableOpacity>
                    );
                  })}
                </Animated.View>
              )
            })}
          </View>
        )}
      </View>
    );
  }, [chapterId, chapterData, activeSection, activeSubSection, accentColor, mcqAnswers, shuffledOptions, mountedSections, mountedSubSections, exerciseSubSections, scaledBody, scaledQuestionTitle, scaledSmall]);

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
  } else if (chapterId.startsWith("c9-sci-")) {
    tab2Title = "NCERT Solutions";
  }

  return (
    <ScreenWrapper showBackButton title={chapter ? `Chapter ${chapter.number}` : ""} titleColor={accentColor}>
      <View style={styles.staticContainer}>
        <View style={styles.tabContainer}>
          <TabButton title={tab1Title} isActive={activeSection === "overview"} onPress={() => handleSectionChange("overview")} gradient={chapterGradient} textStyle={hwTitleStyle} />
          <TabButton title={tab2Title} isActive={activeSection === "exercises"} onPress={() => handleSectionChange("exercises")} gradient={chapterGradient} textStyle={hwTitleStyle} />
          <TabButton title={tab3Title} isActive={activeSection === "mcq"} onPress={() => handleSectionChange("mcq")} gradient={chapterGradient} textStyle={hwTitleStyle} />
        </View>

        {activeSection === "exercises" && exerciseSubSections.length > 0 && (
          <View style={{ height: 42, marginBottom: Spacing.sm }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.subTabScroll} contentContainerStyle={styles.subTabContainer}>
              {exerciseSubSections.map((sub: string) => {
                let title = sub === 'examples' ? 'Examples' : sub === 'theorems' ? 'Theorems' : chapterData?.exercises?.find((ex: any) => ex.id === sub.trim())?.name || sub.replace('sp3-it-', 'In-Text-').replace('sp3-ex', 'Exercise').replace('in-text', 'In-Text-').replace('it-', 'In-Text-').replace('ex-', 'Exercise-').replace('exercise', 'Exercise ');
                if (chapterId === 'sci-phy-3') {
                  const itMatch = sub.match(/sp3-it-(\d+)/);
                  if (itMatch) title = `In-Text-${itMatch[1]}`;
                  else if (sub === 'sp3-ex') title = 'Exercise';
                } else if (chapterId === 'sci-phy-4') {
                  const itMatch = sub.match(/sp4-it-(\d+)/);
                  if (itMatch) title = `In-Text-${itMatch[1]}`;
                  else if (sub === 'sp4-ex') title = 'Exercise';
                }
                return (
                  <SubTabButton key={sub} title={title} isActive={activeSubSection === sub} onPress={() => handleSubSectionChange(sub)} gradient={chapterGradient} textStyle={hwTitleStyle} />
                );
              })}
            </ScrollView>
          </View>
        )}

        <ZoomableScrollView key={`${chapterId}-${quizId}`} ref={scrollViewRef} contentContainerStyle={{ paddingBottom: 100 }}>
          {renderSectionContent()}
        </ZoomableScrollView>

        <Modal visible={showResultDialog} transparent animationType="fade" onRequestClose={() => resetMCQs()}>
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center', padding: Spacing.xl }}>
            <View style={{ backgroundColor: JiguuColors.surface, padding: Spacing.xl, borderRadius: BorderRadius.lg, width: '100%', alignItems: 'center' }}>
              <Feather name="award" size={48} color={accentColor} style={{ marginBottom: Spacing.md }} />
              <ThemedText style={[scaledH3, { color: JiguuColors.textPrimary, marginBottom: Spacing.sm }]}>Quiz Completed!</ThemedText>
              {(() => {
                const totalCount = chapterData?.mcqs?.length || 0;
                const correctCount = Object.entries(mcqAnswers).filter(([id, ans]) => {
                  const mcq = chapterData?.mcqs?.find((m: any) => m.id === id);
                  if (!mcq) return false;
                  let correctOptionText = mcq.correctAnswer;
                  if (mcq.correctAnswer.length === 1) {
                    const charCode = mcq.correctAnswer.toLowerCase().charCodeAt(0);
                    if (charCode >= 97 && charCode <= 122) {
                      const correctIdx = charCode - 97;
                      if (correctIdx >= 0 && correctIdx < mcq.options.length) {
                        correctOptionText = mcq.options[correctIdx];
                      }
                    }
                  }
                  return correctOptionText === ans;
                }).length;
                const wrongCount = totalCount - correctCount;
                const percentage = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
                return (
                  <>
                    <ThemedText style={[scaledBody, { color: JiguuColors.textSecondary, marginBottom: Spacing.xs, textAlign: 'center' }]}>Correct: {correctCount} | Wrong: {wrongCount}</ThemedText>
                    <ThemedText style={[scaledH4, { color: accentColor, marginBottom: Spacing.lg, textAlign: 'center' }]}>Score: {percentage}%</ThemedText>
                  </>
                );
              })()}
              <TouchableOpacity delayPressIn={0} activeOpacity={0.7} style={{ backgroundColor: accentColor, paddingHorizontal: Spacing.sm, paddingVertical: Spacing.sm, borderRadius: BorderRadius.md, width: '100%', alignItems: 'center', marginBottom: Spacing.sm }} onPress={() => resetMCQs()}>
                <ThemedText numberOfLines={1} style={[scaledButton, { color: '#fff' }]}>Retake Quiz</ThemedText>
              </TouchableOpacity>
              <TouchableOpacity delayPressIn={0} activeOpacity={0.7} style={{ backgroundColor: JiguuColors.surfaceLight, paddingHorizontal: Spacing.xl, paddingVertical: Spacing.sm, borderRadius: BorderRadius.md, width: '100%', alignItems: 'center' }} onPress={() => resetMCQs()}>
                <ThemedText style={[scaledButton, { color: JiguuColors.textSecondary }]}>Close</ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScreenWrapper>
  );
}

export default memo(SolutionScreen);

const MathWebView = memo(({ chapterData, activeSection, activeSubSection, onScrollTop }: any) => {
  const [height, setHeight] = useState(500);

  let htmlContent = "";
  if (activeSection === "overview") htmlContent = chapterData.htmlOverview || "";
  else if (activeSection === "exercises") htmlContent = chapterData.htmlExercises?.[activeSubSection] || "";
  else if (activeSection === "mcq") htmlContent = chapterData.htmlMcqs || "";

  const injectedJS = `
    const style = document.createElement('style');
    style.innerHTML = \`
      * { max-width: 100% !important; box-sizing: border-box !important; font-weight: normal !important; }
      body { 
        margin: 0 !important; 
        padding: 5px !important; 
        overflow-x: hidden !important; 
        width: 100% !important; 
        -webkit-user-select: none; 
        user-select: none; 
        -webkit-touch-callout: none;
      }
      h1, h2, h3, h4, h5, h6, b, strong, span, div, p { font-weight: normal !important; }
      img { 
        max-width: 100% !important; 
        height: auto !important; 
        display: block !important; 
        margin: 15px auto !important; 
        border-radius: 8px !important;
      }
      table { 
        width: 100% !important; 
        max-width: 100% !important; 
        display: block !important; 
        overflow-x: auto !important; 
        border-collapse: collapse !important;
      }
      pre, code { 
        white-space: pre-wrap !important; 
        word-wrap: break-word !important; 
      }
    \`;
    document.head.appendChild(style);
    
    setTimeout(function() {
      var h = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      window.ReactNativeWebView.postMessage(h.toString());
    }, 500);
    const observer = new MutationObserver(function() {
      var h = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      window.ReactNativeWebView.postMessage(h.toString());
    });
    observer.observe(document.body, { attributes: true, childList: true, subtree: true });
    true;
  `;

  if (!htmlContent) return <EmptyState title="No Content" message="Coming soon..." icon="clock" />;

  return (
    <View style={{ height: Math.max(height + 80, 500), width: '100%', paddingBottom: 20 }}>
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlContent, baseUrl: '' }}
        injectedJavaScript={injectedJS}
        onMessage={(event) => {
          if (event.nativeEvent.data) {
             if (event.nativeEvent.data === "scroll_to_top") {
                 if (onScrollTop) onScrollTop();
             } else {
                 const numericHeight = Number(event.nativeEvent.data);
                 if (!isNaN(numericHeight)) setHeight(numericHeight);
             }
          }
        }}
        scrollEnabled={false}
        hardwareAccelerationAndroid={true}
        androidLayerType="hardware"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        style={{ flex: 1, backgroundColor: 'transparent' }}
        cacheMode="LOAD_CACHE_ELSE_NETWORK"
      />
    </View>
  );
});

const styles = StyleSheet.create({
  staticContainer: { flex: 1 },
  header: { flexDirection: "row", marginBottom: Spacing.sm, paddingHorizontal: Spacing.lg, paddingTop: Spacing.sm, alignItems: "center", justifyContent: "center" },
  chapterIcon: { width: 28, height: 28, borderRadius: 14, justifyContent: "center", alignItems: "center", marginRight: Spacing.sm },
  chapterIconText: { color: "#fff", fontSize: 14, fontFamily: "NotoSans_400Regular" },
  title: { ...Typography.h4, fontSize: 16, lineHeight: 22, color: JiguuColors.textPrimary, textAlign: "center" },
  tabContainer: { flexDirection: "row", marginBottom: Spacing.sm, marginHorizontal: Spacing.lg, backgroundColor: JiguuColors.surface, borderRadius: BorderRadius.full, padding: Spacing.xs, gap: Spacing.xs },
  tabButton: { flex: 1, height: 36, alignItems: "center", justifyContent: "center", borderRadius: BorderRadius.full, borderWidth: 1, borderColor: "transparent", overflow: 'hidden' },
  tabButtonGradient: { width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: BorderRadius.full },
  tabText: { ...Typography.small, fontSize: 13, fontFamily: "NotoSans_700Bold", color: JiguuColors.textSecondary },
  tabTextActive: { color: "#fff" },
  subTabScroll: { flex: 1 },
  subTabContainer: { paddingHorizontal: Spacing.lg, gap: Spacing.sm, alignItems: "center", justifyContent: "center", flexGrow: 1 },
  subTabButton: { paddingVertical: 6, paddingHorizontal: 16, alignItems: "center", borderRadius: BorderRadius.full, borderWidth: 1.5, borderColor: 'rgba(255,255,255,0.2)', backgroundColor: JiguuColors.surface, overflow: 'hidden' },
  subTabButtonActive: { borderColor: "transparent" },
  tabButtonWrapper: { width: '100%', height: '100%', borderRadius: BorderRadius.full, overflow: 'hidden' },
  glossOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
});
