import React from "react";
import { StyleSheet, Pressable, ViewStyle, StyleProp } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  WithSpringConfig,
} from "react-native-reanimated";
import * as Haptics from "expo-haptics";

import { ThemedText } from "@/components/ThemedText";
import { useTheme } from "@/hooks/useTheme";
import { BorderRadius, Spacing, Colors } from "@/constants/theme";

interface GradientButtonProps {
  onPress?: () => void;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode;
}

const springConfig: WithSpringConfig = {
  damping: 15,
  mass: 0.3,
  stiffness: 150,
  overshootClamping: true,
  energyThreshold: 0.001,
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function GradientButton({
  onPress,
  children,
  style,
  disabled = false,
  size = "medium",
  icon,
}: GradientButtonProps) {
  const { theme, isDark } = useTheme();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    if (!disabled) {
      scale.value = withSpring(0.97, springConfig);
    }
  };

  const handlePressOut = () => {
    if (!disabled) {
      scale.value = withSpring(1, springConfig);
    }
  };

  const handlePress = () => {
    if (!disabled && onPress) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      onPress();
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return { height: 40, paddingHorizontal: Spacing.lg };
      case "large":
        return { height: 64, paddingHorizontal: Spacing["3xl"] };
      default:
        return { height: Spacing.buttonHeight, paddingHorizontal: Spacing["2xl"] };
    }
  };

  const colors = isDark
    ? [Colors.dark.primaryGradientStart, Colors.dark.primaryGradientEnd]
    : [Colors.light.primaryGradientStart, Colors.light.primaryGradientEnd];

  return (
    <AnimatedPressable
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      style={[animatedStyle, style]}
    >
      <LinearGradient
        colors={colors as [string, string]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[
          styles.button,
          getSizeStyles(),
          { opacity: disabled ? 0.5 : 1 },
        ]}
      >
        {icon}
        <ThemedText
          type="body"
          style={[styles.buttonText, { color: theme.buttonText }, icon ? { marginLeft: Spacing.sm } : undefined]}
        >
          {children}
        </ThemedText>
      </LinearGradient>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: BorderRadius.full,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 16,
  },
});
