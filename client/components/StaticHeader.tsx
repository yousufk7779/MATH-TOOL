import React, { memo } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { GlobalSearchBar } from "@/components/GlobalSearchBar";
import { SearchResults } from "@/components/SearchResults";
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
        paddingBottom: isLandscape ? 5 : Spacing.md,
        height: isLandscape ? 100 : undefined, // Increase height to fit logo
        flexDirection: isLandscape ? "row" : "column",
        justifyContent: isLandscape ? "space-between" : "flex-start", // Fix: Align top in portrait
        alignItems: "center",
      }
    ]}>
      <View style={styles.logoContainer}>
        <JiguuLogo size={isLandscape ? "small" : "large"} showSubtitle={true} />
      </View>
      <View style={[
        styles.searchContainer,
        isLandscape && { flex: 1, marginLeft: Spacing.md }
      ]}>
        <GlobalSearchBar />
        <SearchResults />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: JiguuColors.background,
    paddingHorizontal: Spacing.lg,
    alignItems: "center",
    // justifyContent: "flex-end", // Removed to prevent layout issues
    borderBottomWidth: 1,
    borderBottomColor: JiguuColors.border,
    zIndex: 100, // Ensure header is above content
  },
  logoContainer: {
    marginBottom: Spacing.md,
  },
  searchContainer: {
    width: "100%",
    maxWidth: 500,
  }
});
