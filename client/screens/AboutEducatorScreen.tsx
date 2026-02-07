import React, { memo } from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, Typography, BorderRadius } from "@/constants/theme";

// @ts-ignore
import sameerPhoto from "../../assets/images/sameer-photo.jpg"; // Keeping import, but handling potential missing file gracefully in UI if needed
import { JiguuLogo } from "@/components/JiguuLogo"; // Assuming this exists based on header use

function AboutEducatorScreen() {
  return (
    <ScreenWrapper showBackButton>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <ThemedText style={styles.sectionHeader}>About Educator</ThemedText>
          <View style={styles.educatorContainer}>
            <View style={styles.photoContainer}>
              {/* Using Image if available, or a fallback icon/view */}
              <Image
                source={sameerPhoto}
                style={styles.photo}
                resizeMode="cover"
              />
            </View>
            <ThemedText style={styles.name}>Sameer Khan</ThemedText>
            <ThemedText style={styles.role}>Educator (MCA, B.Ed)</ThemedText>
            <ThemedText style={styles.bio}>
              "Mathematics is not just about numbers, it's about logic and understanding."
              With over 10 years of experience, Sameer Sir has helped thousands of students master NCERT concepts with ease.
            </ThemedText>
          </View>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionHeader}>About Jiguu</ThemedText>
          <View style={styles.aboutContainer}>
            <JiguuLogo size="medium" showSubtitle={false} />
            <ThemedText style={styles.aboutText}>
              JIGUU is your personal math companion designed to simplify learning.
              It bridges the gap between complex textbook problems and understandable solutions.
            </ThemedText>
          </View>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionHeader}>Why Jiguu?</ThemedText>
          <View style={styles.featuresGrid}>
            <FeatureItem icon="check" text="Step-by-step NCERT Solutions" />
            <FeatureItem icon="clock" text="Quick Notes for Revision" />
            <FeatureItem icon="wifi-off" text="Works Offline" />
            <FeatureItem icon="search" text="Global Search with Voice" />
          </View>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionHeader}>Note of Thanks</ThemedText>
          <View style={styles.thanksContainer}>
            <ThemedText style={styles.thanksText}>
              "I am deeply grateful to all my students for their trust and dedication.
              This app is a small effort to support your journey towards excellence.
              Keep practicing, stay curious, and never give up!"
            </ThemedText>
            <ThemedText style={styles.signature}>- Sameer Khan</ThemedText>
          </View>
        </View>

      </ScrollView>
    </ScreenWrapper>
  );
}

const FeatureItem = ({ icon, text }: { icon: string, text: string }) => (
  <View style={styles.featureItem}>
    <View style={styles.featureBullet} />
    <ThemedText style={styles.featureText}>{text}</ThemedText>
  </View>
)

export default memo(AboutEducatorScreen);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.lg,
    paddingBottom: 120,
  },
  section: {
    marginBottom: Spacing["2xl"],
  },
  sectionHeader: {
    ...Typography.h3,
    color: JiguuColors.textPrimary,
    marginBottom: Spacing.md,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontFamily: "Kalam_700Bold",
  },
  educatorContainer: {
    alignItems: "center",
    backgroundColor: JiguuColors.surface,
    padding: Spacing.xl,
    borderRadius: BorderRadius.lg,
    borderTopWidth: 4,
    borderTopColor: JiguuColors.accent1,
  },
  photoContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    overflow: "hidden",
    marginTop: Spacing.md, // Move photo down
    marginBottom: Spacing.md,
    borderWidth: 4,
    borderColor: JiguuColors.accent1,
    elevation: 4,
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  name: {
    ...Typography.h2,
    color: JiguuColors.textPrimary,
    marginBottom: Spacing.xs,
    fontFamily: "Kalam_700Bold",
  },
  role: {
    ...Typography.body,
    color: JiguuColors.accent1,
    marginBottom: Spacing.md,
    fontFamily: "Kalam_700Bold",
  },
  bio: {
    ...Typography.body,
    color: JiguuColors.textSecondary,
    textAlign: "center",
    lineHeight: 24,
    fontFamily: "Kalam_400Regular",
  },
  aboutContainer: {
    alignItems: "center",
    backgroundColor: JiguuColors.surface,
    padding: Spacing.xl,
    borderRadius: BorderRadius.lg,
    borderTopWidth: 4,
    borderTopColor: JiguuColors.accent2,
  },
  aboutText: {
    ...Typography.body,
    color: JiguuColors.textSecondary,
    textAlign: "center",
    marginTop: Spacing.md,
    lineHeight: 24,
    fontFamily: "Kalam_400Regular",
  },
  featuresGrid: {
    backgroundColor: JiguuColors.surface,
    padding: Spacing.xl,
    borderRadius: BorderRadius.lg,
    borderTopWidth: 4,
    borderTopColor: JiguuColors.newsEvents,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  featureBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: JiguuColors.newsEvents,
    marginRight: Spacing.md,
  },
  featureText: {
    ...Typography.body,
    color: JiguuColors.textPrimary,
    fontFamily: "Kalam_400Regular",
  },
  thanksContainer: {
    backgroundColor: JiguuColors.surface,
    padding: Spacing.xl,
    borderRadius: BorderRadius.lg,
    borderTopWidth: 4,
    borderTopColor: JiguuColors.accent3,
  },
  thanksText: {
    ...Typography.body,
    color: JiguuColors.textSecondary,
    textAlign: "center",
    lineHeight: 26,
    marginBottom: Spacing.md,
    fontFamily: "Kalam_400Regular",
  },
  signature: {
    ...Typography.h4,
    color: JiguuColors.textPrimary,
    textAlign: 'right',
    fontFamily: "Kalam_700Bold",
  }
});
