import React, { memo, useCallback } from "react";
import { StyleSheet, Pressable, Platform, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as Haptics from "expo-haptics";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { ThemedText } from "@/components/ThemedText";
import { Spacing, JiguuColors, BorderRadius } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface NavigationButtonsProps {
  title?: string;
  titleColor?: string;
  hideHomeButton?: boolean;
}

export const NavigationButtons = memo(function NavigationButtons({ title, titleColor, hideHomeButton }: NavigationButtonsProps) {
  const navigation = useNavigation<NavigationProp>();

  const handleBack = useCallback(() => {
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    navigation.goBack();
  }, [navigation]);

  const handleHome = useCallback(() => {
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    navigation.reset({
      index: 1,
      routes: [{ name: "ClassSelector" }, { name: "Home" }],
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Pressable
        testID="button-back"
        delayPressIn={0}
        style={({ pressed }) => [styles.buttonContainer, pressed && styles.cardPressed]}
        onPress={handleBack}
      >
        <LinearGradient
          colors={[JiguuColors.surfaceLight, JiguuColors.surface] as any}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <View style={styles.borderInner}>
            <View style={styles.arrowIcon}>
              <View style={styles.arrowLine} />
              <View style={styles.arrowHead} />
            </View>
            <ThemedText style={styles.text}>Back</ThemedText>
          </View>
        </LinearGradient>
      </Pressable>

      {title && (
        <View style={styles.headerTitleContainer} pointerEvents="none">
          <ThemedText 
            style={[styles.headerTitle, titleColor ? { color: titleColor } : null]} 
            numberOfLines={1} 
            ellipsizeMode="tail"
          >
            {title}
          </ThemedText>
        </View>
      )}

      {!hideHomeButton && (
        <Pressable
          testID="button-home"
          delayPressIn={0}
          style={({ pressed }) => [styles.buttonContainer, pressed && styles.cardPressed]}
          onPress={handleHome}
        >
          <LinearGradient
            colors={[JiguuColors.surfaceLight, JiguuColors.surface] as any}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          >
            <View style={styles.borderInner}>
              <Feather name="home" size={16} color={JiguuColors.textPrimary} />
              <ThemedText style={styles.text}>Home</ThemedText>
            </View>
          </LinearGradient>
        </Pressable>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.md,
    marginBottom: Spacing.sm,
  },
  buttonContainer: {
    borderRadius: BorderRadius.xl, 
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  gradient: {
    padding: 1.5, // Outer spacing for border feel
  },
  borderInner: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: Spacing.lg,
    borderRadius: BorderRadius.xl - 1.5,
    borderWidth: 1.2,
    borderColor: 'rgba(255,255,255,0.2)', 
    backgroundColor: 'transparent',
  },
  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.96 }],
  },
  arrowIcon: {
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  arrowLine: {
    position: "absolute",
    width: 12,
    height: 2,
    backgroundColor: JiguuColors.textPrimary,
    borderRadius: 1,
  },
  arrowHead: {
    position: "absolute",
    left: 0,
    width: 8,
    height: 8,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: JiguuColors.textPrimary,
    transform: [{ rotate: "45deg" }],
  },
  text: {
    color: JiguuColors.textPrimary,
    fontSize: 16,
    marginLeft: Spacing.sm,
    fontFamily: "NotoSans_400Regular",
  },
  headerTitleContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: Spacing.sm + 4,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    textAlign: "center",
    color: JiguuColors.textPrimary,
    fontSize: 18,
    fontFamily: "NotoSans_400Regular",
    paddingHorizontal: 100,
  },
});
