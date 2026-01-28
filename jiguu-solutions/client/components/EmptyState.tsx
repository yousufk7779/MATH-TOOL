import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, Typography } from "@/constants/theme";

interface EmptyStateProps {
  title: string;
  message: string;
  icon?: keyof typeof Feather.glyphMap;
}

export const EmptyState = memo(function EmptyState({ 
  title, 
  message, 
  icon = "inbox" 
}: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Feather name={icon} size={48} color={JiguuColors.textSecondary} />
      <ThemedText style={styles.title}>{title}</ThemedText>
      <ThemedText style={styles.message}>{message}</ThemedText>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: Spacing["2xl"],
  },
  title: {
    ...Typography.h3,
    color: JiguuColors.textPrimary,
    marginTop: Spacing.lg,
    textAlign: "center",
  },
  message: {
    ...Typography.body,
    color: JiguuColors.textSecondary,
    marginTop: Spacing.sm,
    textAlign: "center",
  },
});
