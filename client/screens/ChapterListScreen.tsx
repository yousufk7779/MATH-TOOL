import React, { memo, useCallback } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ChapterCard } from "@/components/ChapterCard";
import { ColorButton } from "@/components/ColorButton";
import { ThemedText } from "@/components/ThemedText";
import { EmptyState } from "@/components/EmptyState";
import { JiguuColors, Spacing, Typography } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { class10Chapters, Chapter, otherSubjectsData } from "@/data/chapters";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Separator = memo(() => <View style={styles.separator} />);

function ChapterListScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProp<RootStackParamList, "ChapterList">>();

  const subject = route.params?.subject || "Mathematics";
  const topic = route.params?.topic || "";

  let displayChapters: Chapter[] = [];
  if (subject === "Mathematics") {
    displayChapters = class10Chapters;
  } else if (subject && topic && otherSubjectsData[subject] && otherSubjectsData[subject][topic]) {
    displayChapters = otherSubjectsData[subject][topic];
  }

  const renderItem = useCallback(({ item }: { item: Chapter }) => {
    // Assuming all chapters in the list are available if they are in the registry/list.
    // Or we can check if they are in chapterRegistry?
    // For now, let's assume available.
    const available = !item.locked;
    return (
      <ChapterCard
        testID={`chapter-card-${item.id}`}
        number={item.number}
        name={item.name}
        color={item.color}
        isAvailable={available}
        onPress={() => {
          console.log("Chapter clicked:", item.id);
          navigation.navigate("Solution", {
            chapterId: item.id,
            chapterName: item.name,
          });
        }}
      />
    );
  }, [navigation]);



  const renderEmptyState = useCallback(() => (
    <EmptyState
      title={topic ? `${topic} Chapters` : `${subject} Chapters`}
      message="Content for this subject is coming incredibly soon in beautiful JSON format!"
    />
  ), [subject, topic]);

  const renderHeader = useCallback(() => (
    <View style={styles.actionButtons}>
      <View style={styles.actionButtonWrapper}>
        <ColorButton
          testID="button-bookmarks"
          title="BOOKMARKS"
          color={JiguuColors.accent2}
          onPress={() => navigation.navigate("Bookmarks")}
        />
      </View>
      <View style={styles.actionButtonWrapper}>
        <ColorButton
          testID="button-important"
          title="IMPORTANT"
          color={JiguuColors.accent3}
          onPress={() => navigation.navigate("ImportantQuestions")}
        />
      </View>
    </View>
  ), [navigation]);

  return (
    <ScreenWrapper showBackButton>
      <FlatList
        data={displayChapters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[
          styles.listContent,
          displayChapters.length === 0 ? styles.emptyContent : null,
        ]}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={Separator}
        ListEmptyComponent={renderEmptyState}
        ListHeaderComponent={renderHeader}
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
    marginBottom: Spacing.md,
  },
  actionButtons: {
    flexDirection: "row",
    gap: Spacing.md,
    marginBottom: Spacing.md,
  },
  actionButtonWrapper: {
    flex: 1,
  },
  separator: {
    height: Spacing.md,
  },
});
