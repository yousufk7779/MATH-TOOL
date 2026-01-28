import React from "react";
import { StyleSheet, Pressable, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import * as Haptics from "expo-haptics";

import { ThemedText } from "@/components/ThemedText";
import { useTheme } from "@/hooks/useTheme";
import { Spacing } from "@/constants/theme";

interface SettingRowProps {
  icon: keyof typeof Feather.glyphMap;
  label: string;
  value?: string;
  onPress?: () => void;
  destructive?: boolean;
  showChevron?: boolean;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function SettingRow({
  icon,
  label,
  value,
  onPress,
  destructive = false,
  showChevron = true,
}: SettingRowProps) {
  const { theme } = useTheme();
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    backgroundColor: theme.backgroundDefault,
  }));

  const handlePressIn = () => {
    opacity.value = withTiming(0.7, { duration: 100 });
  };

  const handlePressOut = () => {
    opacity.value = withTiming(1, { duration: 100 });
  };

  const handlePress = () => {
    if (onPress) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      onPress();
    }
  };

  const textColor = destructive ? theme.error : theme.text;

  return (
    <AnimatedPressable
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[styles.row, animatedStyle]}
    >
      <View style={[styles.iconContainer, { backgroundColor: destructive ? theme.error + "20" : theme.backgroundSecondary }]}>
        <Feather name={icon} size={18} color={destructive ? theme.error : theme.primary} />
      </View>
      <ThemedText type="body" style={[styles.label, { color: textColor }]}>
        {label}
      </ThemedText>
      {value ? (
        <ThemedText type="small" style={{ color: theme.textSecondary, marginRight: Spacing.sm }}>
          {value}
        </ThemedText>
      ) : null}
      {showChevron ? (
        <Feather name="chevron-right" size={20} color={theme.textSecondary} />
      ) : null}
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Spacing.md,
  },
  label: {
    flex: 1,
  },
});
