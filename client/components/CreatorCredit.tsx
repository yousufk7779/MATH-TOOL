import React, { memo } from "react";
import { StyleSheet, View, Image, useWindowDimensions, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";

import { ThemedText } from "@/components/ThemedText";
import { Spacing, JiguuColors, Typography, BorderRadius } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

const sameerPhoto = require("../../assets/images/sameer-photo.jpg");

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const CreatorCredit = memo(function CreatorCredit() {
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={[
      styles.container,
      {
        paddingBottom: insets.bottom + Spacing.sm - 6,
        paddingTop: isLandscape ? 4 : Spacing.md - 4,
      }
    ]}>
      <Pressable 
        style={styles.aboutLink} 
        onPress={() => navigation.navigate("AboutEducator")}
        hitSlop={10}
      >
        <Feather name="info" size={14} color={JiguuColors.textPrimary} style={styles.aboutIcon} />
        <ThemedText style={styles.aboutText}>About</ThemedText>
      </Pressable>

      <View style={styles.creatorInfo}>
        <Pressable 
          style={[styles.photoWrapper, isLandscape && styles.photoWrapperLandscape]}
          onPress={() => navigation.navigate("AboutEducator")}
        >
          <Image
            source={sameerPhoto}
            style={[styles.photo, isLandscape && styles.photoLandscape]}
            resizeMode="cover"
          />
        </Pressable>
        <View style={styles.textContainer}>
          <ThemedText style={[styles.name, isLandscape && styles.nameLandscape]}>Sameer Khan</ThemedText>
          <ThemedText style={styles.title} numberOfLines={1}>Founder & Educator</ThemedText>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.lg,
    backgroundColor: JiguuColors.background,
    borderTopWidth: 1,
    borderTopColor: JiguuColors.border,
  },
  creatorInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  aboutLink: {
    flexDirection: "row",
    alignItems: "center",
    opacity: 0.6,
    paddingVertical: Spacing.xs,
  },
  aboutIcon: {
    marginRight: 6,
  },
  aboutText: {
    fontSize: 13,
    fontFamily: "NotoSans_400Regular",
    color: JiguuColors.textPrimary,
  },
  photoWrapper: {
    width: 52,
    height: 52,
    borderRadius: BorderRadius.full,
    overflow: "hidden",
    marginRight: Spacing.md,
    alignItems: "center",
    justifyContent: "center",
  },
  photoWrapperLandscape: {
    width: 32,
    height: 32,
  },
  photo: {
    width: 52,
    height: 70,
    marginTop: 14,
  },
  photoLandscape: {
    width: 32,
    height: 44,
    marginTop: 10,
  },
  textContainer: {
    alignItems: "center",
  },
  name: {
    fontSize: 14,
    color: JiguuColors.textPrimary,
    lineHeight: 18,
    fontFamily: "NotoSans_400Regular",
    letterSpacing: 0.5,
  },
  nameLandscape: {
    fontSize: 12,
    lineHeight: 14,
  },
  title: {
    fontSize: 12,
    color: JiguuColors.accent2,
    lineHeight: 16,
    fontFamily: "NotoSans_600SemiBold",
    marginTop: 2,
  },
});
