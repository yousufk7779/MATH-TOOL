import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, Typography } from "@/constants/theme";

interface DefinitionItemProps {
  term: string;
  description: string;
  termStyle?: any;
  descriptionStyle?: any;
}

function DefinitionItem({ term, description, termStyle, descriptionStyle }: DefinitionItemProps) {
  return (
    <View style={styles.container}>
      <ThemedText
        style={{
          ...Typography.body,
          fontFamily: "Nunito_700Bold",
          color: "#4CAF50",
          marginBottom: 2,
          ...termStyle
        }}
      >
        {`${term}:`}
      </ThemedText>
      <ThemedText
        style={{
          ...Typography.small,
          color: JiguuColors.textSecondary,
          lineHeight: 22,
          ...descriptionStyle
        }}
      >
        {description}
      </ThemedText>
    </View>
  );
}

export default memo(DefinitionItem);

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.sm,
    paddingBottom: Spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: JiguuColors.border + "40",
  },
  term: {
    ...Typography.body,
    fontFamily: "Nunito_700Bold",
    color: "#4CAF50",
    marginBottom: 2,
  },
  description: {
    ...Typography.small,
    color: JiguuColors.textSecondary,
    lineHeight: 22,
  },
});
