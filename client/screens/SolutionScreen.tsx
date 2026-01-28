import React, { memo } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { EmptyState } from "@/components/EmptyState";
import { JiguuColors, Spacing, Typography } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { getChapter } from "@/data/chapters";

type SolutionRouteProp = RouteProp<RootStackParamList, "Solution">;

function SolutionScreen() {
  const route = useRoute<SolutionRouteProp>();
  const { chapterId, chapterName } = route.params;
  
  const chapter = getChapter(chapterId);

  return (
    <ScreenWrapper showBackButton>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <ThemedText style={[styles.chapterNumber, { color: chapter?.color || JiguuColors.quadraticEquations }]}>
            Chapter {chapter?.number || ""}
          </ThemedText>
          <ThemedText style={styles.title}>
            {chapterName}
          </ThemedText>
        </View>

        <EmptyState
          title="Coming Soon"
          message="Step-by-step solutions for this chapter will be added soon."
          icon="book-open"
        />
      </ScrollView>
    </ScreenWrapper>
  );
}

export default memo(SolutionScreen);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.lg,
    paddingBottom: 120,
    flexGrow: 1,
  },
  header: {
    marginBottom: Spacing["2xl"],
    alignItems: "center",
  },
  chapterNumber: {
    ...Typography.small,
    fontWeight: "700",
    marginBottom: Spacing.xs,
  },
  title: {
    ...Typography.h3,
    color: JiguuColors.textPrimary,
    textAlign: "center",
  },
});
