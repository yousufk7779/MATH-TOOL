import React, { memo } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { JiguuLogo } from "@/components/JiguuLogo";
import { Spacing, JiguuColors } from "@/constants/theme";

export const StaticHeader = memo(function StaticHeader() {
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <View style={[
      styles.container,
      {
        paddingTop: isLandscape ? insets.top + 5 : insets.top + Spacing.md,
        paddingBottom: isLandscape ? 5 : 4,
        height: isLandscape ? 100 : undefined,
        flexDirection: isLandscape ? "row" : "column",
        justifyContent: isLandscape ? "space-between" : "center",
        alignItems: "center",
      }
    ]}>
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
    borderBottomWidth: 1,
    borderBottomColor: JiguuColors.border,
    zIndex: 100,
  },
  logoContainer: {
    marginBottom: 0,
  },
});
