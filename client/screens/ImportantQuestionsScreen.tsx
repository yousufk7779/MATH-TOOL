
import React, { memo, useEffect, useState } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { EmptyState } from "@/components/EmptyState";
import { JiguuColors, Spacing, Typography, BorderRadius } from "@/constants/theme";
import { useSavedItems } from "@/context/SavedItemsContext";

const SavedItemCard = memo(({ item }: { item: any }) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemHeader}>
                <ThemedText style={styles.chapterTitle}>{item.chapterId.toUpperCase()}</ThemedText>
                <View style={styles.badge}>
                    <ThemedText style={styles.badgeText}>{item.type}</ThemedText>
                </View>
            </View>
            <View style={styles.panelContainer}>
                <ThemedText style={{ padding: Spacing.md, textAlign: "center" }}>
                    Content is currently being migrated to JSON format.
                </ThemedText>
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
