import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, BorderRadius, Typography } from "@/constants/theme";

interface SectionCardProps {
  title: string;
  icon: keyof typeof Feather.glyphMap;
  iconColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  children: React.ReactNode;
  style?: ViewStyle;
  titleStyle?: any;
}

function SectionCard({
  title,
  icon,
  iconColor = JiguuColors.accent1,
  backgroundColor = JiguuColors.surface,
  borderColor,
  children,
  style,
  titleStyle,
}: SectionCardProps) {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor },
        borderColor ? { borderLeftWidth: 3, borderLeftColor: borderColor } : null,
        style,
      ]}
    >
      <View style={styles.header}>
        <View style={[styles.iconContainer, { backgroundColor: iconColor + "20" }]}>
          <Feather name={icon} size={18} color={iconColor} />
        </View>
        <ThemedText style={[styles.title, { color: iconColor }, titleStyle]}>{title}</ThemedText>
      </View>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

export default memo(SectionCard);

const styles = StyleSheet.create({
  container: {
    borderRadius: BorderRadius.md,
    padding: Spacing.lg,
    marginBottom: Spacing.lg,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Spacing.md,
    paddingBottom: Spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: JiguuColors.border,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: BorderRadius.xs,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Spacing.sm,
  },
  title: {
    ...Typography.h4,
    flex: 1,
  },
  content: {
    marginTop: Spacing.xs,
  },
});
