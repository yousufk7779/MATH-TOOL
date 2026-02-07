import React, { memo } from "react";
import { StyleSheet, View, FlatList, Pressable, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";

import { useSearch } from "@/context/SearchContext";
import { useSavedItems } from "@/context/SavedItemsContext";
import { SearchResult } from "@/utils/search-engine";
import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, BorderRadius, Typography } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const SearchResults = memo(function SearchResults() {
    const { results, query, setQuery } = useSearch();
    const { isBookmarked, isImportant } = useSavedItems();
    const navigation = useNavigation<NavigationProp>();

    if (!query || results.length === 0) return null;

    const handlePress = (item: SearchResult) => {
        Keyboard.dismiss();
        setTimeout(() => {
            setQuery(""); // Close search
            // @ts-ignore
            navigation.navigate(item.navigationParams.screen, item.navigationParams.params);
        }, 50);
    };

    const getIcon = (type: string) => {
        switch (type) {
            case "chapter": return "book";
            case "exercise": return "edit-3";
            case "question": return "help-circle";
            case "theorem": return "award";
            case "definition": return "bookmark";
            case "formula": return "codepen";
            default: return "search";
        }
    }

    const getColor = (type: string) => {
        switch (type) {
            case "chapter": return JiguuColors.accent1;
            case "exercise": return JiguuColors.accent2;
            case "question": return JiguuColors.textSecondary;
            case "theorem": return JiguuColors.accent3;
            default: return JiguuColors.textSecondary;
        }
    }

    const renderItem = ({ item }: { item: SearchResult }) => {
        const bookmarked = isBookmarked(item.id);
        const important = isImportant(item.id);

        return (
            <Pressable style={styles.item} onPress={() => handlePress(item)}>
                <View style={[styles.iconContainer, { backgroundColor: getColor(item.type) + "20" }]}>
                    <Feather name={getIcon(item.type) as any} size={18} color={getColor(item.type)} />
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.titleRow}>
                        <ThemedText style={styles.title} numberOfLines={1}>{item.title}</ThemedText>
                        {bookmarked && <Feather name="bookmark" size={12} color={JiguuColors.accent1} style={styles.statusIcon} />}
                        {important && <Feather name="star" size={12} color="#FFAB00" style={styles.statusIcon} />}
                    </View>
                    <ThemedText style={styles.subtitle} numberOfLines={1}>{item.subtitle}</ThemedText>
                </View>
                <Feather name="chevron-right" size={16} color={JiguuColors.textSecondary} />
            </Pressable>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={results}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                keyboardShouldPersistTaps="always"
                contentContainerStyle={styles.listContent}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: "100%", // Position right below the header
        marginTop: Spacing.sm,
        left: 0,
        right: 0,
        backgroundColor: JiguuColors.surface,
        borderRadius: BorderRadius.md,
        maxHeight: 400,
        zIndex: 1000,
        elevation: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        borderWidth: 1,
        borderColor: JiguuColors.border,
    },
    listContent: {
        paddingVertical: Spacing.xs,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        padding: Spacing.md,
    },
    iconContainer: {
        width: 36,
        height: 36,
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center",
        marginRight: Spacing.md,
    },
    textContainer: {
        flex: 1,
        marginRight: Spacing.sm,
    },
    title: {
        ...Typography.body,
        color: JiguuColors.textPrimary,
        flexShrink: 1,
        fontFamily: "Kalam_700Bold",
    },
    titleRow: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    statusIcon: {
        marginLeft: Spacing.xs,
    },
    subtitle: {
        ...Typography.caption,
        color: JiguuColors.textSecondary,
        fontFamily: "Kalam_400Regular",
    },
    separator: {
        height: 1,
        backgroundColor: JiguuColors.border,
        marginLeft: 60, // Align with text
    }
});
