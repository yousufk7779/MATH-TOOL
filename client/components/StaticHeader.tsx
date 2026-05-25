import React, { memo } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";

import { JiguuLogo } from "@/components/JiguuLogo";
import { Spacing, JiguuColors } from "@/constants/theme";

export const StaticHeader = memo(function StaticHeader() {
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const route = useRoute();
  const isLandscape = width > height;
  const isClassSelector = route.name === "ClassSelector";

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: isLandscape ? insets.top + 5 : insets.top + Spacing.sm,
          paddingBottom: isLandscape ? 2 : 0,
          height: isLandscape ? 100 : insets.top + 105,
          flexDirection: isLandscape ? "row" : "column",
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      <View style={styles.logoContainer}>
        <JiguuLogo size={isLandscape ? "small" : "large"} showSubtitle={true} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: JiguuColors.background,
    paddingHorizontal: Spacing.lg,
    alignItems: "center",
    justifyContent: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: JiguuColors.border,
    zIndex: 100,
  },
  logoContainer: {
    height: 90,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 2,
  },
});
