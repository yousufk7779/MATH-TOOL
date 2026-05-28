import React, { memo, useMemo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

import { JiguuColors, Typography } from "@/constants/theme";

const jiguuLogoImage = require("../../assets/images/jiguu-logo.png");

interface JiguuLogoProps {
  showSubtitle?: boolean;
  size?: "small" | "medium" | "large";
}

export const JiguuLogo = memo(function JiguuLogo({
  showSubtitle = false,
  size = "medium",
}: JiguuLogoProps) {
  const route = useRoute();
  const { logoWidth, logoHeight } = useMemo(
    () => ({
      logoWidth: size === "small" ? 160 : size === "medium" ? 200 : 250,
      logoHeight: size === "small" ? 48 : size === "medium" ? 60 : 75,
    }),
    [size],
  );

  let subtitleSuffix = "Class 10";
  const params = route.params as any;

  const isClass9 =
    route.name === "Class9" ||
    route.name === "Class9SocialScience" ||
    params?.className === "Class 9" ||
    (typeof params?.subject === "string" &&
      params.subject.includes("Class 9")) ||
    (typeof params?.chapterId === "string" &&
      (params.chapterId.startsWith("c9-") || params.chapterId.includes("-c9-")));

  const isClass8 =
    route.name === "Class8" ||
    route.name === "Class8SocialScience" ||
    params?.className === "Class 8" ||
    (typeof params?.subject === "string" &&
      params.subject.includes("Class 8")) ||
    (typeof params?.chapterId === "string" &&
      (params.chapterId.startsWith("c8-") || params.chapterId.includes("-c8-")));

  const isClass7 =
    route.name === "Class7" ||
    route.name === "Class7SocialScience" ||
    params?.className === "Class 7" ||
    (typeof params?.subject === "string" &&
      params.subject.includes("Class 7")) ||
    (typeof params?.chapterId === "string" &&
      params.chapterId.startsWith("c7-"));

  const isClassSelector = route.name === "ClassSelector";

  if (isClass9) subtitleSuffix = "Class 9";
  else if (isClass8) subtitleSuffix = "Class 8";
  else if (isClass7) subtitleSuffix = "Class 7";
  else if (isClassSelector) subtitleSuffix = "Study Smarter";

  const subtitleTextStyle = useMemo(
    () => [styles.subtitleText, styles.subtitleTitleMatch],
    [],
  );

  const suffixStyle = useMemo(
    () => [styles.subtitleSuffixText, { color: "#e64da8" }],
    [],
  );

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
            Learn Smart <Text style={styles.dot}>.</Text>{" "}
            <Text style={suffixStyle}>{subtitleSuffix}</Text>
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
    height: 32,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -18,
    paddingHorizontal: 20,
  },
  subtitleText: {
    width: "100%",
    textAlign: "center",
    fontSize: 14,
    fontFamily: "NotoSans_400Regular",
    color: "#E0E0E0",
    letterSpacing: 1,
    includeFontPadding: false,
    lineHeight: 22,
  },
  subtitleSuffixText: {
    color: JiguuColors.accent2,
    fontFamily: "NotoSans_400Regular",
    includeFontPadding: false,
    lineHeight: 22,
  },
  subtitleTitleMatch: {
    fontSize: 16,
    color: "#FFFFFF",
    letterSpacing: 0.5,
    includeFontPadding: false,
    lineHeight: 22,
  },
  dot: {
    fontSize: 22,
    color: "#FFFFFF",
    position: "relative",
    top: -1,
  },
});
