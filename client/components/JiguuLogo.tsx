import React, { memo, useMemo } from "react";
import { StyleSheet, View, Image, Text, Platform } from "react-native";
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Defs, LinearGradient as SvgLinearGradient, Stop, Text as SvgText } from "react-native-svg";

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

  const isClassSelector = route.name === "ClassSelector";

  if (isClass9) subtitleSuffix = "Class 9";
  else if (isClass8) subtitleSuffix = "Class 8";
  else if (isClass7) subtitleSuffix = "Class 7";
  else if (isClassSelector) subtitleSuffix = "Classes";

  const subtitleStyle = useMemo(() => [
    styles.subtitle,
    isClassSelector && styles.subtitleTitleMatch
  ], [isClassSelector]);

  const subtitleTextStyle = useMemo(() => [
    styles.subtitleGray,
    isClassSelector && styles.subtitleTitleMatchText
  ], [isClassSelector]);

  const subtitleSuffixStyle = useMemo(() => [
    styles.subtitlePink,
    isClassSelector && styles.subtitleTitleMatchText
  ], [isClassSelector]);

  return (
    <View style={styles.container}>
      <Image
        source={jiguuLogoImage}
        style={[styles.logo, { width: logoWidth, height: logoHeight }]}
        resizeMode="contain"
      />
      {showSubtitle ? (
        <View style={styles.subtitleRow}>
          <Text style={[subtitleStyle, subtitleTextStyle, { marginBottom: 0, transform: [] }]}>
            Learn Smart
            <Text style={{ transform: [{ translateY: -2 }] }}> .</Text>
          </Text>
          <Svg height="22" width="85" style={{ marginLeft: 5 }}>
            <Defs>
              <SvgLinearGradient id="subtitleGrad" x1="0" y1="0" x2="1" y2="0">
                <Stop offset="0" stopColor="#4FC3F7" />
                <Stop offset="1" stopColor="#FF4FA3" />
              </SvgLinearGradient>
            </Defs>
            <SvgText
              fill="url(#subtitleGrad)"
              fontSize={isClassSelector ? 17 : 15}
              fontFamily="NotoSans_600SemiBold"
              fontWeight="600"
              x="0"
              y={isClassSelector ? 17 : 15}
            >
              {subtitleSuffix}
            </SvgText>
          </Svg>
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
  subtitleTitleMatch: {
    fontSize: 17,
    letterSpacing: 0.5,
  },
  subtitleTitleMatchText: {
    color: '#FFFFFF',
    fontFamily: "NotoSans_600SemiBold",
    fontWeight: "600",
  },
  subtitleRow: {
    flexDirection: 'row', 
    alignItems: 'center',
    transform: [{ translateY: -18 }],
    marginBottom: -18,
  }
});
