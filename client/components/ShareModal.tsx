import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Pressable,
  Image,
  Share,
  Alert,
  ActivityIndicator,
  ScrollView,
  useWindowDimensions,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

import { JiguuColors, Spacing, BorderRadius } from "@/constants/theme";

const jiguuLogoImage = require("../../assets/images/jiguu-logo.png");
const jiguuQrImage = require("../../assets/images/jiguu-qr-code.png");

interface ShareModalProps {
  visible: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ visible, onClose }) => {
  const [showQrModal, setShowQrModal] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const { width } = useWindowDimensions();

  // Reset internal state when closing
  const handleFullClose = () => {
    setShowQrModal(false);
    onClose();
  };

  // Safe helper to obtain a valid local file URI for the QR asset
  const getLocalQrFileUri = async (): Promise<string> => {
    try {
      const asset = Asset.fromModule(jiguuQrImage);
      if (!asset.downloaded || !asset.localUri) {
        await asset.downloadAsync();
      }
      if (asset.localUri) {
        return asset.localUri;
      }
    } catch (e) {
      console.log("Asset downloadAsync error:", e);
    }

    try {
      const resolved = Image.resolveAssetSource(jiguuQrImage);
      if (resolved && resolved.uri) {
        if (resolved.uri.startsWith("http://") || resolved.uri.startsWith("https://")) {
          const cacheDir = (FileSystem as any).cacheDirectory || (FileSystem as any).documentDirectory;
          if (cacheDir) {
            const destination = `${cacheDir}jiguu_qr_code.png`;
            const downloaded = await FileSystem.downloadAsync(resolved.uri, destination);
            return downloaded.uri;
          }
        }
        return resolved.uri;
      }
    } catch (e) {
      console.log("Image resolveAssetSource error:", e);
    }

    return "";
  };

  // Option 1: Share Link (Native Share Sheet with Play Store Link)
  const handleShareLink = async () => {
    handleFullClose();
    try {
      await Share.share({
        message:
          "Download JIGUU NCERT Solutions here:\nhttps://play.google.com/store/apps/details?id=com.jiguu.mathtool",
      });
    } catch (error: any) {
      console.log("Error sharing app link: ", error?.message);
    }
  };

  // Option 2: Switch view inside modal to QR Code view
  const handleOpenQrView = () => {
    setShowQrModal(true);
  };

  const handleBackToOptions = () => {
    setShowQrModal(false);
  };

  // Share QR Code PNG Image File via Native Share Sheet
  const handleShareQr = async () => {
    try {
      setIsSharing(true);
      const fileUri = await getLocalQrFileUri();

      if (!fileUri) {
        Alert.alert("Error", "Could not load QR code image file.");
        return;
      }

      const isAvailable = await Sharing.isAvailableAsync();
      if (isAvailable) {
        await Sharing.shareAsync(fileUri, {
          mimeType: "image/png",
          dialogTitle: "Share JIGUU QR Code Image",
          UTI: "public.png",
        });
      } else {
        await Share.share({
          url: fileUri,
          title: "JIGUU QR Code",
          message: "Scan to install JIGUU App!",
        });
      }
    } catch (error: any) {
      console.error("Error sharing QR image:", error);
      Alert.alert("Error", error?.message || "Failed to share QR Code image.");
    } finally {
      setIsSharing(false);
    }
  };

  // Responsive size for QR Image
  const qrSize = Math.min(width * 0.65, 260);

  if (!visible) return null;

  return (
    <Modal
      visible={visible}
      transparent={!showQrModal}
      animationType={showQrModal ? "slide" : "fade"}
      onRequestClose={showQrModal ? handleBackToOptions : handleFullClose}
      statusBarTranslucent
    >
      {!showQrModal ? (
        /* 1. Share Options Bottom Sheet */
        <Pressable style={styles.overlay} onPress={handleFullClose}>
          <Pressable style={styles.optionsContainer} onPress={(e) => e.stopPropagation()}>
            <View style={styles.handleBar} />

            <Text style={styles.optionsTitle}>Share JIGUU</Text>
            <Text style={styles.optionsSubtitle}>
              Choose how you want to share JIGUU app
            </Text>

            <View style={styles.optionsList}>
              {/* Option 1: Share Link */}
              <Pressable
                style={({ pressed }) => [
                  styles.optionCard,
                  pressed && styles.optionCardPressed,
                ]}
                onPress={handleShareLink}
              >
                <LinearGradient
                  colors={["#304FFE", "#8E24AA"]}
                  style={styles.iconContainer}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Feather name="share-2" size={20} color="#FFFFFF" />
                </LinearGradient>
                <View style={styles.optionTextContent}>
                  <Text style={styles.optionTitle}>Share Link</Text>
                  <Text style={styles.optionDesc}>
                    Send Play Store app link via WhatsApp, Telegram, etc.
                  </Text>
                </View>
                <Feather name="chevron-right" size={20} color={JiguuColors.textSecondary} />
              </Pressable>

              {/* Option 2: Show QR Code */}
              <Pressable
                style={({ pressed }) => [
                  styles.optionCard,
                  pressed && styles.optionCardPressed,
                ]}
                onPress={handleOpenQrView}
              >
                <LinearGradient
                  colors={["#E91E63", "#FF4081"]}
                  style={styles.iconContainer}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Feather name="grid" size={20} color="#FFFFFF" />
                </LinearGradient>
                <View style={styles.optionTextContent}>
                  <Text style={styles.optionTitle}>Show QR Code</Text>
                  <Text style={styles.optionDesc}>
                    Display or share official JIGUU QR Code
                  </Text>
                </View>
                <Feather name="chevron-right" size={20} color={JiguuColors.textSecondary} />
              </Pressable>
            </View>

            {/* Cancel Button */}
            <Pressable style={styles.cancelButton} onPress={handleFullClose}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </Pressable>
          </Pressable>
        </Pressable>
      ) : (
        /* 2. Show QR Code View (JIGUU Dark Theme Background for perfect white logo visibility) */
        <View style={styles.qrScreenBackground}>
          <ScrollView
            contentContainerStyle={styles.qrScrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* Header: JIGUU Logo with Tagline directly below */}
            <View style={styles.qrHeaderContainer}>
              <Image
                source={jiguuLogoImage}
                style={styles.jiguuLogo}
                resizeMode="contain"
              />
              <Text style={styles.taglineText}>
                Learn Smart <Text style={styles.taglineDot}>•</Text> Study Smarter
              </Text>
            </View>

            {/* Center: Large QR Image inside crisp white card */}
            <View style={styles.qrImageWrapper}>
              <Image
                source={jiguuQrImage}
                style={[styles.qrImage, { width: qrSize, height: qrSize }]}
                resizeMode="contain"
              />
            </View>

            {/* Sub-title directly below QR Code */}
            <View style={styles.scanTitleContainer}>
              <Text style={styles.scanTitle}>Scan to Install JIGUU</Text>
            </View>

            {/* Buttons Section */}
            <View style={styles.qrButtonsContainer}>
              {/* Share QR Button */}
              <Pressable
                style={({ pressed }) => [
                  styles.primaryActionButton,
                  pressed && styles.buttonPressed,
                ]}
                onPress={handleShareQr}
                disabled={isSharing}
              >
                <LinearGradient
                  colors={["#E91E63", "#D81B60"]}
                  style={styles.gradientButtonFill}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  {isSharing ? (
                    <ActivityIndicator size="small" color="#FFFFFF" />
                  ) : (
                    <>
                      <Feather name="share-2" size={18} color="#FFFFFF" style={styles.btnIcon} />
                      <Text style={styles.actionBtnText}>Share QR</Text>
                    </>
                  )}
                </LinearGradient>
              </Pressable>

              {/* Close Button */}
              <Pressable
                style={({ pressed }) => [
                  styles.closeOutlineButton,
                  pressed && styles.buttonPressed,
                ]}
                onPress={handleFullClose}
              >
                <Feather name="x" size={18} color="#FFFFFF" style={styles.btnIcon} />
                <Text style={styles.closeBtnText}>Close</Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  // Options Bottom Sheet Overlay Styles
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    justifyContent: "flex-end",
  },
  optionsContainer: {
    backgroundColor: JiguuColors.surface,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.md,
    paddingBottom: Platform.OS === "ios" ? 34 : Spacing.xl,
    borderTopWidth: 1,
    borderTopColor: JiguuColors.border,
  },
  handleBar: {
    width: 40,
    height: 4,
    backgroundColor: JiguuColors.border,
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: Spacing.lg,
  },
  optionsTitle: {
    fontSize: 20,
    fontFamily: "NotoSans_700Bold",
    color: JiguuColors.textPrimary,
    textAlign: "center",
    marginBottom: 4,
  },
  optionsSubtitle: {
    fontSize: 13,
    fontFamily: "NotoSans_400Regular",
    color: JiguuColors.textSecondary,
    textAlign: "center",
    marginBottom: Spacing.xl,
    opacity: 0.8,
  },
  optionsList: {
    gap: Spacing.md,
    marginBottom: Spacing.xl,
  },
  optionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: JiguuColors.surfaceLight,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    borderWidth: 1,
    borderColor: JiguuColors.border,
  },
  optionCardPressed: {
    opacity: 0.85,
    backgroundColor: "#32324A",
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Spacing.lg,
  },
  optionTextContent: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontFamily: "NotoSans_600SemiBold",
    color: JiguuColors.textPrimary,
    marginBottom: 2,
  },
  optionDesc: {
    fontSize: 12,
    fontFamily: "NotoSans_400Regular",
    color: JiguuColors.textSecondary,
    opacity: 0.7,
  },
  cancelButton: {
    paddingVertical: Spacing.md,
    alignItems: "center",
    borderRadius: BorderRadius.md,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  cancelButtonText: {
    fontSize: 15,
    fontFamily: "NotoSans_600SemiBold",
    color: JiguuColors.textSecondary,
  },

  // QR Screen Styles (JIGUU Dark Theme Background for perfect white logo visibility)
  qrScreenBackground: {
    flex: 1,
    backgroundColor: JiguuColors.background, // #0B0F1A Navy Dark
  },
  qrScrollContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing["2xl"],
  },
  qrHeaderContainer: {
    alignItems: "center",
    marginBottom: Spacing.xl,
  },
  jiguuLogo: {
    width: 210,
    height: 60,
    marginBottom: Spacing.xs,
  },
  taglineText: {
    fontSize: 15,
    fontFamily: "NotoSans_600SemiBold",
    color: "#FF4081",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  taglineDot: {
    color: "#00E676",
  },
  qrImageWrapper: {
    backgroundColor: "#FFFFFF",
    padding: Spacing.md,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.2)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 18,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Spacing.lg,
  },
  qrImage: {
    borderRadius: 12,
  },
  scanTitleContainer: {
    marginBottom: Spacing.xl,
  },
  scanTitle: {
    fontSize: 20,
    fontFamily: "NotoSans_700Bold",
    color: "#FFFFFF",
    textAlign: "center",
    letterSpacing: 0.3,
  },
  qrButtonsContainer: {
    width: "100%",
    maxWidth: 320,
    gap: Spacing.md,
  },
  primaryActionButton: {
    borderRadius: BorderRadius.lg,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  gradientButtonFill: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: Spacing.lg,
    borderRadius: BorderRadius.lg,
  },
  closeOutlineButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: Spacing.lg,
    borderRadius: BorderRadius.lg,
    backgroundColor: JiguuColors.surfaceLight, // #2A2A3C
    borderWidth: 1,
    borderColor: JiguuColors.border, // #3B3B52
  },
  buttonPressed: {
    opacity: 0.88,
    transform: [{ scale: 0.98 }],
  },
  btnIcon: {
    marginRight: 8,
  },
  actionBtnText: {
    fontSize: 16,
    fontFamily: "NotoSans_600SemiBold",
    color: "#FFFFFF",
  },
  closeBtnText: {
    fontSize: 16,
    fontFamily: "NotoSans_600SemiBold",
    color: "#FFFFFF",
  },
});
