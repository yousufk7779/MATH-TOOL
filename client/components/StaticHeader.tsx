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

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: isLandscape
            ? Math.max(insets.top, 2)
            : insets.top + Spacing.sm,
          paddingBottom: isLandscape ? 2 : 0,
          height: isLandscape ? Math.max(insets.top, 2) + 54 : insets.top + 105,
          justifyContent: isLandscape ? "center" : "flex-end",
          alignItems: "center",
        },
      ]}
    >
      <View
        style={[
          styles.logoContainer,
          isLandscape && styles.logoContainerLandscape,
        ]}
      >
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
    height: 90,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 2,
  },
  logoContainerLandscape: {
    height: 48,
    justifyContent: "center",
    paddingBottom: 0,
  },
});
