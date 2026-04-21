import React, { memo, useState, useCallback, useEffect } from "react";
import { StyleSheet, View, ScrollView, Pressable, Alert, Modal } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, Typography, BorderRadius } from "@/constants/theme";
import { ParsedText } from "@/components/ParsedText";
import { generateQuizAsync, QuizQuestion } from "@/utils/quiz-engine";
import { saveQuizResult, getQuizHistory, QuizResult } from "@/utils/quiz-storage";

type QuizState = "menu" | "active" | "result";

export default function QuizScreen() {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<RootStackParamList, "Quiz">>();
    const className = route.params?.className;

    const [viewState, setViewState] = useState<QuizState>("menu");
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [history, setHistory] = useState<QuizResult[]>([]);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const [loading, setLoading] = useState(false);

    // Load history on mount
    useEffect(() => {
        loadHistory();
    }, []);

    const loadHistory = async () => {
        const data = await getQuizHistory();
        setHistory(data);
    };

    const startQuiz = useCallback(async (subject: string = "Mathematics") => {
        if (className && className !== "Class 10") {
            Alert.alert("Quiz Coming Soon", `Quiz content for ${className} is coming soon!`);
            return;
        }

        setLoading(true);
        try {
            const newQuestions = await generateQuizAsync(10, subject); // Generate 10 random questions
            if (newQuestions.length === 0) {
                Alert.alert("Error", "No questions available to generate a quiz.");
                return;
            }
            setQuestions(newQuestions);
            setCurrentQuestionIndex(0);
            setScore(0);
            setViewState("active");
            setSelectedIndex(null);
            setShowAnswer(false);
        } catch (e) {
            console.error(e);
            Alert.alert("Error", "Failed to start quiz.");
        } finally {
            setLoading(false);
        }
    }, []);

    const handleOptionSelect = (optionIndex: number) => {
        if (showAnswer) return;

        const currentQ = questions[currentQuestionIndex];
        const selectedLetter = String.fromCharCode(65 + optionIndex); // 'A', 'B', 'C', 'D'
        
        setSelectedIndex(optionIndex);
        setShowAnswer(true);

        const isCorrect = selectedLetter === currentQ.correctAnswer;
        const newScore = isCorrect ? score + 1 : score;

        if (isCorrect) {
            setScore(s => s + 1);
        }

        // Auto move to next after delay
        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(i => i + 1);
                setSelectedIndex(null);
                setShowAnswer(false);
            } else {
                finishQuiz(newScore);
            }
        }, 500); 
    };



    const finishQuiz = async (finalScoreValue?: number) => {
        const finalScore = finalScoreValue !== undefined ? finalScoreValue : score;
        await saveQuizResult(finalScore, questions.length);
        await loadHistory();
        setViewState("result");
    };

    const handleQuitQuiz = () => {
        Alert.alert(
            "Quit Quiz",
            "Are you sure you want to quit? Your progress will be lost.",
            [
                { text: "Cancel", style: "cancel" },
                { text: "Quit", style: "destructive", onPress: () => setViewState("menu") }
            ]
        );
    };

    const renderMenu = () => (
        <View style={styles.menuContainer}>
            <View style={styles.menuHeader}>
                <ThemedText style={styles.subtitle}>Practice Quiz</ThemedText>
                <ThemedText style={styles.subtitle}>
                   
                </ThemedText>
            </View>

            <View style={styles.subjectButtonsContainer}>
                <Pressable delayPressIn={0} style={styles.subjectButton} onPress={() => startQuiz("Mathematics")}>
                    <LinearGradient
                        colors={JiguuColors.gradients.pink as any}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.startButton}
                    >
                        <ThemedText style={styles.startButtonText}>Maths Quiz</ThemedText>
                    </LinearGradient>
                </Pressable>

                <Pressable delayPressIn={0} style={styles.subjectButton} onPress={() => startQuiz("Science")}>
                    <LinearGradient
                        colors={JiguuColors.gradients.blue as any}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.startButton}
                    >
                        <ThemedText style={styles.startButtonText}>Science Quiz</ThemedText>
                    </LinearGradient>
                </Pressable>
            </View>

            <View style={styles.historyContainer}>
                <ThemedText style={styles.subtitle}>Recent Performance</ThemedText>
                {history.length === 0 ? (
                    <ThemedText style={styles.emptyText}>No quizzes taken yet.</ThemedText>
                ) : (
                    history.slice(0, 5).map((item) => (
                        <View key={item.id} style={styles.historyItem}>
                            <View>
                                <ThemedText style={styles.historyScore}>
                                    {item.score}/{item.totalQuestions}
                                </ThemedText>
                                <ThemedText style={styles.historyDate}>
                                    {new Date(item.date).toLocaleDateString()}
                                </ThemedText>
                            </View>
                            <View style={[
                                styles.percentageBadge,
                                { backgroundColor: item.percentage >= 70 ? JiguuColors.arithmetic : item.percentage >= 40 ? JiguuColors.polynomials : JiguuColors.triangles }
                            ]}>
                                <ThemedText style={styles.percentageText}>{item.percentage}%</ThemedText>
                            </View>
                        </View>
                    ))
                )}
            </View>
        </View>
    );

    const renderActiveQuiz = () => {
        const question = questions[currentQuestionIndex];
        if (!question) return null;

        return (
            <View style={styles.quizContainer} key={currentQuestionIndex}>
                <View style={styles.quizHeader}>
                    <ThemedText style={styles.progressText}>
                        Question {currentQuestionIndex + 1}/{questions.length}
                    </ThemedText>
                    <Pressable delayPressIn={0} onPress={handleQuitQuiz} style={styles.quitButton}>
                        <Feather name="x-circle" size={24} color={JiguuColors.triangles} />
                    </Pressable>
                </View>

                <View style={styles.questionCard}>
                    <ParsedText style={styles.questionText}>{question.question}</ParsedText>
                </View>

                <View style={styles.optionsContainer}>
                    {question.options.map((option, index) => {
                        const currentLetter = String.fromCharCode(65 + index);
                        const isSelected = selectedIndex === index;
                        const isCorrect = question.correctAnswer === currentLetter;

                        return (
                            <Pressable
                                key={index}
                                delayPressIn={0}
                                style={[
                                    styles.optionButton,
                                    isSelected && styles.optionSelected,
                                    showAnswer && isCorrect && styles.optionCorrect,
                                    showAnswer && isSelected && !isCorrect && styles.optionWrong
                                ]}
                                onPress={() => handleOptionSelect(index)}
                                disabled={showAnswer}
                            >
                                <ParsedText 
                                    style={styles.optionText}
                                    tagsStyles={{ 
                                        div: { margin: 0, padding: 0, color: JiguuColors.textPrimary }, 
                                        span: { margin: 0, padding: 0, color: JiguuColors.textPrimary } 
                                    }}
                                >
                                    {option}
                                </ParsedText>
                                {showAnswer && isCorrect && <Feather name="check-circle" size={20} color="#FFF" />}
                                {showAnswer && isSelected && !isCorrect && <Feather name="x-circle" size={20} color="#FFF" />}
                            </Pressable>
                        );
                    })}
                </View>


            </View>
        );
    };

    const resetQuiz = () => {
        setViewState("menu");
        setScore(0);
        setCurrentQuestionIndex(0);
        setQuestions([]);
        setSelectedIndex(null);
        setShowAnswer(false);
    };

    const renderResult = () => {
        const percentage = Math.round((score / questions.length) * 100);
        let feedback = "Keep Practicing!";
        if (percentage >= 90) feedback = "Outstanding!";
        else if (percentage >= 70) feedback = "Great Job!";
        else if (percentage >= 50) feedback = "Good Effort!";

        return (
            <Modal
                transparent={true}
                visible={viewState === "result"}
                animationType="fade"
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.resultPopup}>
                        <Feather name="award" size={60} color={JiguuColors.accent2} style={{ marginBottom: 16 }} />
                        <ThemedText style={styles.resultTitle}>Quiz Completed!</ThemedText>

                        <View style={styles.resultScoreCard}>
                            <ThemedText style={[
                                styles.resultPercentageBig,
                                { color: percentage >= 50 ? JiguuColors.arithmetic : JiguuColors.triangles }
                            ]}>{percentage}%</ThemedText>
                            <ThemedText style={styles.resultScoreLabel}>TOTAL SCORE</ThemedText>
                            <ThemedText style={styles.resultScoreValue}>{score} / {questions.length}</ThemedText>
                        </View>

                        <ThemedText style={styles.resultFeedback}>{feedback}</ThemedText>

                        <Pressable delayPressIn={0} style={[styles.startButton, { backgroundColor: JiguuColors.accent2, width: '100%', borderRadius: BorderRadius.md }]} onPress={resetQuiz}>
                            <Feather name="refresh-cw" size={20} color="#FFF" style={{ marginRight: 8 }} />
                            <ThemedText style={styles.startButtonText}>Try Again</ThemedText>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        );
    };

    return (
        <ScreenWrapper showBackButton={viewState !== "active"} hideHomeButton>
            <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
                {viewState === "menu" && renderMenu()}
                {viewState === "active" && renderActiveQuiz()}
            </ScrollView>
            {viewState === "result" && renderResult()}
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        paddingHorizontal: Spacing.xl,
        paddingBottom: 120, // Increased to clear footer
        flexGrow: 1,
    },
    menuContainer: {
        paddingTop: Spacing.md,
    },
    menuHeader: {
        marginBottom: Spacing.xl,
        alignItems: "center",
    },
    title: {
        ...Typography.h2,
        textAlign: "center",
        marginBottom: Spacing.sm,
        fontFamily: "NotoSans_400Regular",
    },
    subtitle: {
        ...Typography.body,
        textAlign: "center",
        color: JiguuColors.textSecondary,
        fontFamily: "NotoSans_400Regular",
    },
    subjectButtonsContainer: {
        gap: Spacing.xl,
        marginBottom: Spacing["3xl"],
        width: "100%",
    },
    subjectButton: {
        width: "100%",
        borderRadius: BorderRadius.lg,
        overflow: "hidden",
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    startButton: {
        flexDirection: "row",
        paddingVertical: Spacing.lg,
        paddingHorizontal: Spacing.xl,
        alignItems: "center",
        justifyContent: "center",
    },
    startButtonText: {
        ...Typography.button,
        color: "#FFF",
        fontFamily: "NotoSans_400Regular",
    },
    historyContainer: {
        backgroundColor: JiguuColors.surface,
        borderRadius: BorderRadius.md,
        padding: Spacing.lg,
    },
    historyTitle: {
        ...Typography.h4,
        marginBottom: Spacing.lg,
        color: JiguuColors.textPrimary,
        fontFamily: "NotoSans_400Regular",
    },
    historyItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: Spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: JiguuColors.border,
    },
    historyScore: {
        ...Typography.h4,
        color: JiguuColors.textPrimary,
        fontFamily: "NotoSans_400Regular",
    },
    historyDate: {
        ...Typography.caption,
        color: JiguuColors.textSecondary,
        fontFamily: "NotoSans_400Regular",
    },
    percentageBadge: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 12,
    },
    percentageText: {
        ...Typography.caption,
        color: "#FFF",
        fontFamily: "NotoSans_400Regular",
    },
    emptyText: {
        ...Typography.body,
        color: JiguuColors.textSecondary,
        textAlign: "center",
        fontStyle: "italic",
        paddingVertical: Spacing.lg,
        fontFamily: "NotoSans_400Regular",
    },

    // Active Quiz Styles
    quizContainer: {
        flex: 1,
    },
    quizHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: Spacing.lg,
        paddingTop: Spacing.xl, // Added top padding to push down
    },
    progressText: {
        ...Typography.small,
        color: JiguuColors.textSecondary,
        fontFamily: "NotoSans_400Regular",
    },
    scoreBadge: {
        backgroundColor: JiguuColors.surfaceLight,
        paddingHorizontal: Spacing.md,
        paddingVertical: Spacing.xs,
        borderRadius: BorderRadius.full,
    },
    scoreText: {
        ...Typography.small,
        fontFamily: "NotoSans_400Regular",
        color: JiguuColors.accent1,
    },
    questionCard: {
        backgroundColor: JiguuColors.surface,
        borderRadius: BorderRadius.md,
        padding: Spacing.lg,
        marginBottom: Spacing.xl,
        borderLeftWidth: 4,
        borderLeftColor: JiguuColors.accent2,
    },
    chapterTag: {
        ...Typography.caption,
        color: JiguuColors.accent2,
        marginBottom: Spacing.sm,
        textTransform: "uppercase",
        letterSpacing: 1,
        fontFamily: "NotoSans_400Regular",
    },
    questionText: {
        ...Typography.h4,
        lineHeight: 28,
        color: JiguuColors.textPrimary,
        fontFamily: "NotoSans_400Regular",
    },
    optionsContainer: {
        gap: Spacing.md,
        marginBottom: Spacing.xl,
    },
    optionButton: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: BorderRadius.md,
        padding: Spacing.sm,
        borderWidth: 1,
        borderColor: JiguuColors.border,
    },
    optionSelected: {
        borderColor: JiguuColors.accent2,
        backgroundColor: JiguuColors.accent2 + "15",
    },
    optionCorrect: {
        borderColor: JiguuColors.arithmetic,
        backgroundColor: JiguuColors.arithmetic,
    },
    optionWrong: {
        borderColor: JiguuColors.triangles,
        backgroundColor: JiguuColors.triangles,
    },
    optionText: {
        ...Typography.body,
        color: JiguuColors.textPrimary,
        flex: 1,
        fontFamily: "NotoSans_400Regular",
    },
    footer: {
        marginTop: "auto",
    },
    actionButtonWrapper: {
        marginBottom: Spacing["5xl"],
    },
    actionButton: {
        paddingVertical: Spacing.md,
        borderRadius: BorderRadius.lg,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    disabledButton: {
        opacity: 0.5,
    },
    actionButtonText: {
        ...Typography.button,
        color: "#FFF",
        marginRight: Spacing.sm,
        fontFamily: "NotoSans_400Regular",
    },

    // Result Styles
    resultContainer: {
        alignItems: "center",
        paddingTop: Spacing.xl,
        flex: 1,
        width: '100%',
    },
    resultTitle: {
        ...Typography.h2,
        marginBottom: Spacing.lg,
        fontFamily: "NotoSans_400Regular",
    },
    resultScoreCard: {
        backgroundColor: JiguuColors.surfaceLight,
        padding: Spacing.lg,
        borderRadius: BorderRadius.md,
        alignItems: "center",
        width: "100%",
        marginBottom: Spacing.lg,
        borderWidth: 1,
        borderColor: JiguuColors.border,
    },
    resultPercentageBig: {
        fontSize: 48,
        fontFamily: "NotoSans_400Regular",
        includeFontPadding: false,
        lineHeight: 60,
    },
    resultScoreLabel: {
        ...Typography.small,
        color: JiguuColors.textSecondary,
        textTransform: "uppercase",
        fontFamily: "NotoSans_400Regular",
        marginTop: Spacing.sm,
    },
    resultScoreValue: {
        ...Typography.h3,
        fontFamily: "NotoSans_400Regular",
        color: JiguuColors.textPrimary,
        marginTop: Spacing.xs,
    },
    resultFeedback: {
        ...Typography.body,
        color: JiguuColors.textSecondary,
        marginBottom: Spacing.xl,
        fontStyle: "italic",
        fontFamily: "NotoSans_400Regular",
        textAlign: 'center',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.85)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: Spacing.xl,
    },
    resultPopup: {
        width: '100%',
        backgroundColor: JiguuColors.surface,
        borderRadius: BorderRadius.lg,
        padding: Spacing.xl,
        alignItems: 'center',
        elevation: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 15,
    },
    quitButton: {
        padding: Spacing.sm,
    },
});
