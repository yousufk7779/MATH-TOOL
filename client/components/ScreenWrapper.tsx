import React, { ReactNode, memo } from "react";
import { StyleSheet, View } from "react-native";

import { StaticHeader } from "@/components/StaticHeader";
import { NavigationButtons } from "@/components/NavigationButtons";
import { CreatorCredit } from "@/components/CreatorCredit";
import { JiguuColors } from "@/constants/theme";

interface ScreenWrapperProps {
  children: ReactNode;
  showBackButton?: boolean;
  hideHomeButton?: boolean;
  title?: string;
  titleColor?: string;
}

export const ScreenWrapper = memo(function ScreenWrapper({ children, showBackButton = false, hideHomeButton = false, title, titleColor }: ScreenWrapperProps) {
  return (
    <View style={styles.container}>
      <StaticHeader />
      {showBackButton ? <NavigationButtons title={title} titleColor={titleColor} hideHomeButton={hideHomeButton} /> : null}
      <View style={styles.content}>{children}</View>
      <CreatorCredit />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: JiguuColors.background,
  },
  content: {
    flex: 1,
  },
});
