
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

// Helper component (duplicate of BookmarksScreen one for now)
const SavedItemCard = memo(({ item }: { item: any }) => {
    const [htmlUri, setHtmlUri] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadContent = async () => {
            let exerciseId = null;
            const parts = item.id.split('_');
            if (parts.length >= 2) {
                exerciseId = parts[1];
            }

            if (exerciseId && item.chapterId) {
                let chId = item.chapterId;
                if (chId.includes('-')) {
                    chId = chId.split('-')[0];
                }
                const uri = ContentService.getSectionUri(chId, 'exercises');
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

function ImportantQuestionsScreen() {
    const { importantItems } = useSavedItems();

    return (
        <ScreenWrapper showBackButton>
            <View style={styles.header}>
                <ThemedText style={styles.title}>Important Questions</ThemedText>
            </View>
            <FlatList
                data={importantItems}
                renderItem={({ item }) => <SavedItemCard item={item} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={[
                    styles.listContent,
                    importantItems.length === 0 ? styles.emptyContent : null,
                ]}
                ListEmptyComponent={
                    <EmptyState
                        title="No Important Questions"
                        message="Mark questions as important to see them here."
                        icon="star"
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
        borderColor: '#FFAB00' // Gold border for important
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: Spacing.sm,
        backgroundColor: JiguuColors.surfaceLight,
        borderBottomWidth: 1,
        borderBottomColor: '#FFAB00'
    },
    chapterTitle: {
        ...Typography.small,
        fontWeight: 'bold',
        color: JiguuColors.textSecondary,
    },
    badge: {
        backgroundColor: '#FFAB00',
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

export default memo(ImportantQuestionsScreen);
