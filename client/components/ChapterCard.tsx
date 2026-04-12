import React, { memo, useState, useCallback } from "react";
import { StyleSheet, Pressable, View, Platform } from "react-native";
import * as Haptics from "expo-haptics";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { ThemedText } from "@/components/ThemedText";
import { BorderRadius, Spacing, JiguuColors, Typography } from "@/constants/theme";

interface ChapterCardProps {
  number: number;
  name: string;
  color?: string;
  colors?: string[];
  onPress?: () => void;
  testID?: string;
  isAvailable?: boolean;
}

export const ChapterCard = memo(function ChapterCard({ number, name, color = JiguuColors.realNumbers, colors, onPress, testID, isAvailable = true }: ChapterCardProps) {
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

  const backgroundColors = colors || (isAvailable ? [color, color + '99'] : [JiguuColors.surface, JiguuColors.surface]);

  return (
    <Pressable
      testID={testID}
      onPress={isAvailable ? handlePress : undefined}
      onPressIn={isAvailable ? handlePressIn : undefined}
      onPressOut={isAvailable ? handlePressOut : undefined}
      style={({ pressed }) => [
        styles.cardContainer,
        !isAvailable && styles.cardDisabled,
        pressed && styles.cardPressed,
      ]}
    >
      <LinearGradient
        colors={backgroundColors as any}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.card}
      >
        <View style={styles.borderInner}>
          <View style={styles.numberContainer}>
            <ThemedText style={styles.number}>{number}</ThemedText>
          </View>
          <View style={styles.nameContainer}>
            <ThemedText style={styles.name} numberOfLines={2}>
              {name}
            </ThemedText>
          </View>
          {isAvailable ? (
            <View style={styles.chevronIcon}>
              <View style={styles.chevronTop} />
              <View style={styles.chevronBottom} />
            </View>
          ) : (
            <View style={styles.chevronIcon}>
              <Feather name="lock" size={20} color="rgba(255,255,255,0.6)" />
            </View>
          )}
        </View>
      </LinearGradient>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: BorderRadius.xl, // Matching the rounded shape in SS
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  card: {
    flex: 1,
    padding: 2, // Space for "outer" feeling
  },
  borderInner: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: Spacing.lg,
    minHeight: 60,
    borderRadius: BorderRadius.xl - 2,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.3)', // Subtle white inner border like SS
  },
  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  cardDisabled: {
    opacity: 0.5,
  },
  numberContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Spacing.md,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  number: {
    ...Typography.body,
    fontFamily: "NotoSans_700Bold",
    color: "#fff",
    fontSize: 16,
  },
  nameContainer: {
    flex: 1,
  },
  name: {
    ...Typography.body,
    color: "#fff",
    fontFamily: "NotoSans_700Bold",
    fontSize: 15,
    textTransform: 'uppercase', // Match SS style
  },
  chevronIcon: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: Spacing.sm,
  },
  chevronTop: {
    position: "absolute",
    top: 6,
    width: 10,
    height: 2.5,
    backgroundColor: "#fff",
    borderRadius: 2,
    transform: [{ rotate: "45deg" }],
  },
  chevronBottom: {
    position: "absolute",
    bottom: 6,
    width: 10,
    height: 2.5,
    backgroundColor: "#fff",
    borderRadius: 2,
    transform: [{ rotate: "-45deg" }],
  },
});
