import React, { memo, useMemo } from "react";
import { StyleSheet, View, Image, Text, Platform } from "react-native";
import { useRoute } from "@react-navigation/native";

import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Typography } from "@/constants/theme";

const jiguuLogoImage = require("../../assets/images/jiguu-logo.png");

interface JiguuLogoProps {
  showSubtitle?: boolean;
  size?: "small" | "medium" | "large";
}

export const JiguuLogo = memo(function JiguuLogo({ showSubtitle = false, size = "medium" }: JiguuLogoProps) {
  const route = useRoute();
  const { logoWidth, logoHeight } = useMemo(() => ({
    logoWidth: size === "small" ? 160 : size === "medium" ? 200 : 250,
    logoHeight: size === "small" ? 48 : size === "medium" ? 60 : 75,
  }), [size]);

  let subtitleSuffix = "Class 10";
  const params = route.params as any;

  const isClass9 = 
    route.name === "Class9" || 
    params?.className === "Class 9" || 
    (typeof params?.subject === "string" && params.subject.includes("Class 9")) || 
    (typeof params?.chapterId === "string" && params.chapterId.startsWith("c9-"));

  const isClass8 = 
    route.name === "Class8" || 
    params?.className === "Class 8" || 
    (typeof params?.subject === "string" && params.subject.includes("Class 8")) || 
    (typeof params?.chapterId === "string" && params.chapterId.startsWith("c8-"));

  const isClass7 = 
    route.name === "Class7" || 
    params?.className === "Class 7" || 
    (typeof params?.subject === "string" && params.subject.includes("Class 7")) || 
    (typeof params?.chapterId === "string" && params.chapterId.startsWith("c7-"));

  if (isClass9) subtitleSuffix = "Class 9";
  else if (isClass8) subtitleSuffix = "Class 8";
  else if (isClass7) subtitleSuffix = "Class 7";

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
          <Text style={styles.subtitlePink}> • {subtitleSuffix}</Text>
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
