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
import {
  class10Chapters,
  Chapter,
  otherSubjectsData,
  getChapterGradient,
} from "@/data/chapters";
import { getHomeRoute } from "@/utils/navigation-utils";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Separator = memo(() => <View style={styles.separator} />);

function ChapterListScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProp<RootStackParamList, "ChapterList">>();

  const subject = route.params?.subject || "Mathematics";
  const topic = route.params?.topic || "";
  const className =
    route.params?.className ||
    (subject.includes("Class") ? `Class ${subject.split(" ")[1]}` : "Class 10");

  let displayChapters: Chapter[] = [];
  if (subject === "Mathematics") {
    displayChapters = class10Chapters;
  } else if (
    subject &&
    topic &&
    otherSubjectsData[subject] &&
    otherSubjectsData[subject][topic]
  ) {
    displayChapters = otherSubjectsData[subject][topic];
  }

  const renderItem = useCallback(
    ({ item }: { item: Chapter }) => {
      const available = !item.locked;
      const chapterGradient = getChapterGradient(item.id);

      const isPolSciencePartA = item.id === "c12-pol-1";
      const isPolSciencePartB = item.id === "c12-pol-8";

      return (
        <View>
          {isPolSciencePartA && (
            <View style={styles.sectionBanner}>
              <View style={[styles.sectionBadge, styles.badgePartA]}>
                <ThemedText style={[styles.sectionBadgeText, styles.badgeTextPartA]}>
                  PART A • 40 MARKS
                </ThemedText>
              </View>
              <ThemedText style={styles.sectionBannerTitle}>
                Contemporary World Politics
              </ThemedText>
            </View>
          )}

          {isPolSciencePartB && (
            <View style={[styles.sectionBanner, styles.sectionBannerPartB]}>
              <View style={[styles.sectionBadge, styles.badgePartB]}>
                <ThemedText style={[styles.sectionBadgeText, styles.badgeTextPartB]}>
                  PART B • 40 MARKS
                </ThemedText>
              </View>
              <ThemedText style={styles.sectionBannerTitle}>
                Politics in India since Independence
              </ThemedText>
            </View>
          )}

          <ChapterCard
            testID={`chapter-card-${item.id}`}
            number={item.number}
            name={item.name}
            colors={chapterGradient}
            isAvailable={available}
            marks={item.marks}
            onPress={() => {
              console.log("Chapter clicked:", item.id);
              navigation.navigate("Solution", {
                chapterId: item.id,
                chapterName: item.name,
                className: className,
              });
            }}
          />
        </View>
      );
    },
    [navigation, subject, className],
  );

  const displayTopic =
    topic === "Civics" &&
    (className === "Class 10" ||
      className === "Class 9" ||
      className === "Class 8")
      ? "Political Science"
      : topic;

  const renderEmptyState = useCallback(
    () => (
      <EmptyState
        title={displayTopic ? `${displayTopic} Chapters` : `${subject} Chapters`}
        message="Content for this subject is coming incredibly soon in beautiful JSON format!"
      />
    ),
    [subject, displayTopic],
  );

  const homeRoute = getHomeRoute(className);

  return (
    <ScreenWrapper showBackButton hideHomeButton homeRoute={homeRoute}>
      <FlatList
        data={displayChapters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[
          styles.listContent,
          displayChapters.length === 0 ? styles.emptyContent : null,
          displayChapters.length > 0 && displayChapters.length < 7
            ? styles.centeredContent
            : null,
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
    justifyContent: "center",
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
  sectionBanner: {
    backgroundColor: "rgba(15, 23, 42, 0.75)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.12)",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 14,
  },
  sectionBannerPartB: {
    marginTop: 22,
  },
  sectionBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
    marginBottom: 6,
  },
  badgePartA: {
    backgroundColor: "rgba(0, 198, 255, 0.15)",
    borderColor: "rgba(0, 198, 255, 0.5)",
  },
  badgePartB: {
    backgroundColor: "rgba(255, 109, 0, 0.15)",
    borderColor: "rgba(255, 109, 0, 0.5)",
  },
  sectionBadgeText: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  badgeTextPartA: {
    color: "#00E5FF",
  },
  badgeTextPartB: {
    color: "#FFA000",
  },
  sectionBannerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
    letterSpacing: 0.2,
  },
});
