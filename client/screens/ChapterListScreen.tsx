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
import { class10Chapters, Chapter, otherSubjectsData, getChapterGradient } from "@/data/chapters";

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
    const available = !item.locked;
    const chapterGradient = getChapterGradient(item.id);

    return (
      <ChapterCard
        testID={`chapter-card-${item.id}`}
        number={item.number}
        name={item.name}
        colors={chapterGradient}
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



  return (
    <ScreenWrapper showBackButton hideHomeButton>
      <FlatList
        data={displayChapters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[
          styles.listContent,
          displayChapters.length === 0 ? styles.emptyContent : null,
          displayChapters.length > 0 && displayChapters.length < 7 ? styles.centeredContent : null,
        ]}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={Separator}
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
    paddingBottom: 80,
    flexGrow: 1,
  },
  centeredContent: {
    justifyContent: 'center',
  },
  emptyContent: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    marginBottom: Spacing.md,
  },

  separator: {
    height: Spacing.md,
  },
});
