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
      style={[
        styles.card, 
        { backgroundColor: color },
        !isAvailable && styles.cardDisabled,
        isPressed && styles.cardPressed,
      ]}
    >
      <View style={styles.numberContainer}>
        <ThemedText style={styles.number}>{number}</ThemedText>
      </View>
      <View style={styles.nameContainer}>
        <ThemedText style={styles.name} numberOfLines={2}>
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
    borderRadius: BorderRadius.md,
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.lg,
  },
  cardPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  cardDisabled: {
    opacity: 0.65,
  },
  numberContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Spacing.md,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
  },
  number: {
    ...Typography.body,
    fontWeight: "700",
    color: "#fff",
  },
  numberDisabled: {
    backgroundColor: JiguuColors.border,
  },
  nameContainer: {
    flex: 1,
  },
  name: {
    ...Typography.body,
    color: "#fff",
    fontWeight: "600",
  },
  comingSoonBadge: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: BorderRadius.xs,
    alignSelf: "flex-start",
    marginTop: Spacing.xs,
  },
  comingSoonText: {
    ...Typography.caption,
    color: "#fff",
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
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 1,
    transform: [{ rotate: "45deg" }],
  },
  chevronBottom: {
    position: "absolute",
    bottom: 2,
    width: 8,
    height: 2,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 1,
    transform: [{ rotate: "-45deg" }],
  },
});
