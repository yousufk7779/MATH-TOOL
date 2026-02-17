
import React, { memo, useEffect, useState } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { EmptyState } from "@/components/EmptyState";
import { HTMLPanelRenderer } from "@/components/HTMLPanelRenderer";
import { JiguuColors, Spacing, Typography, BorderRadius } from "@/constants/theme";
import { useSavedItems } from "@/context/SavedItemsContext";
import { ContentService } from "@/services/ContentService";

// Helper component to load and render a single bookmarked item
const BookmarkItem = memo(({ item }: { item: any }) => {
    const [htmlUri, setHtmlUri] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadContent = async () => {
            // Parse ID: ch3_ex3.1_q1 -> chapterId=ch3, exerciseId=ex3.1
            // OR checks generic IDs if needed.
            // But we have item.chapterId stored.
            // item.id is the targetId (e.g. ch3_ex3.1_q1)

            // We need to find which exercise this ID belongs to.
            // If the ID format is standardized as chX_exY_qZ, we can extract 'exY'.

            let exerciseId = null;
            const parts = item.id.split('_');
            if (parts.length >= 2) {
                // heuristic: 2nd part is usually exercise ID or similar
                // e.g. ch3_ex3.1_q1 -> ex3.1
                // e.g. ch3_mcqs_q1 -> mcqs
                // e.g. ch3_eg_q1 -> eg
                exerciseId = parts[1];
            }

            if (exerciseId && item.chapterId) {
                // Handle legacy chapter IDs if necessary (e.g. ch3-linear -> ch3)
                let chId = item.chapterId;
                if (chId.includes('-')) {
                    chId = chId.split('-')[0]; // simple fallback
                }

                const uri = await ContentService.getHtmlUri(chId, exerciseId);
                setHtmlUri(uri);
            }
            setLoading(false);
        };
        loadContent();
    }, [item.id, item.chapterId]);

    if (loading) return <ActivityIndicator size="small" />;
    if (!htmlUri) return <ThemedText>Content not found</ThemedText>;

    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemHeader}>
                <ThemedText style={styles.chapterTitle}>{item.chapterId.toUpperCase()}</ThemedText>
                <View style={styles.badge}>
                    <ThemedText style={styles.badgeText}>{item.type}</ThemedText>
                </View>
            </View>
            <View style={styles.panelContainer}>
                <HTMLPanelRenderer
                    htmlUri={htmlUri}
                    targetId={item.id}
                />
            </View>
        </View>
    );
});

function BookmarksScreen() {
    const { bookmarks } = useSavedItems();
    const navigation = useNavigation();

    return (
        <ScreenWrapper showBackButton>
            <View style={styles.header}>
                <ThemedText style={styles.title}>Bookmarks</ThemedText>
            </View>
            <FlatList
                data={bookmarks}
                renderItem={({ item }) => <BookmarkItem item={item} />}
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
        paddingHorizontal: Spacing.md,
        paddingBottom: 100,
    },
    emptyContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    itemContainer: {
        marginBottom: Spacing.lg,
        backgroundColor: JiguuColors.surface,
        borderRadius: BorderRadius.md,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: JiguuColors.border
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: Spacing.sm,
        backgroundColor: JiguuColors.surfaceLight,
        borderBottomWidth: 1,
        borderBottomColor: JiguuColors.border
    },
    chapterTitle: {
        ...Typography.small,
        fontWeight: 'bold',
        color: JiguuColors.textSecondary,
    },
    badge: {
        backgroundColor: JiguuColors.accent1,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },
    badgeText: {
        ...Typography.caption,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    panelContainer: {
        minHeight: 100,
        backgroundColor: '#fff'
    }
});

export default memo(BookmarksScreen);
