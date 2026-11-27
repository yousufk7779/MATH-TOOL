import React, { memo, useState, useCallback, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  TouchableOpacity,
  useWindowDimensions,
  Modal,
  Animated,
  ActivityIndicator,
} from "react-native";
import { useRoute, RouteProp, useFocusEffect } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import RenderHtml, { defaultSystemFonts } from "react-native-render-html";
import { WebView } from "react-native-webview";
import {
  URDU_FONT,
  URDU_FONT_BOLD,
  URDU_OPTION_LETTERS,
  getUrduFontUris,
  isUrduChapter,
  toUrduDigits,
  useUrduFonts,
} from "@/utils/urduFont";
import { LinearGradient } from "expo-linear-gradient";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { EmptyState } from "@/components/EmptyState";
import { ZoomableScrollView } from "@/components/ZoomableScrollView";
import { HtmlImage } from "@/components/HtmlImage";

import {
  JiguuColors,
  Spacing,
  Typography,
  BorderRadius,
} from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { getChapter, getChapterGradient } from "@/data/chapters";
import type { ChapterContent } from "@/data/chapterContent";
import { getHomeRoute } from "@/utils/navigation-utils";

type SolutionRouteProp = RouteProp<RootStackParamList, "Solution">;

type SectionType = "overview" | "exercises" | "mcq";

const HtmlText = memo(
  ({
    html,
    style,
    chapterId,
  }: {
    html: string;
    style?: any;
    chapterId?: string;
  }) => {
    const { width } = useWindowDimensions();

    // Detect justification and boldness from styles
    const stylesArr = Array.isArray(style) ? style : [style];
    const isBold = false;
    const isJustified = stylesArr.some((s) => s?.textAlign === "justify");

    const cid = chapterId || "";
    const isMath =
      !cid.startsWith("sci-") &&
      !cid.match(/^c[789]-sci-/) &&
      !cid.startsWith("sst-") &&
      !cid.startsWith("eng-");

    // Urdu chapters: Nastaliq font, right-to-left, and taller lines (Nastaliq needs about 2× the font size).
    const isUrdu = isUrduChapter(cid);
    const flat = StyleSheet.flatten(style) || {};
    const urduSize = (flat as any).fontSize || 16;
    const align = isUrdu ? "right" : isJustified ? "justify" : "left";

    const baseStyle = {
      ...Typography.body,
      lineHeight: isJustified ? 26 : 24, // 1.6x line-height for science/math
      color: JiguuColors.textPrimary,
      fontFamily: "NotoSans_400Regular",
      textAlign: isJustified ? ("justify" as const) : ("left" as const),
      ...flat,
      ...(isUrdu
        ? {
            fontFamily: URDU_FONT,
            textAlign: "right" as const,
            writingDirection: "rtl" as const,
            lineHeight: Math.round(urduSize * 2.1),
          }
        : {}),
    };

    const systemFonts = [...defaultSystemFonts, "NotoSans_400Regular", URDU_FONT, URDU_FONT_BOLD];
    const boldFont = isUrdu ? URDU_FONT_BOLD : "NotoSans_700Bold";
    const textFont = isUrdu ? URDU_FONT : "NotoSans_400Regular";

    const tagsStyles: any = {
      b: { fontFamily: boldFont },
      strong: { fontFamily: boldFont },
      p: {
        textAlign: align,
        marginBottom: Spacing.sm,
      },
      div: {
        textAlign: align,
        maxWidth: width - 32,
      },
      li: { textAlign: align },
      span: {
        fontFamily: textFont,
        textAlign: align,
      },
      sup: { fontSize: 12, lineHeight: 16 },
      sub: { fontSize: 12, lineHeight: 16 },
      View: { flexDirection: "column" },
      Text: {
        color: JiguuColors.textPrimary,
        fontFamily: textFont,
      },
      webview: { flex: 1, height: 250, marginVertical: 10 },
    };

    const renderers = {
      img: ({ tnode }: any) => {
        const src = tnode?.attributes?.src || "";
        const alt = tnode?.attributes?.alt || "";
        if (!src) return null;
        return (
          <HtmlImage
            src={src}
            alt={alt}
            containerWidth={width - 48}
          />
        );
      },
      webview: ({ tnode }: any) => {
        // Extract inner HTML from the custom tag
        const htmlContent = tnode.init.domNode.children[0]?.data || "";
        return (
          <View
            style={{
              height: 250,
              width: width - 32,
              marginVertical: 10,
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            <WebView
              originWhitelist={["*"]}
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
              `,
              }}
              style={{ backgroundColor: "transparent" }}
              scrollEnabled={true}
            />
          </View>
        );
      },
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
  },
  (prevProps, nextProps) => {
    return (
      prevProps.html === nextProps.html &&
      JSON.stringify(prevProps.style) === JSON.stringify(nextProps.style)
    );
  },
);

interface TabButtonProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
  gradient: string[];
  textStyle?: any;
}

const TabButton = memo(
  ({ title, isActive, onPress, gradient, textStyle }: TabButtonProps) => {
    const isGlossy =
      gradient[0] === "#FFA726" ||
      gradient[0] === "#7CFF00" ||
      gradient[0] === "#FF4DA6" ||
      gradient[0] === "#FF1744" ||
      gradient[0] === "#43A047";
    return (
      <Pressable
        style={({ pressed }) => [styles.tabButton, pressed && { opacity: 0.8 }]}
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
              <ThemedText
                style={[styles.tabText, styles.tabTextActive, textStyle]}
                numberOfLines={1}
                adjustsFontSizeToFit
                minimumFontScale={0.75}
                maxFontSizeMultiplier={1.12}
              >
                {title}
              </ThemedText>
            </LinearGradient>
            {isGlossy && <View style={styles.glossOverlay} />}
          </View>
        ) : (
          <ThemedText
            style={[styles.tabText, textStyle]}
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.75}
            maxFontSizeMultiplier={1.12}
          >
            {title}
          </ThemedText>
        )}
      </Pressable>
    );
  },
);

interface SubTabButtonProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
  gradient: string[];
  textStyle?: any;
  /** Share the row width equally with the other tabs (used when there are 4 or fewer tabs). */
  fill?: boolean;
  /** Tighter padding and a slightly smaller label (used when 4 tabs share the row). */
  compact?: boolean;
  /** Reports the tab's position inside the scrolling tab bar (5+ tabs), so the active tab can be scrolled into view. */
  onLayout?: (e: any) => void;
}

const SubTabButton = memo(
  ({
    title,
    isActive,
    onPress,
    gradient,
    textStyle,
    fill,
    compact,
    onLayout,
  }: SubTabButtonProps) => {
    const isGlossy =
      gradient[0] === "#FFA726" ||
      gradient[0] === "#7CFF00" ||
      gradient[0] === "#FF4DA6" ||
      gradient[0] === "#FF1744" ||
      gradient[0] === "#43A047";
    const labelStyle = compact ? styles.tabTextCompact : null;
    return (
      <Pressable
        style={({ pressed }) => [
          styles.subTabButton,
          fill && styles.subTabButtonFill,
          compact && styles.subTabButtonCompact,
          pressed && { opacity: 0.8 },
        ]}
        onPress={onPress}
        onLayout={onLayout}
      >
        {isActive ? (
          <View style={styles.tabButtonWrapper}>
            <LinearGradient
              colors={gradient as any}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={[styles.tabButtonGradient, compact && styles.tabButtonGradientCompact]}
            >
              <ThemedText
                style={[
                  styles.tabText,
                  styles.tabTextActive,
                  textStyle,
                  labelStyle,
                ]}
                numberOfLines={1}
                adjustsFontSizeToFit
                minimumFontScale={0.78}
                maxFontSizeMultiplier={1.12}
              >
                {title}
              </ThemedText>
            </LinearGradient>
            {isGlossy && <View style={styles.glossOverlay} />}
          </View>
        ) : (
          <ThemedText
            style={[styles.tabText, textStyle, labelStyle]}
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.78}
            maxFontSizeMultiplier={1.12}
          >
            {title}
          </ThemedText>
        )}
      </Pressable>
    );
  },
);

interface SubSectionProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
}

function SolutionScreen() {
  const route = useRoute<SolutionRouteProp>();
  const { chapterId, className } = route.params;
  const scrollViewRef = useRef<any>(null);
  const shakeAnimRefs = useRef<Record<string, Animated.Value>>({});
  // Scrolling exercise tab bar (5+ tabs): positions of each tab, used to bring the active tab into view.
  const subTabScrollRef = useRef<any>(null);
  const subTabLayoutsRef = useRef<Record<string, { x: number; width: number }>>({});
  const { width: screenWidth } = useWindowDimensions();

  const [activeSection, setActiveSection] = useState<SectionType>("overview");
  const [mountedSections, setMountedSections] = useState<
    Record<string, boolean>
  >({ overview: true });
  const [activeSubSection, setActiveSubSection] = useState<string>("");
  const [mountedSubSections, setMountedSubSections] = useState<
    Record<string, boolean>
  >({});

  const [mcqAnswers, setMcqAnswers] = useState<Record<string, string>>({});
  const [shuffledOptions, setShuffledOptions] = useState<
    Record<string, string[]>
  >({});
  const [showResultDialog, setShowResultDialog] = useState(false);
  const [quizId, setQuizId] = useState(0);

  const chapter = React.useMemo(() => getChapter(chapterId), [chapterId]);
  const chapterData: ChapterContent | undefined = React.useMemo(() => {
    // Lazy-load chapter content on demand to keep initial app load lightning fast
    const { getChapterContent } = require("@/data/chapterContent");
    return getChapterContent(chapterId);
  }, [chapterId]);
  const chapterGradient = React.useMemo(
    () => getChapterGradient(chapterId),
    [chapterId],
  );
  const accentColor = chapterGradient[0];

  const hasExercises = React.useMemo(() => {
    return (
      (chapterData?.exercises && chapterData.exercises.length > 0) ||
      (chapterData?.htmlExercises && Object.keys(chapterData.htmlExercises).length > 0)
    );
  }, [chapterData]);

  const isScienceSection =
    chapterId.startsWith("sci-") || !!chapterId.match(/^c[789]-sci-/);
  const isMathSection =
    !isScienceSection &&
    !chapterId.startsWith("sst-") &&
    !chapterId.startsWith("eng-");
  const isSeniorClass =
    className === "Class 11" ||
    className === "Class 12" ||
    (typeof className === "string" &&
      (className.includes("Class 11") || className.includes("Class 12"))) ||
    chapterId.startsWith("c11-") ||
    chapterId.startsWith("c12-") ||
    // Class 10 English (JKBOSE Tulip Book-X) deliberately mirrors the Class 11 English chapter layout:
    // "Reference / Q & A / MCQs" tabs, MCQs tab only when MCQs exist, options kept in order.
    chapterId.startsWith("c10-eng-") ||
    // Class 9 English replicates Class 10 English exactly
    chapterId.startsWith("c9-eng-") ||
    // Urdu follows the same Reference / Q & A / MCQs layout (options kept in order)
    isUrduChapter(chapterId);

  const isEnglishChapter = /^c(9|10|11|12)-eng-/.test(chapterId);
  // Urdu chapters: Nastaliq font (loaded on demand), right-to-left labels
  const isUrdu = isUrduChapter(chapterId);
  const urduReady = useUrduFonts(isUrdu);
  const urduLabelStyle = {
    fontFamily: URDU_FONT,
    writingDirection: "rtl" as const,
    textAlign: "right" as const,
    lineHeight: 30,
  };
  // English and Urdu chapters: strip Android font padding so tab labels sit exactly in the vertical centre
  const hwTitleStyle = {
    fontFamily: isUrdu ? URDU_FONT : "NotoSans_400Regular",
    color: "#fff",
    ...(isEnglishChapter || isUrdu ? { includeFontPadding: false, textAlignVertical: "center" as const } : {}),
    ...(isUrdu ? { fontSize: 13, lineHeight: 26 } : {}),
  };

  const scaledBody = {
    ...Typography.body,
    fontFamily: "NotoSans_400Regular",
    ...(isScienceSection || isMathSection
      ? { textAlign: "justify" as const, lineHeight: 26 }
      : { lineHeight: 24 }),
  };
  const scaledH3 = {
    ...Typography.h3,
    fontFamily: "NotoSans_400Regular",
    ...(isScienceSection || isMathSection
      ? { textAlign: "justify" as const }
      : {}),
  };
  const scaledH4 = {
    ...Typography.h4,
    fontFamily: "NotoSans_400Regular",
    ...(isScienceSection || isMathSection
      ? { textAlign: "justify" as const }
      : {}),
  };
  const scaledButton = { ...Typography.button, fontFamily: "NotoSans_700Bold" };
  const scaledQuestionTitle = {
    ...Typography.h4,
    fontFamily: "NotoSans_400Regular",
    ...(isScienceSection || isMathSection
      ? { textAlign: "justify" as const, lineHeight: 28 }
      : { lineHeight: 24 }),
  };
  const scaledSmall = {
    ...Typography.small,
    fontFamily: "NotoSans_400Regular",
    ...(isScienceSection || isMathSection
      ? { textAlign: "justify" as const, lineHeight: 22 }
      : { lineHeight: 20 }),
  };
  const scaledMcqQuestionTitle = {
    ...Typography.body,
    fontFamily: "NotoSans_400Regular",
    fontSize: 16,
    lineHeight: 22,
    textAlign: "justify" as const,
  };
  const scaledMcqOptionText = {
    ...Typography.small,
    fontFamily: "NotoSans_400Regular",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "justify" as const,
  };

  const exerciseSubSections = React.useMemo(() => {
    const subs: string[] = [];
    if (chapterData?.exercises && chapterData.exercises.length > 0) {
      subs.push(...chapterData.exercises.map((ex: any) => ex.id));
    }
    if (chapterData?.htmlExercises && typeof chapterData.htmlExercises === "object") {
      subs.push(...Object.keys(chapterData.htmlExercises));
    }
    if (chapterData?.examples && chapterData.examples.length > 0) {
      subs.push("examples");
    }
    if (chapterData?.theorems && chapterData.theorems.length > 0) {
      subs.push("theorems");
    }
    return Array.from(new Set(subs));
  }, [chapterData]);

  // Multi-part chapters: exercises tagged with `part` ("Part - I", "Part - II", …) get a full-width
  // Part tab row; the sub-tab row below it then lists only the active part's exercises.
  const exerciseParts = React.useMemo(() => {
    const parts: string[] = [];
    chapterData?.exercises?.forEach((ex: any) => {
      if (ex.part && !parts.includes(ex.part)) parts.push(ex.part);
    });
    return parts.length > 1 ? parts : [];
  }, [chapterData]);
  const [activePart, setActivePart] = useState<string>("");
  const currentPart = exerciseParts.includes(activePart) ? activePart : exerciseParts[0] || "";
  const subsForPart = useCallback(
    (part: string) =>
      exerciseParts.length === 0
        ? exerciseSubSections
        : exerciseSubSections.filter(
            (sub) => chapterData?.exercises?.find((ex: any) => ex.id === sub)?.part === part,
          ),
    [exerciseParts, exerciseSubSections, chapterData],
  );
  const visibleSubSections = React.useMemo(
    () => subsForPart(currentPart),
    [subsForPart, currentPart],
  );

  const generateShuffledOptions = useCallback(() => {
    if (!chapterData?.mcqs) return;
    const newShuffled: Record<string, string[]> = {};
    chapterData.mcqs.forEach((mcq: any) => {
      const options = [...mcq.options];
      const hasLabels = options.some((opt: string) => /^[A-D]\)/i.test(opt.trim()));
      // ONLY shuffle options if it is NOT a Maths/Science chapter and NOT senior class and NOT already labeled A), B), C), D)
      if (!isMathSection && !isScienceSection && !isSeniorClass && !hasLabels) {
        for (let i = options.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [options[i], options[j]] = [options[j], options[i]];
        }
      }
      newShuffled[mcq.id] = options;
    });
    setShuffledOptions(newShuffled);
  }, [chapterData, isMathSection, isScienceSection, isSeniorClass]);

  const resetMCQs = useCallback(() => {
    setQuizId((prev) => prev + 1);
    setMcqAnswers({});
    setShowResultDialog(false);
    generateShuffledOptions();
  }, [generateShuffledOptions]);

  const handleSectionChange = useCallback(
    (section: SectionType) => {
      // Instant state updates for visual feedback
      setActiveSection(section);

      // Batch setting mounted sections to avoid multiple renders
      setMountedSections((prev) =>
        prev[section] ? prev : { ...prev, [section]: true },
      );

      if (section === "exercises" && visibleSubSections.length > 0) {
        const first = visibleSubSections[0];
        setActiveSubSection(first);
        setMountedSubSections((prev) =>
          prev[first] ? prev : { ...prev, [first]: true },
        );
      }

      if (section === "mcq") {
        resetMCQs();
      } else {
        // Use requestAnimationFrame for smoother, more native scroll response
        requestAnimationFrame(() => {
          scrollViewRef.current?.scrollTo({ y: 0, animated: false });
        });
      }
    },
    [resetMCQs, visibleSubSections, activeSubSection],
  );

  const handleSubSectionChange = useCallback((sub: string) => {
    setActiveSubSection(sub);
    setMountedSubSections((prev) =>
      prev[sub] ? prev : { ...prev, [sub]: true },
    );
    requestAnimationFrame(() => {
      scrollViewRef.current?.scrollTo({ y: 0, animated: false });
    });
  }, []);

  // Switching Part opens that part's first sub-tab (e.g. Part - II → its own "Text Qs").
  const handlePartChange = useCallback(
    (part: string) => {
      setActivePart(part);
      const first = subsForPart(part)[0];
      if (first) handleSubSectionChange(first);
    },
    [subsForPart, handleSubSectionChange],
  );

  // Keep the active exercise tab fully visible in the scrolling tab bar (centred where possible).
  useEffect(() => {
    const layout = subTabLayoutsRef.current[activeSubSection];
    if (!layout || !subTabScrollRef.current) return;
    const x = Math.max(0, layout.x - (screenWidth - layout.width) / 2);
    subTabScrollRef.current.scrollTo({ x, animated: true });
  }, [activeSubSection, screenWidth]);

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
    if (
      activeSection === "mcq" &&
      chapterData?.mcqs &&
      chapterData.mcqs.length > 0
    ) {
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
        if (
          (activeSection === "mcq" &&
            !chapterData.htmlMcqs &&
            chapterData.mcqs &&
            chapterData.mcqs.length > 0) ||
          (activeSection === "overview" && !chapterData.htmlOverview)
        ) {
          // Let it fall through to native rn UI
        } else {
          return (
            <MathWebView
              chapterData={chapterData}
              activeSection={activeSection}
              activeSubSection={activeSubSection}
              onScrollTop={() =>
                scrollViewRef.current?.scrollTo({ y: 0, animated: true })
              }
            />
          );
        }
      }
    }

    return (
      <View style={{ flex: 1, padding: Spacing.lg }}>
        <View style={{ gap: Spacing.xl }}>
          {mountedSections.overview && (
            <View
              style={{
                display: activeSection === "overview" ? "flex" : "none",
                gap: Spacing.lg,
                width: "100%",
              }}
            >
              <HtmlText
                html={chapterData.introduction}
                style={[scaledBody, { color: JiguuColors.textPrimary }]}
              />
              {chapterData.summary && (
                <View
                  style={{
                    marginTop: Spacing.lg,
                    padding: Spacing.lg,
                    backgroundColor: JiguuColors.surfaceLight,
                    borderRadius: BorderRadius.md,
                  }}
                >
                  <HtmlText
                    html="Summary"
                    style={[
                      scaledH4,
                      { color: accentColor, marginBottom: Spacing.sm },
                    ]}
                  />
                  <HtmlText
                    html={
                      Array.isArray(chapterData.summary)
                        ? chapterData.summary.join("<br/>")
                        : chapterData.summary
                    }
                    style={[scaledSmall]}
                  />
                </View>
              )}
              {chapterData.definitions &&
                chapterData.definitions.length > 0 && (
                  <View
                    style={{
                      marginTop: Spacing.md,
                      backgroundColor: JiguuColors.surface,
                      padding: Spacing.md,
                      borderRadius: BorderRadius.md,
                    }}
                  >
                    <ThemedText
                      style={[
                        scaledH4,
                        { color: accentColor, marginBottom: Spacing.sm },
                      ]}
                    >
                      Key Definitions
                    </ThemedText>
                    {chapterData.definitions?.map((def: any, idx: number) => (
                      <View key={idx} style={{ marginBottom: Spacing.sm }}>
                        <HtmlText
                          html={def.term + ":"}
                          style={[
                            scaledBody,
                            {
                              fontFamily: "NotoSans_400Regular",
                              color: JiguuColors.textPrimary,
                            },
                          ]}
                        />
                        <HtmlText
                          html={def.description ?? ""}
                          style={[
                            scaledSmall,
                            { color: JiguuColors.textSecondary },
                          ]}
                        />
                      </View>
                    ))}
                  </View>
                )}
              {chapterData.keyPoints && chapterData.keyPoints.length > 0 && (
                <View style={{ marginTop: Spacing.md }}>
                  <ThemedText
                    style={[
                      scaledH4,
                      { color: accentColor, marginBottom: Spacing.sm },
                    ]}
                  >
                    Important Points
                  </ThemedText>
                  {chapterData.keyPoints?.map((kp, idx) => (
                    <View
                      key={idx}
                      style={{ flexDirection: "row", marginBottom: Spacing.xs }}
                    >
                      <View
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: accentColor,
                          marginTop: 8,
                          marginRight: 8,
                        }}
                      />
                      <View style={{ flex: 1 }}>
                        <HtmlText
                          html={kp}
                          style={[
                            scaledBody,
                            { color: JiguuColors.textPrimary },
                          ]}
                        />
                      </View>
                    </View>
                  ))}
                </View>
              )}
            </View>
          )}

          {mountedSections.exercises && (
            <View
              style={{
                display: activeSection === "exercises" ? "flex" : "none",
                gap: Spacing.lg,
                width: "100%",
              }}
            >
              {exerciseSubSections.map((sub) => {
                const isActiveSub = sub === activeSubSection;
                const isMountedSub = mountedSubSections[sub] || isActiveSub;
                if (!isMountedSub) return null;
                let questions: any[] | undefined;
                if (sub === "examples") questions = chapterData.examples;
                else if (sub === "theorems")
                  questions = chapterData.theorems?.map((th: any) => ({
                    id: th.id,
                    number: th.number,
                    question: `${th.name}<br/><br/><span style="color: #2E7D32; font-weight: normal;">Statement:</span><br/>${th.statement}`,
                    solution: th.proof || [],
                  }));
                else
                  questions = chapterData.exercises?.find(
                    (ex: any) => ex.id === sub,
                  )?.questions;
                return (
                  <View
                    key={sub}
                    style={{
                      display: isActiveSub ? "flex" : "none",
                      gap: Spacing.lg,
                      width: "100%",
                    }}
                  >
                    {questions?.map((q: any) => (
                      <View
                        key={q.id}
                        style={{
                          backgroundColor: JiguuColors.surface,
                          padding: Spacing.md,
                          borderRadius: BorderRadius.md,
                        }}
                      >
                        <HtmlText
                          chapterId={chapterId}
                          html={
                            sub === "theorems"
                              ? `Theorem ${q.number}:<br/>${q.question}`
                              : q.number
                                ? `Q${q.number}. ${q.question}`
                                : q.question
                          }
                          style={[
                            scaledQuestionTitle,
                            { color: accentColor, marginBottom: Spacing.sm },
                          ]}
                        />
                        <View
                          style={{
                            marginTop: Spacing.sm,
                            paddingLeft: Spacing.sm,
                            borderLeftWidth: 2,
                            borderLeftColor: JiguuColors.border,
                          }}
                        >
                          {q.solution?.map((step: string, sIdx: number) => (
                            <View
                              key={sIdx}
                              style={{ marginBottom: Spacing.xs }}
                            >
                              <HtmlText
                                chapterId={chapterId}
                                html={step.replace(/\n/g, "<br/>")}
                                style={[
                                  scaledBody,
                                  {
                                    color: JiguuColors.textSecondary,
                                    marginBottom: Spacing.xs,
                                  },
                                ]}
                              />
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
            <View
              style={{
                display: activeSection === "mcq" ? "flex" : "none",
                gap: Spacing.lg,
                width: "100%",
              }}
            >
              {chapterData.mcqs?.map((mcq: any, idx: number) => {
                if (!shakeAnimRefs.current[mcq.id]) {
                  shakeAnimRefs.current[mcq.id] = new Animated.Value(0);
                }
                return (
                  <Animated.View
                    key={mcq.id}
                    style={{
                      transform: [
                        { translateX: shakeAnimRefs.current[mcq.id] },
                      ],
                      backgroundColor: JiguuColors.surface,
                      padding: Spacing.md,
                      borderRadius: BorderRadius.md,
                    }}
                  >
                    <View style={{ marginBottom: Spacing.md }}>
                      <HtmlText
                        chapterId={chapterId}
                        html={isUrdu ? `سوال ${toUrduDigits(idx + 1)}: ${mcq.question}` : `Q${idx + 1}. ${mcq.question}`}
                        style={[
                          scaledMcqQuestionTitle,
                          { color: accentColor },
                          // Class 10 Science: justified MCQ statements
                          chapterId.startsWith("sci-") ? { textAlign: "justify" } : null,
                        ]}
                      />
                    </View>
                    {(shuffledOptions[mcq.id] || mcq.options || []).map(
                      (opt: string, oIdx: number) => {
                        const isSelected = mcqAnswers[mcq.id] === opt;
                        const isSubmitted = !!mcqAnswers[mcq.id];
                        let correctOptionText = mcq.correctAnswer;
                        if (mcq.correctAnswer.length === 1) {
                          const charCode = mcq.correctAnswer
                            .toLowerCase()
                            .charCodeAt(0);
                          if (charCode >= 97 && charCode <= 122) {
                            const correctIdx = charCode - 97;
                            if (
                              correctIdx >= 0 &&
                              correctIdx < mcq.options.length
                            ) {
                              correctOptionText = mcq.options[correctIdx];
                            }
                          }
                        }
                        const isCorrect = opt === correctOptionText;
                        const isWrong = isSelected && !isCorrect;
                        let borderColor = JiguuColors.border;
                        let backgroundColor = "transparent";
                        if (isSubmitted) {
                          if (isSelected && isCorrect) {
                            borderColor = "#4CAF50";
                            backgroundColor = "#4CAF5020";
                          } else if (isWrong) {
                            borderColor = "#F44336";
                            backgroundColor = "#F4433620";
                          }
                        } else if (isSelected) {
                          borderColor = accentColor;
                          backgroundColor = accentColor + "20";
                        }
                        const isTallMathChapter = false;
                        return (
                          <TouchableOpacity
                            delayPressIn={0}
                            activeOpacity={0.7}
                            key={oIdx}
                            onPress={() => {
                              if (!isSubmitted) {
                                setMcqAnswers((prev) => ({
                                  ...prev,
                                  [mcq.id]: opt,
                                }));
                                if (opt !== correctOptionText) {
                                  Animated.sequence([
                                    Animated.timing(
                                      shakeAnimRefs.current[mcq.id],
                                      {
                                        toValue: 10,
                                        duration: 50,
                                        useNativeDriver: true,
                                      },
                                    ),
                                    Animated.timing(
                                      shakeAnimRefs.current[mcq.id],
                                      {
                                        toValue: -10,
                                        duration: 50,
                                        useNativeDriver: true,
                                      },
                                    ),
                                    Animated.timing(
                                      shakeAnimRefs.current[mcq.id],
                                      {
                                        toValue: 10,
                                        duration: 50,
                                        useNativeDriver: true,
                                      },
                                    ),
                                    Animated.timing(
                                      shakeAnimRefs.current[mcq.id],
                                      {
                                        toValue: 0,
                                        duration: 50,
                                        useNativeDriver: true,
                                      },
                                    ),
                                  ]).start();
                                }
                              }
                            }}
                            style={{
                              padding: isTallMathChapter ? 14 : Spacing.sm,
                              minHeight: isTallMathChapter ? 62 : undefined,
                              flexDirection: isUrdu ? "row-reverse" : "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                              borderWidth: 1.5,
                              borderColor,
                              backgroundColor,
                              borderRadius: BorderRadius.sm,
                              marginBottom: Spacing.xs,
                            }}
                          >
                            <View style={isUrdu ? { flex: 1, paddingLeft: 8 } : { flex: 1, paddingRight: 8 }}>
                              <HtmlText
                                chapterId={chapterId}
                                html={opt}
                                style={[
                                  scaledMcqOptionText,
                                  {
                                    color: isSubmitted
                                      ? isSelected && isCorrect
                                        ? "#4CAF50"
                                        : isWrong
                                          ? "#F44336"
                                          : JiguuColors.textSecondary
                                      : JiguuColors.textSecondary,
                                    lineHeight: isTallMathChapter
                                      ? 28
                                      : isMathSection
                                        ? 22
                                        : 20,
                                  },
                                ]}
                              />
                            </View>
                            {isSubmitted && isSelected && isCorrect && (
                              <Feather name="check-circle" size={19} color="#4CAF50" />
                            )}
                            {isSubmitted && isWrong && (
                              <Feather name="x-circle" size={19} color="#F44336" />
                            )}
                          </TouchableOpacity>
                        );
                      },
                    )}

                    {/* Dynamic Explanation Panel: Hidden by default and on correct answer; Visible ONLY on wrong answer */}
                    {(() => {
                      const userChoice = mcqAnswers[mcq.id];
                      if (!userChoice) return null;
                      let correctOptionText = mcq.correctAnswer;
                      let correctLetter = "A)";
                      if (mcq.correctAnswer.length === 1) {
                        const charCode = mcq.correctAnswer
                          .toLowerCase()
                          .charCodeAt(0);
                        if (charCode >= 97 && charCode <= 122) {
                          const correctIdx = charCode - 97;
                          if (
                            correctIdx >= 0 &&
                            correctIdx < mcq.options.length
                          ) {
                            correctOptionText = mcq.options[correctIdx];
                            correctLetter = isUrdu
                              ? `${URDU_OPTION_LETTERS[correctIdx]})`
                              : `${String.fromCharCode(65 + correctIdx)})`;
                          }
                        }
                      } else {
                        const match = correctOptionText.match(/^([A-D]\)?)/i);
                        if (match) correctLetter = match[1].toUpperCase();
                      }
                      const isUserCorrect = userChoice === correctOptionText;
                      if (isUserCorrect) return null; // Hidden when user selects correct answer

                      return (
                        <View
                          style={{
                            marginTop: Spacing.md,
                            padding: Spacing.md,
                            backgroundColor: "rgba(0, 0, 0, 0.35)",
                            ...(isUrdu
                              ? { borderRightWidth: 4, borderRightColor: accentColor }
                              : { borderLeftWidth: 4, borderLeftColor: accentColor }),
                            borderRadius: BorderRadius.sm,
                          }}
                        >
                          <ThemedText
                            style={{
                              color: accentColor,
                              fontFamily: isUrdu ? URDU_FONT_BOLD : "NotoSans_700Bold",
                              fontSize: 15,
                              marginBottom: 6,
                              ...(isUrdu ? urduLabelStyle : {}),
                            }}
                          >
                            {isUrdu
                              ? `درست جواب: ${correctLetter}`
                              : `Correct Answer is ${correctLetter.endsWith(")") ? correctLetter : `${correctLetter})`}`}
                          </ThemedText>
                          {mcq.explanation ? (
                            <View style={{ marginTop: 2 }}>
                              <ThemedText
                                style={{
                                  color: "#FFFFFF",
                                  fontFamily: isUrdu ? URDU_FONT_BOLD : "NotoSans_700Bold",
                                  fontSize: 14,
                                  marginBottom: 3,
                                  ...(isUrdu ? urduLabelStyle : {}),
                                }}
                              >
                                {isUrdu ? "وضاحت:" : "Explanation:"}
                              </ThemedText>
                              <HtmlText
                                chapterId={chapterId}
                                html={mcq.explanation}
                                style={{
                                  color: "#FFFFFF",
                                  fontFamily: "NotoSans_400Regular",
                                  fontSize: 14,
                                  lineHeight: 22,
                                  // Class 10 Science: justified MCQ explanations
                                  ...(chapterId.startsWith("sci-") ? { textAlign: "justify" as const } : {}),
                                }}
                              />
                            </View>
                          ) : null}
                        </View>
                      );
                    })()}
                  </Animated.View>
                );
              })}
            </View>
          )}
        </View>
      </View>
    );
  }, [
    chapterId,
    chapterData,
    activeSection,
    activeSubSection,
    accentColor,
    mcqAnswers,
    shuffledOptions,
    mountedSections,
    mountedSubSections,
    exerciseSubSections,
    scaledBody,
    scaledQuestionTitle,
    scaledSmall,
  ]);

  let tab1Title = "Overview";
  let tab2Title = "Q & A";
  let tab3Title = "MCQs";

  if (isUrdu) {
    tab1Title = "حوالہ";
    tab2Title = "سوال و جواب";
    tab3Title = "معروضی سوالات";
  } else if (chapterId.startsWith("c12-math-") || chapterId.startsWith("c11-math-") || chapterId.includes("-math-") || chapterId.startsWith("math-")) {
    tab1Title = "Overview";
    tab2Title = "Q & A";
  } else if (isSeniorClass) {
    tab1Title = "Reference";
    tab2Title = "Q & A";
  } else if (chapterId.startsWith("sci-")) {
    tab1Title = "Quick Revision";
    tab2Title = "NCERT Solutions";
  } else if (chapterId.startsWith("sst-") || chapterId.match(/^c\d+-(hist|geo|civ)-/)) {
    tab1Title = "Overview";
    tab2Title = "Q & A";
  } else if (chapterId.startsWith("eng-gra-")) {
    tab1Title = "Rules & Formats";
    tab2Title = "Practice Sets";
  } else if (chapterId.startsWith("eng-")) {
    tab1Title = "Summary";
    tab2Title = "Q & A";
  } else if (chapterId.match(/^c[789]-sci-/)) {
    tab2Title = "NCERT Solutions";
  }

  const homeRoute = getHomeRoute(className, chapterId);

  // Urdu: wait (first time only, a moment) for the Nastaliq font, so text never flashes in the wrong font
  if (isUrdu && !urduReady) {
    return (
      <ScreenWrapper showBackButton homeRoute={homeRoute}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <ActivityIndicator size="large" color={accentColor} />
        </View>
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper
      showBackButton
      title={chapter ? `Chapter ${chapter.number}` : ""}
      titleColor={accentColor}
      homeRoute={homeRoute}
    >
      <View style={styles.staticContainer}>
        <View style={styles.tabContainer}>
          <TabButton
            title={tab1Title}
            isActive={activeSection === "overview"}
            onPress={() => handleSectionChange("overview")}
            gradient={chapterGradient}
            textStyle={hwTitleStyle}
          />
          {(hasExercises || chapterId.startsWith("c12-math-") || chapterId.startsWith("c11-math-")) && (
            <TabButton
              title={tab2Title}
              isActive={activeSection === "exercises"}
              onPress={() => handleSectionChange("exercises")}
              gradient={chapterGradient}
              textStyle={hwTitleStyle}
            />
          )}
          {((chapterData?.mcqs && chapterData.mcqs.length > 0) || !isSeniorClass || chapterId.startsWith("c12-math-") || chapterId.startsWith("c11-math-")) && (
            <TabButton
              title={tab3Title}
              isActive={activeSection === "mcq"}
              onPress={() => handleSectionChange("mcq")}
              gradient={chapterGradient}
              textStyle={hwTitleStyle}
            />
          )}
        </View>

        {activeSection === "exercises" && exerciseParts.length > 1 && (
          <View style={{ height: 42, marginBottom: Spacing.sm }}>
            <View style={[styles.subTabRow, isUrdu && styles.rtlRow]}>
              {exerciseParts.map((part) => (
                <SubTabButton
                  key={part}
                  title={part}
                  isActive={currentPart === part}
                  onPress={() => handlePartChange(part)}
                  gradient={chapterGradient}
                  textStyle={hwTitleStyle}
                  fill
                />
              ))}
            </View>
          </View>
        )}

        {activeSection === "exercises" && visibleSubSections.length > 1 && (() => {
          // Up to 4 tabs: one full-width row, tabs share the width equally (no scrolling).
          // 5 or more tabs: horizontal scroll without a scrollbar.
          const tabCount = visibleSubSections.length;
          const useRow = tabCount <= 4;
          const tabs = visibleSubSections.map((sub: string) => {
                let title =
                  sub === "examples"
                    ? "Examples"
                    : sub === "theorems"
                      ? "Theorems"
                      : sub === "exercises"
                        ? "Q & A"
                        : chapterData?.exercises?.find(
                            (ex: any) => ex.id === sub.trim(),
                          )?.name ||
                        sub
                          .replace("sp3-it-", "In-Text-")
                          .replace("sp3-ex", "Exercise")
                          .replace("in-text", "In-Text-")
                          .replace("it-", "In-Text-")
                          .replace("ex-", "Exercise-")
                          .replace("exercise", "Exercise ");
                if (chapterId === "sci-phy-3") {
                  const itMatch = sub.match(/sp3-it-(\d+)/);
                  if (itMatch) title = `In-Text-${itMatch[1]}`;
                  else if (sub === "sp3-ex") title = "Exercise";
                } else if (chapterId === "sci-phy-4") {
                  const itMatch = sub.match(/sp4-it-(\d+)/);
                  if (itMatch) title = `In-Text-${itMatch[1]}`;
                  else if (sub === "sp4-ex") title = "Exercise";
                }
                return (
                  <SubTabButton
                    key={sub}
                    title={title}
                    isActive={activeSubSection === sub}
                    onPress={() => handleSubSectionChange(sub)}
                    gradient={chapterGradient}
                    textStyle={hwTitleStyle}
                    fill={useRow}
                    compact={tabCount === 4}
                    onLayout={
                      useRow
                        ? undefined
                        : (e: any) => {
                            const { x, width } = e.nativeEvent.layout;
                            subTabLayoutsRef.current[sub] = { x, width };
                          }
                    }
                  />
                );
              });
          return (
            <View style={{ height: 42, marginBottom: Spacing.sm }}>
              {useRow ? (
                <View style={[styles.subTabRow, isUrdu && styles.rtlRow]}>{tabs}</View>
              ) : (
                <ScrollView
                  ref={subTabScrollRef}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  nestedScrollEnabled
                  style={styles.subTabScroll}
                  contentContainerStyle={styles.subTabContainer}
                >
                  {tabs}
                </ScrollView>
              )}
            </View>
          );
        })()}

        <ZoomableScrollView
          key={`${chapterId}-${quizId}`}
          ref={scrollViewRef}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          {renderSectionContent()}
        </ZoomableScrollView>

        <Modal
          visible={showResultDialog}
          transparent
          animationType="fade"
          onRequestClose={() => resetMCQs()}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.75)",
              justifyContent: "center",
              alignItems: "center",
              padding: Spacing.lg,
            }}
          >
            {(() => {
              const totalCount = chapterData?.mcqs?.length || 0;
              const correctCount = Object.entries(mcqAnswers).filter(
                ([id, ans]) => {
                  const mcq = chapterData?.mcqs?.find(
                    (m: any) => m.id === id,
                  );
                  if (!mcq) return false;
                  let correctOptionText = mcq.correctAnswer;
                  if (mcq.correctAnswer.length === 1) {
                    const charCode = mcq.correctAnswer
                      .toLowerCase()
                      .charCodeAt(0);
                    if (charCode >= 97 && charCode <= 122) {
                      const correctIdx = charCode - 97;
                      if (
                        correctIdx >= 0 &&
                        correctIdx < mcq.options.length
                      ) {
                        correctOptionText = mcq.options[correctIdx];
                      }
                    }
                  }
                  return correctOptionText === ans;
                },
              ).length;
              const wrongCount = totalCount - correctCount;
              const percentage =
                totalCount > 0
                  ? Math.round((correctCount / totalCount) * 100)
                  : 0;

              let tierEmoji = "🏆";
              let tierTitle = "OUTSTANDING MASTERMIND!";
              let tierMessage =
                "Incredible performance! You've mastered this chapter with top-tier excellence! 🚀✨";
              let tierColor = "#FFD700";
              let tierBadgeBg = "rgba(255, 215, 0, 0.15)";
              let tierBorder = "#FFD700";

              if (percentage >= 90) {
                tierEmoji = "🏆";
                tierTitle = "OUTSTANDING MASTERMIND!";
                tierMessage =
                  "Incredible performance! You've mastered this chapter with top-tier excellence! 🚀✨";
                tierColor = "#FFD700";
                tierBadgeBg = "rgba(255, 215, 0, 0.15)";
                tierBorder = "#FFD700";
              } else if (percentage >= 75) {
                tierEmoji = "🎯";
                tierTitle = "EXCELLENT PERFORMANCE!";
                tierMessage =
                  "Strong grasp of concepts! Just a quick brush-up on minor topics and you'll hit a perfect 100%! 👏⚡";
                tierColor = "#00E5FF";
                tierBadgeBg = "rgba(0, 229, 255, 0.15)";
                tierBorder = "#00E5FF";
              } else if (percentage >= 50) {
                tierEmoji = "📚";
                tierTitle = "GOOD EFFORT!";
                tierMessage =
                  "Good attempt! Review the step-by-step solutions and key formulas to take your score to the next level! 💡📈";
                tierColor = "#FFA726";
                tierBadgeBg = "rgba(255, 167, 38, 0.15)";
                tierBorder = "#FFA726";
              } else {
                tierEmoji = "📖";
                tierTitle = "KEEP PRACTICING!";
                tierMessage =
                  "Don't worry! Read the Reference Theory guide thoroughly, understand the key explanations, and try again! 🌟💪";
                tierColor = "#FF512F";
                tierBadgeBg = "rgba(255, 81, 47, 0.15)";
                tierBorder = "#FF512F";
              }

              return (
                <View
                  style={{
                    backgroundColor: "#0F172A",
                    borderWidth: 2,
                    borderColor: tierBorder,
                    padding: Spacing.xl,
                    borderRadius: BorderRadius.xl,
                    width: "100%",
                    maxWidth: 380,
                    alignItems: "center",
                    shadowColor: tierColor,
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.35,
                    shadowRadius: 20,
                    elevation: 12,
                  }}
                >
                  {/* Top Emoji Badge */}
                  <View
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: 36,
                      backgroundColor: tierBadgeBg,
                      borderWidth: 2,
                      borderColor: tierColor,
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: Spacing.md,
                    }}
                  >
                    <ThemedText style={{ fontSize: 36 }}>{tierEmoji}</ThemedText>
                  </View>

                  {/* Tier Title */}
                  <ThemedText
                    style={{
                      color: tierColor,
                      fontFamily: "NotoSans_700Bold",
                      fontSize: 18,
                      letterSpacing: 0.5,
                      textAlign: "center",
                      marginBottom: Spacing.xs,
                    }}
                  >
                    {tierTitle}
                  </ThemedText>

                  {/* Score Pill */}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      paddingHorizontal: 16,
                      paddingVertical: 6,
                      borderRadius: BorderRadius.full,
                      marginVertical: Spacing.sm,
                    }}
                  >
                    <ThemedText
                      style={{
                        color: "#FFFFFF",
                        fontFamily: "NotoSans_700Bold",
                        fontSize: 22,
                      }}
                    >
                      {percentage}%
                    </ThemedText>
                    <ThemedText
                      style={{
                        color: JiguuColors.textSecondary,
                        fontFamily: "NotoSans_400Regular",
                        fontSize: 14,
                        marginLeft: 8,
                      }}
                    >
                      ({correctCount}/{totalCount} Correct)
                    </ThemedText>
                  </View>

                  {/* Stats 3-Column Row */}
                  <View
                    style={{
                      flexDirection: "row",
                      width: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      borderRadius: BorderRadius.md,
                      padding: Spacing.sm,
                      marginVertical: Spacing.md,
                      justifyContent: "space-around",
                    }}
                  >
                    <View style={{ alignItems: "center" }}>
                      <ThemedText
                        style={{
                          color: "#4CAF50",
                          fontFamily: "NotoSans_700Bold",
                          fontSize: 16,
                        }}
                      >
                        ✓ {correctCount}
                      </ThemedText>
                      <ThemedText
                        style={{
                          color: JiguuColors.textSecondary,
                          fontSize: 12,
                        }}
                      >
                        Correct
                      </ThemedText>
                    </View>
                    <View
                      style={{
                        width: 1,
                        backgroundColor: "rgba(255,255,255,0.1)",
                      }}
                    />
                    <View style={{ alignItems: "center" }}>
                      <ThemedText
                        style={{
                          color: "#F44336",
                          fontFamily: "NotoSans_700Bold",
                          fontSize: 16,
                        }}
                      >
                        ✗ {wrongCount}
                      </ThemedText>
                      <ThemedText
                        style={{
                          color: JiguuColors.textSecondary,
                          fontSize: 12,
                        }}
                      >
                        Wrong
                      </ThemedText>
                    </View>
                    <View
                      style={{
                        width: 1,
                        backgroundColor: "rgba(255,255,255,0.1)",
                      }}
                    />
                    <View style={{ alignItems: "center" }}>
                      <ThemedText
                        style={{
                          color: tierColor,
                          fontFamily: "NotoSans_700Bold",
                          fontSize: 16,
                        }}
                      >
                        {percentage}%
                      </ThemedText>
                      <ThemedText
                        style={{
                          color: JiguuColors.textSecondary,
                          fontSize: 12,
                        }}
                      >
                        Accuracy
                      </ThemedText>
                    </View>
                  </View>

                  {/* Motivational Message */}
                  <ThemedText
                    style={{
                      color: "#CBD5E1",
                      fontFamily: "NotoSans_400Regular",
                      fontSize: 13.5,
                      lineHeight: 20,
                      textAlign: "center",
                      marginBottom: Spacing.lg,
                    }}
                  >
                    {tierMessage}
                  </ThemedText>

                  {/* Action Buttons */}
                  <TouchableOpacity
                    delayPressIn={0}
                    activeOpacity={0.8}
                    style={{
                      width: "100%",
                      height: 46,
                      borderRadius: BorderRadius.md,
                      overflow: "hidden",
                      marginBottom: Spacing.sm,
                    }}
                    onPress={() => resetMCQs()}
                  >
                    <LinearGradient
                      colors={chapterGradient as any}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={{
                        width: "100%",
                        height: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                      }}
                    >
                      <Feather name="rotate-ccw" size={16} color="#FFFFFF" />
                      <ThemedText
                        style={{
                          color: "#FFFFFF",
                          fontFamily: "NotoSans_700Bold",
                          fontSize: 15,
                        }}
                      >
                        Retake Quiz
                      </ThemedText>
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity
                    delayPressIn={0}
                    activeOpacity={0.7}
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      paddingVertical: 10,
                      borderRadius: BorderRadius.md,
                      width: "100%",
                      alignItems: "center",
                    }}
                    onPress={() => resetMCQs()}
                  >
                    <ThemedText
                      style={{
                        color: JiguuColors.textSecondary,
                        fontFamily: "NotoSans_700Bold",
                        fontSize: 14,
                      }}
                    >
                      Close &amp; Review
                    </ThemedText>
                  </TouchableOpacity>
                </View>
              );
            })()}
          </View>
        </Modal>
      </View>
    </ScreenWrapper>
  );
}

export default memo(SolutionScreen);

const MathWebView = memo(
  ({ chapterData, activeSection, activeSubSection, onScrollTop }: any) => {
    const [height, setHeight] = useState(500);

    // Urdu pages: point the page at the bundled Nastaliq font files (loaded once, then cached)
    const isUrduPage = isUrduChapter(chapterData?.id);
    const [urduFonts, setUrduFonts] = useState<{ regular?: string; bold?: string } | null>(null);
    useEffect(() => {
      if (!isUrduPage) return;
      let alive = true;
      getUrduFontUris().then((u) => alive && setUrduFonts(u));
      return () => {
        alive = false;
      };
    }, [isUrduPage]);
    const urduCss = isUrduPage
      ? `
          ${urduFonts?.regular ? `@font-face { font-family: 'UrduNastaliq'; src: url('${urduFonts.regular}') format('truetype'); font-weight: 400; font-style: normal; }` : ""}
          ${urduFonts?.bold ? `@font-face { font-family: 'UrduNastaliq'; src: url('${urduFonts.bold}') format('truetype'); font-weight: 700; font-style: normal; }` : ""}
          html, body { direction: rtl; }
          body { font-family: 'UrduNastaliq', 'Noto Nastaliq Urdu', 'Noto Naskh Arabic', serif !important; font-size: 17px; line-height: 2.1; text-align: right; }
          b, strong { font-weight: 700; }
          .ltr { direction: ltr; unicode-bidi: isolate; display: inline-block; }
        `
      : "";
    const urduBaseUrl =
      isUrduPage && urduFonts?.regular?.startsWith("file://")
        ? urduFonts.regular.slice(0, urduFonts.regular.lastIndexOf("/") + 1)
        : "";

    let htmlContent = "";
    if (activeSection === "overview")
      htmlContent = chapterData.htmlOverview || "";
    else if (activeSection === "exercises")
      htmlContent = chapterData.htmlExercises?.[activeSubSection] || "";
    else if (activeSection === "mcq") htmlContent = chapterData.htmlMcqs || "";

    const fullHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
        <style>
          body { 
            margin: 0; 
            padding: 8px 6px; 
            color: #FFFFFF; 
            font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; 
            font-size: 15.5px; 
            line-height: 1.6;
            background-color: transparent;
          }
          * { box-sizing: border-box; }

          /* Stacked Fraction (Vertical a over b) */
          .frac { 
            display: inline-flex !important; 
            flex-direction: column !important; 
            vertical-align: middle !important; 
            text-align: center !important; 
            font-size: 0.95em !important; 
            margin: 2px 6px !important; 
            line-height: 1.25 !important; 
          }
          .frac .num { 
            border-bottom: 1.5px solid currentColor !important; 
            padding: 1px 4px !important; 
            text-align: center !important; 
          }
          .frac .den { 
            padding: 1px 4px !important; 
            text-align: center !important; 
          }

          /* True Matrix with High-Definition Square Brackets [ ] */
          .mat {
            display: inline-flex !important;
            position: relative !important;
            vertical-align: middle !important;
            margin: 4px 6px !important;
            padding: 4px 10px !important;
          }
          .mat::before {
            content: "" !important;
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            bottom: 0 !important;
            width: 7px !important;
            border-left: 2.5px solid currentColor !important;
            border-top: 2.5px solid currentColor !important;
            border-bottom: 2.5px solid currentColor !important;
            border-top-left-radius: 4px !important;
            border-bottom-left-radius: 4px !important;
          }
          .mat::after {
            content: "" !important;
            position: absolute !important;
            right: 0 !important;
            top: 0 !important;
            bottom: 0 !important;
            width: 7px !important;
            border-right: 2.5px solid currentColor !important;
            border-top: 2.5px solid currentColor !important;
            border-bottom: 2.5px solid currentColor !important;
            border-top-right-radius: 4px !important;
            border-bottom-right-radius: 4px !important;
          }
          .mat table, .mat-table {
            width: auto !important;
            max-width: none !important;
            display: inline-table !important;
            margin: 0 !important;
            border-collapse: collapse !important;
          }
          .mat td, .mat-table td {
            padding: 4px 8px !important;
            text-align: center !important;
            color: #FFFFFF !important;
            font-weight: 600 !important;
            font-size: 15px !important;
            white-space: nowrap !important;
            word-break: normal !important;
            border: none !important;
          }

          /* True Determinant with Straight Vertical Bars | | */
          .det {
            display: inline-flex !important;
            position: relative !important;
            vertical-align: middle !important;
            margin: 4px 6px !important;
            padding: 4px 8px !important;
            border-left: 2.5px solid currentColor !important;
            border-right: 2.5px solid currentColor !important;
          }
          .det table, .det-table {
            width: auto !important;
            max-width: none !important;
            display: inline-table !important;
            margin: 0 !important;
            border-collapse: collapse !important;
          }
          .det td, .det-table td {
            padding: 4px 8px !important;
            text-align: center !important;
            color: #FFFFFF !important;
            font-weight: 600 !important;
            font-size: 15px !important;
            white-space: nowrap !important;
            word-break: normal !important;
            border: none !important;
          }

          /* Universal Card Styling */
          .q-card {
            background: rgba(15, 23, 42, 0.8) !important;
            border: 1.5px solid rgba(255, 255, 255, 0.18) !important;
            border-radius: 12px !important;
            padding: 16px !important;
            margin-bottom: 22px !important;
            box-shadow: 0 4px 15px rgba(0,0,0,0.25) !important;
          }
          .q-title {
            font-size: 17.5px !important;
            font-weight: 800 !important;
            margin-bottom: 10px !important;
            display: flex !important;
            align-items: center !important;
            gap: 8px !important;
          }
          .q-text {
            font-size: 15.5px !important;
            color: #FFFFFF !important;
            line-height: 2.1 !important;
            margin-bottom: 14px !important;
            font-weight: 500 !important;
          }
          .sub-item {
            margin-top: 16px !important;
            padding-top: 16px !important;
            border-top: 1px dashed rgba(255, 255, 255, 0.18) !important;
          }
          .sub-q {
            font-size: 15.5px !important;
            color: #FFFFFF !important;
            font-weight: 600 !important;
            margin-bottom: 12px !important;
            line-height: 2.1 !important;
          }
          .sol-box {
            background: rgba(0, 0, 0, 0.35) !important;
            border-left: 3.5px solid #FF512F;
            border-radius: 8px !important;
            padding: 14px 16px !important;
            margin-top: 12px !important;
          }
          .sol-title {
            font-size: 14.5px !important;
            font-weight: 800 !important;
            margin-bottom: 10px !important;
            display: flex !important;
            align-items: center !important;
            gap: 6px !important;
          }
          .sol-step {
            font-size: 15px !important;
            color: #E2E8F0 !important;
            line-height: 2.35 !important;
          }
          .sol-step div {
            margin-top: 6px !important;
            margin-bottom: 6px !important;
          }
          .reason {
            color: #94A3B8 !important;
            font-size: 13.5px !important;
            font-style: italic !important;
            display: inline-block !important;
            margin-left: 8px !important;
          }
          .ans-box {
            background: rgba(76, 175, 80, 0.15) !important;
            border: 1.5px solid #4CAF50 !important;
            border-radius: 8px !important;
            padding: 8px 14px !important;
            margin-top: 14px !important;
            display: inline-block !important;
            line-height: 1.8 !important;
          }
          .ans-label {
            color: #A5D6A7 !important;
            font-weight: 700 !important;
            font-size: 14px !important;
          }
          .ans-val {
            color: #FFFFFF !important;
            font-weight: 700 !important;
            font-size: 15px !important;
          }
        </style>
        ${urduCss ? `<style>${urduCss}</style>` : ""}
      </head>
      <body${isUrduPage ? ' dir="rtl" lang="ur"' : ""}>
        ${htmlContent}
      </body>
    </html>
  `;

    const injectedJS = `
    const style = document.createElement('style');
    style.innerHTML = \`
      * { box-sizing: border-box !important; }
      body { 
        margin: 0 !important; 
        padding: 8px 6px !important; 
        overflow-x: hidden !important; 
        width: 100% !important; 
        -webkit-user-select: none; 
        user-select: none; 
        -webkit-touch-callout: none;
      }
      p:not(.no-justify), li:not(.no-justify) {
        text-align: justify;
      }
      .q-card, .q-card *, .sol-box, .sol-box *, .sol-step, .sol-step *, .ans-box, .ans-box *, .sub-item, .sub-item *, .q-title, .q-text, .sub-q, .reason, .math-row, .equation {
        text-align: left !important;
      }
      .diagram-caption, .diagram-wrapper, .frac, .frac * {
        text-align: center !important;
      }
      p, img, div:not(.table-container):not(.table-responsive):not(.prop-table):not(.mat):not(.det), h1, h2, h3, h4, h5, h6, b, strong, span {
        word-break: break-word !important;
        overflow-wrap: break-word !important;
        max-width: 100% !important;
      }
      img { 
        max-width: 100% !important; 
        height: auto !important; 
        display: block !important; 
        margin: 15px auto !important; 
        border-radius: 8px !important;
      }
      table:not(.prop-table):not(.data-table):not(.mat-table):not(.det-table):not(.inline-table) { 
        width: 100% !important; 
        max-width: 100% !important; 
        display: table !important; 
        margin: 15px auto !important; 
        border-collapse: collapse !important;
      }
      .mat table, .mat-table, .det table, .det-table {
        width: auto !important;
        max-width: none !important;
        display: inline-table !important;
        margin: 0 !important;
        border-collapse: collapse !important;
      }
      .mat td, .mat-table td, .det td, .det-table td {
        padding: 4px 8px !important;
        text-align: center !important;
        color: #FFFFFF !important;
        font-weight: 600 !important;
        font-size: 15px !important;
        white-space: nowrap !important;
        word-break: normal !important;
        border: none !important;
      }
      .table-container, .table-responsive {
        width: 100% !important;
        max-width: 100% !important;
        overflow-x: auto !important;
        -webkit-overflow-scrolling: touch !important;
        display: block !important;
        margin: 15px 0 !important;
      }
      .table-container table, .table-responsive table, .data-table, .prop-table {
        width: 100% !important;
        max-width: 100% !important;
        display: table !important;
        margin: 0 auto !important;
        border-collapse: collapse !important;
        table-layout: auto !important;
      }
      .table-container th, .table-container td,
      .table-responsive th, .table-responsive td,
      .data-table th, .data-table td,
      .prop-table th, .prop-table td {
        text-align: center !important;
        padding: 5px 2px !important;
        font-size: 11.5px !important;
        line-height: 1.25 !important;
        word-break: normal !important;
      }
      pre, code { 
        white-space: pre-wrap !important; 
        word-wrap: break-word !important; 
      }
    \`;
    document.head.appendChild(style);
    
    setTimeout(function() {
      var h = document.body.offsetHeight || document.documentElement.offsetHeight || document.body.scrollHeight;
      window.ReactNativeWebView.postMessage(h.toString());
    }, 500);
    const observer = new MutationObserver(function() {
      var h = document.body.offsetHeight || document.documentElement.offsetHeight || document.body.scrollHeight;
      window.ReactNativeWebView.postMessage(h.toString());
    });
    observer.observe(document.body, { attributes: true, childList: true, subtree: true });
    true;
  `;

    if (!htmlContent)
      return (
        <EmptyState title="No Content" message="Coming soon..." icon="clock" />
      );

    // Urdu: wait for the font files so the page is drawn once, in Nastaliq
    if (isUrduPage && !urduFonts)
      return (
        <View style={{ height: 120, alignItems: "center", justifyContent: "center" }}>
          <ActivityIndicator size="small" color="#FFFFFF" />
        </View>
      );

    return (
      <View
        style={{
          height: Math.max(height + 10, 100),
          width: "100%",
          paddingBottom: 10,
        }}
      >
        <WebView
          originWhitelist={["*"]}
          allowFileAccess={true}
          allowFileAccessFromFileURLs={isUrduPage}
          allowUniversalAccessFromFileURLs={isUrduPage}
          allowingReadAccessToURL="*"
          mixedContentMode="always"
          source={{ html: fullHtml, baseUrl: isUrduPage ? urduBaseUrl : "" }}
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
          style={{ flex: 1, backgroundColor: "transparent" }}
          cacheMode="LOAD_CACHE_ELSE_NETWORK"
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  staticContainer: { flex: 1 },
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
    fontFamily: "NotoSans_400Regular",
  },
  title: {
    ...Typography.h4,
    fontSize: 16,
    lineHeight: 22,
    color: JiguuColors.textPrimary,
    textAlign: "center",
  },
  tabContainer: {
    flexDirection: "row",
    height: 44,
    marginBottom: Spacing.sm,
    marginHorizontal: Spacing.md,
    backgroundColor: JiguuColors.surface,
    borderRadius: BorderRadius.full,
    padding: 4,
    gap: 4,
  },
  tabButton: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderColor: "transparent",
    overflow: "hidden",
  },
  tabButtonGradient: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: BorderRadius.full,
    paddingHorizontal: 4,
  },
  tabText: {
    ...Typography.small,
    fontSize: 13,
    fontFamily: "NotoSans_500Medium",
    color: JiguuColors.textSecondary,
    textAlign: "center",
  },
  tabTextActive: { color: "#fff" },
  subTabScroll: { flex: 1 },
  // Urdu chapters: tabs read right to left (first tab on the right)
  rtlRow: { flexDirection: "row-reverse" },
  // up to 4 exercise tabs: one full-width row, each tab gets an equal share (50/50, 33/33/33, 25 × 4)
  subTabRow: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: Spacing.md,
  },
  subTabButtonFill: {
    flex: 1,
    minWidth: 0,
    paddingHorizontal: 8,
    justifyContent: "center",
  },
  // 4 tabs share the row: keep inner padding minimal so labels like "Short Answer" fit without shrinking
  subTabButtonCompact: { paddingHorizontal: 2 },
  tabButtonGradientCompact: { paddingHorizontal: 0 },
  tabTextCompact: { fontSize: 12 },
  // 5+ exercise tabs: scrolling row. Left-aligned on purpose — centring overflowing content
  // (justifyContent: "center" + flexGrow) pushes the first tab past the left edge where it cannot be scrolled to.
  subTabContainer: {
    paddingHorizontal: Spacing.md,
    gap: 8,
    alignItems: "center",
  },
  subTabButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    minWidth: 90,
    alignItems: "center",
    borderRadius: BorderRadius.full,
    borderWidth: 1.5,
    borderColor: "rgba(255,255,255,0.2)",
    backgroundColor: JiguuColors.surface,
    overflow: "hidden",
  },
  subTabButtonActive: { borderColor: "transparent" },
  tabButtonWrapper: {
    width: "100%",
    height: "100%",
    borderRadius: BorderRadius.full,
    overflow: "hidden",
  },
  glossOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
});
