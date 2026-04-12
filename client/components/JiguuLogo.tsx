import React, { memo, useMemo } from "react";
import { StyleSheet, View, Image, Text, Platform } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Typography } from "@/constants/theme";

const jiguuLogoImage = require("../../assets/images/jiguu-logo.png");

interface JiguuLogoProps {
  showSubtitle?: boolean;
  size?: "small" | "medium" | "large";
}

export const JiguuLogo = memo(function JiguuLogo({ showSubtitle = false, size = "medium" }: JiguuLogoProps) {
  const { logoWidth, logoHeight } = useMemo(() => ({
    logoWidth: size === "small" ? 160 : size === "medium" ? 200 : 250,
    logoHeight: size === "small" ? 48 : size === "medium" ? 60 : 75,
  }), [size]);

  return (
    <View style={styles.container}>
      <Image
        source={jiguuLogoImage}
        style={[styles.logo, { width: logoWidth, height: logoHeight }]}
        resizeMode="contain"
      />
      {showSubtitle ? (
        <Text style={styles.subtitle}>
          <Text style={styles.subtitleGray}>Learn Smart</Text>
          <Text style={styles.subtitlePink}> • Class 10</Text>
        </Text>
      ) : null}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginBottom: 0,
    paddingBottom: 0,
  },
  subtitle: {
    fontSize: 15,
    letterSpacing: 1,
    // Maintaining extra tight gap
    transform: [{ translateY: -18 }],
    marginBottom: -18, 
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  subtitleGray: {
    color: "#E0E0E0",
    fontFamily: "NotoSans_600SemiBold",
    fontWeight: "600",
  },
  subtitlePink: {
    color: JiguuColors.accent2,
    fontFamily: "NotoSans_500Medium",
    fontWeight: "500",
  },
});
