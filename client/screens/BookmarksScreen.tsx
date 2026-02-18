
import React, { memo } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { EmptyState } from "@/components/EmptyState";
import { JiguuColors, Spacing, Typography, BorderRadius } from "@/constants/theme";
import { useSavedItems } from "@/context/SavedItemsContext";
// import { ContentService } from "@/services/ContentService"; // Removed

// Helper component to load and render a single bookmarked item
const BookmarkItem = memo(({ item }: { item: any }) => {
    // Placeholder logic since we removed HTML content service
    // In the future, we will look up the question in chapterContent.ts using item.id and item.chapterId

    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemHeader}>
                <ThemedText style={styles.chapterTitle}>{item.chapterId.toUpperCase()}</ThemedText>
                <View style={styles.badge}>
                    <ThemedText style={styles.badgeText}>{item.type}</ThemedText>
                </View>
            </View>
            <View style={styles.panelContainer}>
                <ThemedText style={{ padding: 20, textAlign: 'center', color: JiguuColors.textSecondary }}>
                    Bookmark ID: {item.id} (Content loading pending migration)
                </ThemedText>
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
        minHeight: 50,
        backgroundColor: JiguuColors.surface
    }
});

export default memo(BookmarksScreen);
