import React, { memo } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { EmptyState } from "@/components/EmptyState";
import { JiguuColors, Spacing, Typography } from "@/constants/theme";

function QuickNotesScreen() {
  return (
    <ScreenWrapper showBackButton>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <ThemedText style={[styles.title, { color: JiguuColors.quickNotes }]}>
            Quick Notes
          </ThemedText>
        </View>

        <EmptyState
          title="Coming Soon"
          message="Quick notes feature will be available in future updates."
          icon="edit-3"
        />
      </ScrollView>
    </ScreenWrapper>
  );
}

export default memo(QuickNotesScreen);

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
