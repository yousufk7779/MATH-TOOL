import React, { memo } from "react";
import { StyleSheet, View, Image, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ThemedText } from "@/components/ThemedText";
import { Spacing, JiguuColors, Typography, BorderRadius } from "@/constants/theme";

const sameerPhoto = require("../../assets/images/sameer-photo.jpg");

export const CreatorCredit = memo(function CreatorCredit() {
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <View style={[
      styles.container,
      {
        paddingBottom: insets.bottom + Spacing.sm - 6,
        paddingTop: isLandscape ? 4 : Spacing.md - 4,
      }
    ]}>
      <View style={[styles.photoWrapper, isLandscape && styles.photoWrapperLandscape]}>
        <Image
          source={sameerPhoto}
          style={[styles.photo, isLandscape && styles.photoLandscape]}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <ThemedText style={[styles.name, isLandscape && styles.nameLandscape]}>Sameer Khan</ThemedText>
        <ThemedText style={styles.title} numberOfLines={1}>Founder & Educator</ThemedText>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: Spacing.lg,
    backgroundColor: JiguuColors.background,
    borderTopWidth: 1,
    borderTopColor: JiguuColors.border,
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
