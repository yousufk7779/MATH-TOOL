import React, { memo, useState, useCallback } from "react";
import { StyleSheet, Pressable, View, Platform } from "react-native";
import * as Haptics from "expo-haptics";

import { ThemedText } from "@/components/ThemedText";
import { BorderRadius, Spacing, JiguuColors, Typography } from "@/constants/theme";

interface ChapterCardProps {
  number: number;
  name: string;
  color?: string;
  onPress?: () => void;
  testID?: string;
  isAvailable?: boolean;
}

export const ChapterCard = memo(function ChapterCard({ number, name, color = JiguuColors.realNumbers, onPress, testID, isAvailable = true }: ChapterCardProps) {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = useCallback(() => {
    setIsPressed(true);
  }, []);

  const handlePressOut = useCallback(() => {
    setIsPressed(false);
  }, []);

  const handlePress = useCallback(() => {
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    onPress?.();
  }, [onPress]);

  return (
    <Pressable
      testID={testID}
      onPress={isAvailable ? handlePress : undefined}
      onPressIn={isAvailable ? handlePressIn : undefined}
      onPressOut={isAvailable ? handlePressOut : undefined}
      style={[styles.card, isPressed && styles.cardPressed, !isAvailable && styles.cardDisabled]}
    >
      <View style={[styles.numberContainer, { backgroundColor: color }, !isAvailable && styles.numberDisabled]}>
        <ThemedText style={styles.number}>{number}</ThemedText>
      </View>
      <View style={styles.nameContainer}>
        <ThemedText style={[styles.name, !isAvailable && styles.nameDisabled]} numberOfLines={2}>
          {name}
        </ThemedText>
        {!isAvailable ? (
          <View style={styles.comingSoonBadge}>
            <ThemedText style={styles.comingSoonText}>Coming Soon</ThemedText>
          </View>
        ) : null}
      </View>
      {isAvailable ? (
        <View style={styles.chevronIcon}>
          <View style={styles.chevronTop} />
          <View style={styles.chevronBottom} />
        </View>
      ) : null}
    </Pressable>
  );
});

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: JiguuColors.surface,
    borderRadius: BorderRadius.xs,
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.lg,
  },
  cardPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  cardDisabled: {
    opacity: 0.6,
  },
  numberContainer: {
    width: 32,
    height: 32,
    borderRadius: BorderRadius.xs,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Spacing.md,
  },
  number: {
    ...Typography.small,
    fontWeight: "700",
    color: JiguuColors.textOnColor,
  },
  numberDisabled: {
    opacity: 0.5,
  },
  nameContainer: {
    flex: 1,
  },
  name: {
    ...Typography.body,
    color: JiguuColors.textPrimary,
    fontWeight: "600",
  },
  nameDisabled: {
    color: JiguuColors.textSecondary,
  },
  comingSoonBadge: {
    backgroundColor: JiguuColors.border,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: BorderRadius.xs,
    alignSelf: "flex-start",
    marginTop: Spacing.xs,
  },
  comingSoonText: {
    ...Typography.caption,
    color: JiguuColors.textSecondary,
    fontFamily: "Nunito_600SemiBold",
  },
  chevronIcon: {
    width: 12,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  chevronTop: {
    position: "absolute",
    top: 2,
    width: 8,
    height: 2,
    backgroundColor: JiguuColors.textSecondary,
    borderRadius: 1,
    transform: [{ rotate: "45deg" }],
  },
  chevronBottom: {
    position: "absolute",
    bottom: 2,
    width: 8,
    height: 2,
    backgroundColor: JiguuColors.textSecondary,
    borderRadius: 1,
    transform: [{ rotate: "-45deg" }],
  },
});
