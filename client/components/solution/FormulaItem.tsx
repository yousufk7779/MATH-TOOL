import React, { memo } from "react";
import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, BorderRadius, Typography } from "@/constants/theme";

import { ParsedText } from "@/components/ParsedText";

interface FormulaItemProps {
  name: string;
  formula: string;
  textStyle?: any;
}

function FormulaItem({ name, formula, textStyle }: FormulaItemProps) {
  return (
    <View style={styles.container}>
      <ThemedText style={[styles.name, textStyle]}>{name}</ThemedText>
      <View style={styles.formulaBox}>
        <ParsedText style={[styles.formula, textStyle]} Component={ThemedText}>{formula}</ParsedText>
      </View>
    </View>
  );
}

export default memo(FormulaItem);

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.md,
  },
  name: {
    ...Typography.small,
    fontFamily: "Nunito_600SemiBold",
    color: "#9C27B0",
    marginBottom: Spacing.xs,
  },
  formulaBox: {
    backgroundColor: JiguuColors.surfaceLight,
    borderRadius: BorderRadius.xs,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderLeftWidth: 3,
    borderLeftColor: "#9C27B0",
  },
  formula: {
    ...Typography.body,
    fontFamily: "Nunito_600SemiBold",
    color: JiguuColors.textPrimary,
    lineHeight: 24,
  },
});
