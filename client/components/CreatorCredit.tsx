import React, { memo, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";

import { ThemedText } from "@/components/ThemedText";
import { ShareModal } from "@/components/ShareModal";
import {
  Spacing,
  JiguuColors,
  Typography,
  BorderRadius,
} from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

const sameerPhoto = require("../../assets/images/sameer-photo.jpg");

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const CreatorCredit = memo(function CreatorCredit() {
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute();

  const [shareModalVisible, setShareModalVisible] = useState(false);

  const handleAboutPress = () => {
    if (route.name === "AboutEducator") {
      navigation.navigate("ClassSelector");
    } else {
      navigation.navigate("AboutEducator");
    }
  };

  const handleShare = () => {
    setShareModalVisible(true);
  };

  return (
    <>
      <ShareModal
        visible={shareModalVisible}
        onClose={() => setShareModalVisible(false)}
      />
      <View
        style={[
          styles.container,
          {
            paddingBottom: insets.bottom + Spacing.sm - 6,
            paddingTop: isLandscape ? 4 : Spacing.md - 4,
          },
        ]}
      >
        <View style={styles.linksContainer}>
          <Pressable
            style={styles.aboutLink}
            onPress={handleAboutPress}
            hitSlop={10}
          >
            <Feather
              name="info"
              size={14}
              color={JiguuColors.textPrimary}
              style={styles.aboutIcon}
            />
            <ThemedText style={styles.aboutText}>About</ThemedText>
          </Pressable>

          <Pressable style={styles.shareLink} onPress={handleShare} hitSlop={10}>
            <Feather
              name="share-2"
              size={14}
              color={JiguuColors.textPrimary}
              style={styles.shareIcon}
            />
            <ThemedText style={styles.shareText}>Share</ThemedText>
          </Pressable>
        </View>

        <View style={styles.creatorInfo}>
          <Pressable
            style={[
              styles.photoWrapper,
              isLandscape && styles.photoWrapperLandscape,
            ]}
            onPress={handleAboutPress}
          >
            <Image
              source={sameerPhoto}
              style={[styles.photo, isLandscape && styles.photoLandscape]}
              resizeMode="cover"
            />
          </Pressable>
          <View style={styles.textContainer}>
            <ThemedText
              style={[styles.name, isLandscape && styles.nameLandscape]}
            >
              Sameer Sir
            </ThemedText>
            <ThemedText style={styles.title} numberOfLines={1}>
              Founder & Educator
            </ThemedText>
          </View>
        </View>
      </View>
    </>
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
  linksContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.md,
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
  shareLink: {
    flexDirection: "row",
    alignItems: "center",
    opacity: 0.6,
    paddingVertical: Spacing.xs,
  },
  shareIcon: {
    marginRight: 6,
  },
  shareText: {
    fontSize: 13,
    fontFamily: "NotoSans_400Regular",
    color: JiguuColors.textPrimary,
  },
  photoWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: "hidden",
    marginRight: Spacing.sm,
  },
  photoWrapperLandscape: {
    width: 26,
    height: 26,
    borderRadius: 13,
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  photoLandscape: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    justifyContent: "center",
  },
  name: {
    fontSize: 13,
    fontFamily: "NotoSans_600SemiBold",
    color: JiguuColors.textPrimary,
    lineHeight: 16,
  },
  nameLandscape: {
    fontSize: 12,
    lineHeight: 14,
  },
  title: {
    fontSize: 10,
    fontFamily: "NotoSans_400Regular",
    color: JiguuColors.textSecondary,
    opacity: 0.8,
  },
});
