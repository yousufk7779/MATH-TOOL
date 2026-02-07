import React, { memo, useState, useCallback, useEffect } from "react";
import { StyleSheet, View, ScrollView, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, Typography, BorderRadius } from "@/constants/theme";
import { generateQuiz, QuizQuestion } from "@/utils/quiz-engine";
import { saveQuizResult, getQuizHistory, QuizResult } from "@/utils/quiz-storage";

type QuizState = "menu" | "active" | "result";

export default function QuizScreen() {
    const navigation = useNavigation();
    const [viewState, setViewState] = useState<QuizState>("menu");
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [history, setHistory] = useState<QuizResult[]>([]);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [showAnswer, setShowAnswer] = useState(false);

    // Load history on mount
    useEffect(() => {
        loadHistory();
    }, []);

    const loadHistory = async () => {
        const data = await getQuizHistory();
        setHistory(data);
    };

    const startQuiz = useCallback(() => {
        const newQuestions = generateQuiz(10); // Generate 10 random questions
        if (newQuestions.length === 0) {
            Alert.alert("Error", "No questions available to generate a quiz.");
            return;
        }
        setQuestions(newQuestions);
        setCurrentQuestionIndex(0);
        setScore(0);
        setViewState("active");
        setSelectedOption(null);
        setShowAnswer(false);
    }, []);

    const handleOptionSelect = (optionIndex: number) => {
        if (showAnswer) return; // Prevent changing after answer shown

        // Convert index 0->a, 1->b etc if needed, but data uses a,b,c directly usually or raw strings
        // Our MCQ data structure has options string[] and correctAnswer string (like 'a', 'b' or value?)
        // Checking data/chapterContent.ts: options: string[], correctAnswer: "b" (letter)

        const letter = String.fromCharCode(97 + optionIndex); // 0->a, 1->b
        setSelectedOption(letter);
    };

    const submitAnswer = () => {
        if (!selectedOption) return;

        setShowAnswer(true);
        const currentQ = questions[currentQuestionIndex];
        if (selectedOption === currentQ.correctAnswer) {
            setScore(s => s + 1);
        }
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(i => i + 1);
            setSelectedOption(null);
            setShowAnswer(false);
        } else {
            finishQuiz();
        }
    };

    const finishQuiz = async () => {
        // Calculate final score increment if last answer was correct (already handled in submitAnswer)
        // Actually submitAnswer updates score immediately when revealing.

        // We need to wait for state update? No, setScore is scheduled but we can use functional value or just save what we have? 
        // Wait, submitAnswer is called BEFORE nextQuestion/finish.
        // So score is up to date for the next render.

        // Just to be safe, we'll save in effect or pass current score.
        // Ideally we should use the functional update result but here we can just rely on the score variable in next render
        // logic: submit -> show answer -> (user clicks next) -> finish.

        // Correct.

        const finalScore = score; // Use current state (updated by submitAnswer)
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
                <ThemedText style={styles.title}>Practice Quiz</ThemedText>
                <ThemedText style={styles.subtitle}>
                    Test your knowledge with random questions from all chapters.
                </ThemedText>
            </View>

            <Pressable style={styles.startButton} onPress={startQuiz}>
                <ThemedText style={styles.startButtonText}>Start New Quiz</ThemedText>
                <Feather name="play" size={20} color="#FFF" />
            </Pressable>

            <View style={styles.historyContainer}>
                <ThemedText style={styles.historyTitle}>Recent Performance</ThemedText>
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
                    <View style={styles.scoreBadge}>
                        <ThemedText style={styles.scoreText}>Score: {score}</ThemedText>
                    </View>
                    <Pressable onPress={handleQuitQuiz} style={styles.quitButton}>
                        <Feather name="x-circle" size={24} color={JiguuColors.triangles} />
                    </Pressable>
                </View>

                <View style={styles.questionCard}>
                    <ThemedText style={styles.questionText}>{question.question}</ThemedText>
                </View>

                <View style={styles.optionsContainer}>
                    {question.options.map((option, index) => {
                        const letter = String.fromCharCode(97 + index);
                        const isSelected = selectedOption === letter;
                        const isCorrect = question.correctAnswer === letter;

                        return (
                            <Pressable
                                key={index}
                                style={[
                                    styles.optionButton,
                                    isSelected && styles.optionSelected,
                                    showAnswer && isCorrect && styles.optionCorrect,
                                    showAnswer && isSelected && !isCorrect && styles.optionWrong
                                ]}
                                onPress={() => handleOptionSelect(index)}
                                disabled={showAnswer}
                            >
                                <View style={styles.optionLetter}>
                                    <ThemedText style={styles.optionLetterText}>{letter.toUpperCase()}</ThemedText>
                                </View>
                                <ThemedText style={styles.optionText}>{option}</ThemedText>
                                {showAnswer && isCorrect && <Feather name="check-circle" size={20} color="#FFF" />}
                                {showAnswer && isSelected && !isCorrect && <Feather name="x-circle" size={20} color="#FFF" />}
                            </Pressable>
                        );
                    })}
                </View>

                <View style={styles.footer}>
                    {!showAnswer ? (
                        <Pressable
                            style={[styles.actionButton, !selectedOption && styles.disabledButton]}
                            onPress={submitAnswer}
                            disabled={!selectedOption}
                        >
                            <ThemedText style={styles.actionButtonText}>Submit Answer</ThemedText>
                        </Pressable>
                    ) : (
                        <Pressable style={styles.actionButton} onPress={nextQuestion}>
                            <ThemedText style={styles.actionButtonText}>
                                {currentQuestionIndex === questions.length - 1 ? "Finish Quiz" : "Next Question"}
                            </ThemedText>
                            <Feather name="arrow-right" size={20} color="#FFF" />
                        </Pressable>
                    )}
                </View>
            </View>
        );
    };

    const renderResult = () => {
        const percentage = Math.round((score / questions.length) * 100);
        let feedback = "Keep Practicing!";
        if (percentage >= 90) feedback = "Outstanding!";
        else if (percentage >= 70) feedback = "Great Job!";
        else if (percentage >= 50) feedback = "Good Effort!";

        return (
            <View style={styles.resultContainer}>
                <Feather name="award" size={64} color={JiguuColors.accent2} style={{ marginBottom: 24 }} />
                <ThemedText style={styles.resultTitle}>Quiz Completed</ThemedText>

                <View style={styles.resultScoreCard}>
                    <ThemedText style={styles.resultScoreLabel}>Your Score</ThemedText>
                    <ThemedText style={styles.resultScoreValue}>{score} / {questions.length}</ThemedText>
                    <ThemedText style={[
                        styles.resultPercentage,
                        { color: percentage >= 50 ? JiguuColors.arithmetic : JiguuColors.triangles }
                    ]}>{percentage}%</ThemedText>
                </View>

                <ThemedText style={styles.resultFeedback}>{feedback}</ThemedText>

                <Pressable style={styles.startButton} onPress={() => setViewState("menu")}>
                    <ThemedText style={styles.startButtonText}>Back to Menu</ThemedText>
                </Pressable>
            </View>
        );
    };

    return (
        <ScreenWrapper showBackButton={viewState !== "active"}>
            <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
                {viewState === "menu" && renderMenu()}
                {viewState === "active" && renderActiveQuiz()}
                {viewState === "result" && renderResult()}
            </ScrollView>
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
        fontFamily: "Kalam_700Bold",
    },
    subtitle: {
        ...Typography.body,
        textAlign: "center",
        color: JiguuColors.textSecondary,
        fontFamily: "Kalam_400Regular",
    },
    startButton: {
        flexDirection: "row",
        backgroundColor: JiguuColors.accent2,
        paddingVertical: Spacing.lg,
        paddingHorizontal: Spacing.xl,
        borderRadius: BorderRadius.lg,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: Spacing["2xl"],
        shadowColor: JiguuColors.accent2,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    startButtonText: {
        ...Typography.button,
        color: "#FFF",
        marginRight: Spacing.sm,
        fontFamily: "Kalam_700Bold",
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
        fontFamily: "Kalam_700Bold",
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
        fontFamily: "Kalam_700Bold",
    },
    historyDate: {
        ...Typography.caption,
        color: JiguuColors.textSecondary,
        fontFamily: "Kalam_400Regular",
    },
    percentageBadge: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 12,
    },
    percentageText: {
        ...Typography.caption,
        color: "#FFF",
        fontFamily: "Kalam_700Bold",
    },
    emptyText: {
        ...Typography.body,
        color: JiguuColors.textSecondary,
        textAlign: "center",
        fontStyle: "italic",
        paddingVertical: Spacing.lg,
        fontFamily: "Kalam_400Regular",
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
        fontFamily: "Kalam_700Bold",
    },
    scoreBadge: {
        backgroundColor: JiguuColors.surfaceLight,
        paddingHorizontal: Spacing.md,
        paddingVertical: Spacing.xs,
        borderRadius: BorderRadius.full,
    },
    scoreText: {
        ...Typography.small,
        fontFamily: "Kalam_700Bold",
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
        fontFamily: "Kalam_700Bold",
    },
    questionText: {
        ...Typography.h4,
        lineHeight: 28,
        color: JiguuColors.textPrimary,
        fontFamily: "Kalam_400Regular",
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
    optionLetter: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: JiguuColors.background,
        alignItems: "center",
        justifyContent: "center",
        marginRight: Spacing.md,
    },
    optionLetterText: {
        ...Typography.small,
        fontFamily: "Kalam_700Bold",
        color: JiguuColors.textSecondary,
    },
    optionText: {
        ...Typography.body,
        color: JiguuColors.textPrimary,
        flex: 1,
        fontFamily: "Kalam_400Regular",
    },
    footer: {
        marginTop: "auto",
    },
    actionButton: {
        backgroundColor: JiguuColors.accent2, // Changed to Pink
        paddingVertical: Spacing.md,
        borderRadius: BorderRadius.lg,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: Spacing["5xl"], // Increased further to float button up
    },
    disabledButton: {
        opacity: 0.5,
    },
    actionButtonText: {
        ...Typography.button,
        color: "#FFF",
        marginRight: Spacing.sm,
        fontFamily: "Kalam_700Bold",
    },

    // Result Styles
    resultContainer: {
        alignItems: "center",
        paddingTop: Spacing.xl, // Reduced top padding
        flex: 1,
    },
    resultTitle: {
        ...Typography.h2,
        marginBottom: Spacing.xl,
        fontFamily: "Kalam_700Bold",
    },
    resultScoreCard: {
        backgroundColor: JiguuColors.surface,
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.sm, // Tighter vertical padding
        borderRadius: BorderRadius.xl,
        alignItems: "center",
        width: "100%",
        marginBottom: Spacing.lg,
        // Removed minHeight to let it shrink to fit content
        justifyContent: 'center',
    },
    resultScoreLabel: {
        ...Typography.small,
        color: JiguuColors.textSecondary,
        textTransform: "uppercase",
        fontFamily: "Kalam_700Bold",
    },
    resultScoreValue: {
        fontSize: 42, // Slightly smaller
        lineHeight: 50,
        fontFamily: "Kalam_700Bold",
        color: JiguuColors.textPrimary,
        marginVertical: Spacing.sm,
        paddingVertical: 0,
    },
    resultPercentage: {
        ...Typography.h3,
        fontFamily: "Kalam_700Bold",
    },
    resultFeedback: {
        ...Typography.h4,
        color: JiguuColors.textSecondary,
        marginBottom: Spacing["3xl"],
        fontStyle: "italic",
        fontFamily: "Kalam_700Bold",
    },
    quitButton: {
        padding: Spacing.sm,
    },
});
