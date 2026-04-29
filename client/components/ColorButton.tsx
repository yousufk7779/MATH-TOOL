import React, { memo, useCallback, useState } from "react";
import { StyleSheet, Pressable, ViewStyle, Platform, View } from "react-native";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";

import { ThemedText } from "@/components/ThemedText";
import { BorderRadius, Spacing, JiguuColors, Typography } from "@/constants/theme";

interface ColorButtonProps {
  title: string;
  icon?: string;
  color?: string;
  colors?: string[];
  onPress?: () => void;
  style?: ViewStyle;
  testID?: string;
  glow?: boolean;
}

export const ColorButton = memo(function ColorButton({
  title,
  icon,
  color,
  colors,
  onPress,
  style,
  testID,
  glow = true,
}: ColorButtonProps) {
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

  const backgroundColors = (colors || (color ? [color, color] : JiguuColors.primaryGradient)) as any;
  const shadowColor = backgroundColors[0] || "#000";

  const isGlossy = backgroundColors[0] === "#FFA726" || backgroundColors[0] === "#7CFF00" || backgroundColors[0] === "#FF4DA6";

  return (
    <Pressable
      testID={testID}
      delayPressIn={0}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={({ pressed }) => [
        styles.buttonContainer,
        {
          shadowColor: isGlossy ? "#FFA726" : (glow ? shadowColor : "#000"),
          shadowOpacity: isGlossy ? 0.8 : (glow ? 0.6 : 0.25),
          shadowRadius: isGlossy ? 15 : (glow ? 10 : 3.84),
          elevation: isGlossy ? 15 : (glow ? 12 : 4),
          transform: [{ scale: pressed ? 0.95 : 1 }],
        },
        style,
      ]}
    >
      <View style={styles.buttonWrapper}>
        <LinearGradient
          colors={backgroundColors}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.gradient}
        >
          <View style={styles.borderInner}>
            {icon ? (
              <View style={styles.iconWrapper}>
                <ThemedText style={styles.iconText}>{icon}</ThemedText>
              </View>
            ) : null}
            <ThemedText
              style={styles.buttonText}
              numberOfLines={1}
            >
              {title.replace(/ /g, '\u00A0')}
            </ThemedText>
          </View>
        </LinearGradient>
        {isGlossy && <View style={styles.glossOverlay} />}
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: Spacing.buttonHeight + 4,
    borderRadius: BorderRadius.xl, 
    overflow: "hidden",
    shadowOffset: { width: 0, height: 4 },
  },
  gradient: {
    flex: 1,
    padding: 2, 
  },
  borderInner: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: BorderRadius.xl - 2,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.3)', 
    paddingHorizontal: 20,
  },
  iconWrapper: {
    position: "absolute",
    left: 16,
    width: 32,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  iconText: {
    fontSize: 22,
  },
  buttonText: {
    ...Typography.button,
    color: JiguuColors.textOnColor,
    fontSize: 18,
    width: '100%',
    textAlign: "center",
    textTransform: 'uppercase',
  },
  buttonWrapper: {
    flex: 1,
    borderRadius: BorderRadius.xl,
    overflow: 'hidden',
  },
  glossOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
});
