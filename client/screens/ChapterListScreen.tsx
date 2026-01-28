import React, { memo, useCallback } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ChapterCard } from "@/components/ChapterCard";
import { ThemedText } from "@/components/ThemedText";
import { EmptyState } from "@/components/EmptyState";
import { JiguuColors, Spacing, Typography } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { class10Chapters, Chapter } from "@/data/chapters";
import { isChapterAvailable } from "@/data/chapterContent";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Separator = memo(() => <View style={styles.separator} />);

function ChapterListScreen() {
  const navigation = useNavigation<NavigationProp>();

  const renderItem = useCallback(({ item }: { item: Chapter }) => {
    const available = isChapterAvailable(item.id);
    return (
      <ChapterCard
        testID={`chapter-card-${item.id}`}
        number={item.number}
        name={item.name}
        color={item.color}
        isAvailable={available}
        onPress={() =>
          navigation.navigate("Solution", {
            chapterId: item.id,
            chapterName: item.name,
          })
        }
      />
    );
  }, [navigation]);

  const renderHeader = useCallback(() => (
    <View style={styles.header}>
      <ThemedText style={[styles.title, { color: JiguuColors.quadraticEquations }]}>
        Class 10 - NCERT Chapters
      </ThemedText>
    </View>
  ), []);

  const renderEmptyState = useCallback(() => (
    <EmptyState
      title="No Chapters Found"
      message="No chapters available yet."
    />
  ), []);

  return (
    <ScreenWrapper showBackButton>
      <FlatList
        data={class10Chapters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[
          styles.listContent,
          class10Chapters.length === 0 ? styles.emptyContent : null,
        ]}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmptyState}
      />
    </ScreenWrapper>
  );
}

export default memo(ChapterListScreen);

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.lg,
    paddingBottom: 120,
  },
  emptyContent: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    marginBottom: Spacing.xl,
    alignItems: "center",
  },
  title: {
    ...Typography.h2,
  },
  separator: {
    height: Spacing.md,
  },
});
