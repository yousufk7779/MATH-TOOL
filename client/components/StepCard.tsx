import React, { useState } from "react";
import { StyleSheet, Pressable, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  WithSpringConfig,
  withTiming,
} from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

import { ThemedText } from "@/components/ThemedText";
import { useTheme } from "@/hooks/useTheme";
import { BorderRadius, Spacing } from "@/constants/theme";

interface StepCardProps {
  stepNumber: number;
  title: string;
  explanation: string;
  formula?: string;
  isLast?: boolean;
}

const springConfig: WithSpringConfig = {
  damping: 15,
  mass: 0.3,
  stiffness: 150,
};

export function StepCard({
  stepNumber,
  title,
  explanation,
  formula,
  isLast = false,
}: StepCardProps) {
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState(false);
  const scale = useSharedValue(1);
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const chevronStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.98, springConfig);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, springConfig);
  };

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setExpanded(!expanded);
    rotation.value = withTiming(expanded ? 0 : 180, { duration: 200 });
  };

  return (
    <Animated.View style={[animatedStyle, !isLast && { marginBottom: Spacing.md }]}>
      <Pressable
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[
          styles.card,
          { backgroundColor: theme.backgroundDefault, borderColor: theme.border },
        ]}
      >
        <View style={styles.header}>
          <View
            style={[styles.stepBadge, { backgroundColor: theme.primary }]}
          >
            <ThemedText style={styles.stepNumber}>{stepNumber}</ThemedText>
          </View>
          <ThemedText type="body" style={styles.title}>
            {title}
          </ThemedText>
          <Animated.View style={chevronStyle}>
            <Feather name="chevron-down" size={20} color={theme.textSecondary} />
          </Animated.View>
        </View>

        {expanded ? (
          <View style={styles.content}>
            {formula ? (
              <View
                style={[
                  styles.formulaBox,
                  { backgroundColor: theme.backgroundSecondary },
                ]}
              >
                <ThemedText style={styles.formula}>{formula}</ThemedText>
              </View>
            ) : null}
            <ThemedText type="body" style={{ color: theme.textSecondary }}>
              {explanation}
            </ThemedText>
          </View>
        ) : null}
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
    padding: Spacing.lg,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  stepBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Spacing.md,
  },
  stepNumber: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 14,
  },
  title: {
    flex: 1,
    fontWeight: "500",
  },
  content: {
    marginTop: Spacing.lg,
    paddingTop: Spacing.lg,
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.05)",
  },
  formulaBox: {
    borderRadius: BorderRadius.xs,
    padding: Spacing.md,
    marginBottom: Spacing.md,
  },
  formula: {
    fontFamily: "monospace",
    fontSize: 16,
    textAlign: "center",
  },
});
