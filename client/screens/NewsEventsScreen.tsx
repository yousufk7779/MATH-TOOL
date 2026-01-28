import React, { memo } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { EmptyState } from "@/components/EmptyState";
import { JiguuColors, Spacing, Typography } from "@/constants/theme";

function NewsEventsScreen() {
  return (
    <ScreenWrapper showBackButton>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <ThemedText style={[styles.title, { color: JiguuColors.newsEvents }]}>
            News & Events
          </ThemedText>
        </View>

        <EmptyState
          title="Coming Soon"
          message="News and events will be available in future updates."
          icon="bell"
        />
      </ScrollView>
    </ScreenWrapper>
  );
}

export default memo(NewsEventsScreen);

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
  title: {
    ...Typography.h2,
  },
});
