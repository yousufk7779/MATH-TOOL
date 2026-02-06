import React, { memo } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { EmptyState } from "@/components/EmptyState";
import QuestionCard from "@/components/solution/QuestionCard";
import TheoremCard from "@/components/solution/TheoremCard";
import { JiguuColors, Spacing, Typography } from "@/constants/theme";
import { useSavedItems } from "@/context/SavedItemsContext";
import { getChapterContent } from "@/data/chapterContent";

function BookmarksScreen() {
    const { bookmarks } = useSavedItems();
    const navigation = useNavigation();

    const renderItem = ({ item }: { item: any }) => {
        // We need to fetch the actual content based on the ID.
        // This is a bit inefficient if we have many bookmarks, but works for limited set.
        // Ideally SavedItem should store enough data or we have a quick lookup map.
        // Since we have getChapterContent(chapterId), we can look it up.

        const content = getChapterContent(item.chapterId);
        if (!content) return null;

        if (item.type === "question") {
            // Find within exercises
            for (const ex of content.exercises) {
                const q = ex.questions.find(q => q.id === item.id);
                if (q) {
                    return (
                        <View style={styles.itemContainer}>
                            <ThemedText style={styles.chapterTitle}>{content.title}</ThemedText>
                            <QuestionCard question={q} accentColor={JiguuColors.accent1} chapterId={item.chapterId} />
                        </View>
                    );
                }
            }
            // Check examples (sometimes marked as question type if ambiguous, but let's check examples too)
            const ex = content.examples.find(e => e.id === item.id);
            if (ex) {
                return (
                    <View style={styles.itemContainer}>
                        <ThemedText style={styles.chapterTitle}>{content.title} - Example</ThemedText>
                        <QuestionCard
                            question={{
                                id: ex.id,
                                number: ex.number,
                                question: ex.question,
                                solution: ex.solution,
                                answer: ex.answer
                            }}
                            accentColor={JiguuColors.accent1}
                            chapterId={item.chapterId}
                        />
                    </View>
                );
            }
        } else if (item.type === "theorem") {
            const t = content.theorems?.find(t => t.id === item.id);
            if (t) {
                return (
                    <View style={styles.itemContainer}>
                        <ThemedText style={styles.chapterTitle}>{content.title}</ThemedText>
                        <TheoremCard theorem={t} chapterId={item.chapterId} />
                    </View>
                );
            }
        } else if (item.type === "example") {
            const ex = content.examples.find(e => e.id === item.id);
            if (ex) {
                return (
                    <View style={styles.itemContainer}>
                        <ThemedText style={styles.chapterTitle}>{content.title} - Example</ThemedText>
                        <QuestionCard
                            question={{
                                id: ex.id,
                                number: ex.number,
                                question: ex.question,
                                solution: ex.solution,
                                answer: ex.answer
                            }}
                            accentColor={JiguuColors.accent1}
                            chapterId={item.chapterId}
                        />
                    </View>
                );
            }
        }

        return null;
    };

    return (
        <ScreenWrapper showBackButton>
            <View style={styles.header}>
                <ThemedText style={styles.title}>Bookmarks</ThemedText>
            </View>
            <FlatList
                data={bookmarks}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={[
                    styles.listContent,
                    bookmarks.length === 0 ? styles.emptyContent : null,
                ]}
                ListEmptyComponent={
                    <EmptyState
                        title="No Bookmarks"
                        message="Items you bookmark will appear here."
                        icon="bookmark"
                    />
                }
            />
        </ScreenWrapper>
    );
}

export default memo(BookmarksScreen);

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: Spacing.xl,
        paddingTop: Spacing.lg,
        paddingBottom: Spacing.md,
    },
    title: {
        ...Typography.h2,
        color: JiguuColors.textPrimary,
    },
    listContent: {
        paddingHorizontal: Spacing.xl,
        paddingBottom: 100,
    },
    emptyContent: {
        flex: 1,
        justifyContent: "center",
    },
    itemContainer: {
        marginBottom: Spacing.lg,
    },
    chapterTitle: {
        ...Typography.small,
        color: JiguuColors.textSecondary,
        marginBottom: Spacing.xs,
        fontFamily: "Nunito_600SemiBold",
    },
});
