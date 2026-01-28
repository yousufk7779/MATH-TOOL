import React, { memo } from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, Typography, BorderRadius } from "@/constants/theme";

const sameerPhoto = require("../../assets/images/sameer-photo.jpg");

function AboutEducatorScreen() {
  return (
    <ScreenWrapper showBackButton>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.photoContainer}>
          <Image 
            source={sameerPhoto} 
            style={styles.photo} 
            resizeMode="cover" 
          />
        </View>

        <ThemedText style={styles.name}>Sameer Khan</ThemedText>
        <ThemedText style={styles.title}>Educator</ThemedText>

        <View style={styles.bioContainer}>
          <ThemedText style={styles.bio}>
            Dedicated mathematics educator helping students excel in NCERT Class 10 mathematics. 
            Passionate about making complex mathematical concepts simple and accessible.
          </ThemedText>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

export default memo(AboutEducatorScreen);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing["2xl"],
    paddingBottom: 120,
    alignItems: "center",
  },
  photoContainer: {
    width: 120,
    height: 120,
    borderRadius: BorderRadius.full,
    overflow: "hidden",
    marginBottom: Spacing.lg,
    borderWidth: 3,
    borderColor: JiguuColors.quadraticEquations,
  },
  photo: {
    width: 120,
    height: 160,
    marginTop: 20,
  },
  name: {
    ...Typography.h2,
    color: JiguuColors.textPrimary,
    marginBottom: Spacing.xs,
  },
  title: {
    ...Typography.body,
    color: JiguuColors.quadraticEquations,
    fontWeight: "600",
    marginBottom: Spacing["2xl"],
  },
  bioContainer: {
    backgroundColor: JiguuColors.surface,
    padding: Spacing.xl,
    borderRadius: BorderRadius.md,
    width: "100%",
  },
  bio: {
    ...Typography.body,
    color: JiguuColors.textSecondary,
    textAlign: "center",
    lineHeight: 24,
  },
});
