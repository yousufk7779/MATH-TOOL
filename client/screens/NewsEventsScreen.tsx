import React, { memo } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { EmptyState } from "@/components/EmptyState";
import { JiguuColors, Spacing, Typography, BorderRadius } from "@/constants/theme";

const NEWS_DATA = [
  {
    id: "1",
    title: "CBSE Class 10 Datesheet Released",
    date: "Feb 5, 2026",
    summary: "The final datesheet for Class 10 board exams has been announced. Mathematics exam is scheduled for March 12th.",
    type: "news"
  },
  {
    id: "2",
    title: "New Chapter Added: Statistics",
    date: "Feb 1, 2026",
    summary: "We have updated the app with complete solutions and practice questions for the Statistics chapter.",
    type: "update"
  },
  {
    id: "3",
    title: "Math Olympiad Registration",
    date: "Jan 25, 2026",
    summary: "Registration for the National Math Olympiad is now open. Check the official website for details.",
    type: "event"
  },
];

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

        {NEWS_DATA.map((item) => (
          <View key={item.id} style={styles.newsCard}>
            <View style={styles.cardHeader}>
              <ThemedText style={styles.newsType}>{item.type.toUpperCase()}</ThemedText>
              <ThemedText style={styles.newsDate}>{item.date}</ThemedText>
            </View>
            <ThemedText style={styles.newsTitle}>{item.title}</ThemedText>
            <ThemedText style={styles.newsSummary}>{item.summary}</ThemedText>
          </View>
        ))}
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
    marginBottom: Spacing.xl,
    alignItems: "center",
  },
  title: {
    ...Typography.h2,
  },
  newsCard: {
    backgroundColor: JiguuColors.surface,
    borderRadius: BorderRadius.md,
    padding: Spacing.lg,
    marginBottom: Spacing.lg,
    borderLeftWidth: 4,
    borderLeftColor: JiguuColors.newsEvents,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Spacing.sm,
  },
  newsType: {
    ...Typography.caption,
    color: JiguuColors.newsEvents,
    fontWeight: "bold",
  },
  newsDate: {
    ...Typography.caption,
    color: JiguuColors.textSecondary,
  },
  newsTitle: {
    ...Typography.h4,
    color: JiguuColors.textPrimary,
    marginBottom: Spacing.xs,
  },
  newsSummary: {
    ...Typography.body,
    color: JiguuColors.textSecondary,
  },
});
