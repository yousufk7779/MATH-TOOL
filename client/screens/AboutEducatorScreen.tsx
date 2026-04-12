import React, { memo } from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, Typography, BorderRadius } from "@/constants/theme";

// @ts-ignore
import sameerPhoto from "../../assets/images/sameer-photo.jpg"; 
import { JiguuLogo } from "@/components/JiguuLogo";

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
          <View style={styles.card}>
            <View style={styles.photoContainer}>
              <Image
                source={sameerPhoto}
                style={styles.photo}
                resizeMode="cover"
              />
            </View>
            <ThemedText style={styles.name}>Sameer Khan</ThemedText>
            <ThemedText style={styles.role}>Educator (MCA, B.Ed)</ThemedText>
            <ThemedText style={styles.bodyText}>
              Sameer Khan is a dedicated educator with a strong academic background (MCA, B.Ed) and over a decade of teaching experience. He focuses on simplifying complex concepts and helping students build clarity, confidence, and strong fundamentals.
            </ThemedText>
            <ThemedText style={[styles.bodyText, { marginTop: Spacing.md }]}>
              His approach is based on step-by-step learning, making even difficult topics easy to understand and apply in exams.
            </ThemedText>
          </View>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionHeader}>About Jiguu</ThemedText>
          <View style={styles.card}>
            <View style={styles.logoCenter}>
              <JiguuLogo size="medium" showSubtitle={false} />
            </View>
            <ThemedText style={styles.bodyText}>
              JIGUU is a smart learning platform designed to simplify education across multiple subjects. From Mathematics to Science and beyond, it provides structured solutions, quick revision tools, and practice support to help students learn effectively.
            </ThemedText>
            <ThemedText style={[styles.bodyText, { marginTop: Spacing.md }]}>
              Built with a focus on clarity and consistency, JIGUU turns complex concepts into simple, understandable learning.
            </ThemedText>
          </View>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionHeader}>Why Jiguu?</ThemedText>
          <View style={styles.card}>
            <FeatureItem text="Step-by-step NCERT Solutions" />
            <FeatureItem text="Quick Revision Notes" />
            <FeatureItem text="Interactive Practice & Quizzes" />
            <FeatureItem text="Clean, Distraction-Free Learning" />
            <FeatureItem text="Works Offline" />
          </View>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionHeader}>Note of Thanks</ThemedText>
          <View style={styles.card}>
            <ThemedText style={styles.quoteText}>
              "I am sincerely grateful to all my students for their trust and dedication. This platform is created to support your journey towards better understanding and academic success. Keep learning, stay curious, and give your best every day."
            </ThemedText>
            <ThemedText style={styles.signature}>– Sameer Khan</ThemedText>
          </View>
        </View>

      </ScrollView>
    </ScreenWrapper>
  );
}

const FeatureItem = ({ text }: { text: string }) => (
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
    paddingBottom: 100,
  },
  section: {
    marginBottom: Spacing["2xl"],
  },
  sectionHeader: {
    ...Typography.h4,
    color: JiguuColors.textPrimary,
    marginBottom: Spacing.lg,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontFamily: "NotoSans_400Regular",
  },
  card: {
    backgroundColor: JiguuColors.surface,
    padding: Spacing.xl,
    borderRadius: BorderRadius.lg,
    borderLeftWidth: 4,
    borderLeftColor: JiguuColors.accent1,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  photoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: "hidden",
    alignSelf: "center",
    marginBottom: Spacing.md,
    borderWidth: 3,
    borderColor: JiguuColors.accent1,
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  logoCenter: {
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  name: {
    ...Typography.h3,
    color: JiguuColors.textPrimary,
    textAlign: "center",
    marginBottom: Spacing.xs,
    fontFamily: "NotoSans_400Regular",
  },
  role: {
    ...Typography.body,
    color: JiguuColors.accent1,
    textAlign: "center",
    marginBottom: Spacing.lg,
    fontFamily: "NotoSans_400Regular",
  },
  bodyText: {
    ...Typography.body,
    color: JiguuColors.textSecondary,
    textAlign: "justify",
    lineHeight: 26,
    fontFamily: "NotoSans_400Regular",
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  featureBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: JiguuColors.accent1,
    marginRight: Spacing.md,
  },
  featureText: {
    ...Typography.body,
    color: JiguuColors.textPrimary,
    fontFamily: "NotoSans_400Regular",
  },
  quoteText: {
    ...Typography.body,
    color: JiguuColors.textSecondary,
    textAlign: "justify",
    fontStyle: "italic",
    lineHeight: 28,
    opacity: 0.85,
    marginBottom: Spacing.lg,
    fontFamily: "NotoSans_400Regular",
  },
  signature: {
    ...Typography.h4,
    color: JiguuColors.textPrimary,
    textAlign: 'right',
    fontFamily: "NotoSans_400Regular",
  }
});
