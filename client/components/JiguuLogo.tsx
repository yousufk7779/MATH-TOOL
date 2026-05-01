import React, { memo, useMemo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

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

  const isClassSelector = route.name === "ClassSelector";

  if (isClass9) subtitleSuffix = "Class 9";
  else if (isClass8) subtitleSuffix = "Class 8";
  else if (isClass7) subtitleSuffix = "Class 7";
  else if (isClassSelector) subtitleSuffix = "Classes";

  const subtitleTextStyle = useMemo(() => [
    styles.subtitleText,
    isClassSelector && styles.subtitleTitleMatch
  ], [isClassSelector]);

  const suffixStyle = useMemo(() => [
    styles.subtitleSuffixText,
    isClassSelector && { color: JiguuColors.accent2 }
  ], [isClassSelector]);

  return (
    <View style={styles.container}>
      <Image
        source={jiguuLogoImage}
        style={[styles.logo, { width: logoWidth, height: logoHeight }]}
        resizeMode="contain"
      />
      {showSubtitle ? (
        <View style={styles.subtitleWrapper}>
          <Text style={subtitleTextStyle}>
            Learn Smart . <Text style={suffixStyle}>{subtitleSuffix}</Text>
          </Text>
        </View>
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
  subtitleWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -18,
    paddingHorizontal: 20,
  },
  subtitleText: {
    width: "100%",
    textAlign: "center",
    fontSize: 15,
    fontFamily: "NotoSans_600SemiBold",
    color: "#E0E0E0",
    letterSpacing: 1,
  },
  subtitleSuffixText: {
    color: JiguuColors.accent2,
    fontWeight: "700",
  },
  subtitleTitleMatch: {
    fontSize: 17,
    color: '#FFFFFF',
    letterSpacing: 0.5,
  }
});
