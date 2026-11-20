import React, { memo, useCallback, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Linking,
  Alert,
  Pressable,
  Modal,
} from "react-native";
import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import {
  JiguuColors,
  Spacing,
  Typography,
  BorderRadius,
} from "@/constants/theme";

// @ts-ignore
import sameerPhoto from "../../assets/images/sameer-photo.jpg";
import { JiguuLogo } from "@/components/JiguuLogo";

const OFFLINE_TITLE = "You're Currently Offline";
const OFFLINE_MESSAGE =
  "JiGUU works 100% offline for studying, but visiting external websites or sending emails requires an internet connection. Please turn on mobile data or Wi-Fi and try again.";

// Lightweight connectivity check: a quick request to google.com with a short timeout.
async function isOnline(): Promise<boolean> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 4000);
  try {
    await fetch("https://www.google.com", {
      method: "HEAD",
      cache: "no-store",
      signal: controller.signal,
    });
    return true;
  } catch {
    return false;
  } finally {
    clearTimeout(timer);
  }
}

function AboutEducatorScreen() {
  const [offlineVisible, setOfflineVisible] = useState(false);

  // Checks the connection first; opens the website or email app only when online.
  const openLink = useCallback(async (url: string) => {
    if (!(await isOnline())) {
      setOfflineVisible(true);
      return;
    }
    try {
      await Linking.openURL(url);
    } catch {
      Alert.alert(
        "Unable to open",
        url.startsWith("mailto:")
          ? `No email app found. Please write to ${url.slice(7)}.`
          : "This link could not be opened on your device.",
      );
    }
  }, []);

  return (
    <ScreenWrapper showBackButton hideHomeButton>
      <Modal
        visible={offlineVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setOfflineVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.card, styles.modalCard]}>
            <ThemedText style={styles.modalTitle}>{OFFLINE_TITLE}</ThemedText>
            <ThemedText style={styles.modalMessage}>
              {OFFLINE_MESSAGE}
            </ThemedText>
            <Pressable
              style={styles.modalButton}
              onPress={() => setOfflineVisible(false)}
              accessibilityRole="button"
            >
              <ThemedText style={styles.modalButtonText}>Got It</ThemedText>
            </Pressable>
          </View>
        </View>
      </Modal>
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
                resizeMode="contain"
              />
            </View>
            <ThemedText style={styles.name}>Sameer Sir</ThemedText>
            <ThemedText style={styles.role}>
              {"Founder & Lead Educator, JiGUU EdTech\nInternational Author"}
            </ThemedText>
            <ThemedText style={styles.bodyText}>
              Sameer Sir (Sameer Khan / Sumeer Yousaf Khan) is an international
              author, technology educator, and mentor with over a decade of
              dedicated teaching and curriculum mentorship in Jammu & Kashmir's
              School Education Department. Known for his teaching philosophy of{" "}
              <ThemedText style={styles.italic}>
                "structural clarity and zero-fluff learning,"
              </ThemedText>{" "}
              he bridges classroom pedagogy with software engineering to make
              complex concepts simple, visual, and exam-ready.
            </ThemedText>
            <ThemedText style={[styles.bodyText, { marginTop: Spacing.md }]}>
              Beyond the classroom, he has authored 12 published books—ranging
              from JKBOSE & CBSE Class 11 and 12 Computer Science with Python
              textbooks to global guides on programming, competitive exams, and
              AI—reaching readers across 60+ countries.
            </ThemedText>
          </View>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionHeader}>About JiGUU</ThemedText>
          <View style={styles.card}>
            <View style={styles.logoCenter}>
              <JiguuLogo
                size="medium"
                showSubtitle
                subtitleSuffix="Study Smarter"
              />
            </View>
            <ThemedText style={styles.bodyText}>
              JiGUU is an ultra-lightweight, 100% offline, and completely free &
              ad-free Android learning platform designed for students of Classes
              7 to 12 (aligned with JKBOSE & NCERT curricula).
            </ThemedText>
            <ThemedText style={[styles.bodyText, { marginTop: Spacing.md }]}>
              Built with a focus on clarity and consistency, JiGUU works without
              internet connectivity, sign-ups, or subscriptions—turning any
              smartphone into a distraction-free digital library with concise
              reference notes, step-by-step solved questions, crisp diagrams,
              and chapter-wise MCQs.
            </ThemedText>
          </View>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionHeader}>Why JiGUU?</ThemedText>
          <View style={styles.card}>
            <FeatureItem
              label="Classes 7 to 12 Coverage:"
              text="Comprehensive JKBOSE & NCERT-aligned subjects"
            />
            <FeatureItem
              label="100% Offline & Ultra-Light:"
              text="Works smoothly even in zero-connectivity areas"
            />
            <FeatureItem
              label="Zero Ads, Zero Cost:"
              text="No login walls, no paywalls, and no distractions"
            />
            <FeatureItem
              label="Exam-Focused Content:"
              text="Concise reference notes, step-by-step solutions, and chapter-wise MCQs"
            />
            <FeatureItem label="Global Learner Trust:">
              Rated <ThemedText style={styles.bold}>5.0 ★</ThemedText> on Google
              Play with active learners across India and abroad
            </FeatureItem>
          </View>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionHeader}>
            Official Portals & Connect
          </ThemedText>
          <View style={styles.card}>
            <PortalLink
              label="Official EdTech & App Portal"
              value="www.jiguuedtech.com"
              onPress={() => openLink("https://www.jiguuedtech.com")}
            />
            <PortalLink
              label="Author Profile & Books Library"
              value="www.sameersir.com"
              onPress={() => openLink("https://www.sameersir.com")}
            />
            <PortalLink
              label="Support & Guidance"
              value="support@jiguuedtech.com"
              onPress={() => openLink("mailto:support@jiguuedtech.com")}
              last
            />
          </View>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionHeader}>Note of Thanks</ThemedText>
          <View style={styles.card}>
            <ThemedText style={styles.quoteText}>
              "I am sincerely grateful to my students, fellow educators, and
              readers worldwide for their trust and encouragement. JiGUU was
              built with a simple belief: a student's location or internet
              access should never limit their right to quality education. Keep
              learning, stay curious, and give your best every day."
            </ThemedText>
            <ThemedText style={styles.signature}>— Sameer Sir</ThemedText>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

const FeatureItem = ({
  label,
  text,
  children,
}: {
  label: string;
  text?: string;
  children?: React.ReactNode;
}) => (
  <View style={styles.featureItem}>
    <View style={styles.featureBullet} />
    <ThemedText style={styles.featureText}>
      <ThemedText style={styles.bold}>{label}</ThemedText> {text ?? children}
    </ThemedText>
  </View>
);

const PortalLink = ({
  label,
  value,
  onPress,
  last,
}: {
  label: string;
  value: string;
  onPress: () => void;
  last?: boolean;
}) => {
  const handlePress = useCallback(() => onPress(), [onPress]);
  return (
    <View style={[styles.portalItem, last && { marginBottom: 0 }]}>
      <ThemedText style={styles.portalLabel}>{label}</ThemedText>
      <Pressable onPress={handlePress} accessibilityRole="link" hitSlop={8}>
        <ThemedText style={styles.portalLink}>{value}</ThemedText>
      </Pressable>
    </View>
  );
};

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
    textAlign: "center",
    textTransform: "uppercase",
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
    width: 140,
    height: 140,
    borderRadius: 70,
    overflow: "hidden",
    alignSelf: "center",
    marginBottom: Spacing.md,
    borderWidth: 3,
    borderColor: JiguuColors.accent1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  logoCenter: {
    alignItems: "center",
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
  // inline highlights inside the existing text styles (no change to the card design)
  bold: {
    fontFamily: "NotoSans_700Bold",
    color: JiguuColors.textPrimary,
  },
  italic: {
    fontStyle: "italic",
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: Spacing.md,
  },
  featureBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: JiguuColors.accent1,
    marginRight: Spacing.md,
    marginTop: 9,
  },
  featureText: {
    ...Typography.body,
    color: JiguuColors.textPrimary,
    fontFamily: "NotoSans_400Regular",
    flex: 1,
  },
  portalItem: {
    marginBottom: Spacing.lg,
  },
  portalLabel: {
    ...Typography.body,
    color: JiguuColors.textPrimary,
    fontFamily: "NotoSans_700Bold",
  },
  portalLink: {
    ...Typography.body,
    color: JiguuColors.accent1,
    fontFamily: "NotoSans_400Regular",
    textDecorationLine: "underline",
  },
  // offline popup: same dark card + cyan left border, centred over a dimmed screen
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.65)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Spacing.xl,
  },
  modalCard: {
    width: "100%",
    maxWidth: 420,
  },
  modalTitle: {
    ...Typography.h4,
    color: JiguuColors.textPrimary,
    fontFamily: "NotoSans_700Bold",
    marginBottom: Spacing.md,
  },
  modalMessage: {
    ...Typography.body,
    color: JiguuColors.textSecondary,
    textAlign: "justify",
    lineHeight: 26,
    fontFamily: "NotoSans_400Regular",
    marginBottom: Spacing.xl,
  },
  modalButton: {
    alignSelf: "flex-end",
    backgroundColor: JiguuColors.accent1,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.xl,
    borderRadius: BorderRadius.md,
  },
  modalButtonText: {
    ...Typography.body,
    color: "#0B0F1A",
    fontFamily: "NotoSans_700Bold",
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
    textAlign: "right",
    fontFamily: "NotoSans_400Regular",
  },
});
