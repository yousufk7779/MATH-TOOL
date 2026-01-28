import React, { useState, useCallback } from "react";
import { StyleSheet, View, Image, Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useHeaderHeight } from "@react-navigation/elements";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useFocusEffect } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import * as Haptics from "expo-haptics";

import { KeyboardAwareScrollViewCompat } from "@/components/KeyboardAwareScrollViewCompat";
import { ThemedText } from "@/components/ThemedText";
import { SettingRow } from "@/components/SettingRow";
import { useTheme } from "@/hooks/useTheme";
import { Spacing, BorderRadius } from "@/constants/theme";

interface StatsData {
  problemsSolved: number;
}

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();
  const { theme } = useTheme();

  const { data: stats, refetch } = useQuery<StatsData>({
    queryKey: ["/api/stats"],
  });

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );

  const handleSettingPress = (setting: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Alert.alert(setting, `${setting} settings coming soon!`);
  };

  return (
    <KeyboardAwareScrollViewCompat
      style={[styles.container, { backgroundColor: theme.backgroundRoot }]}
      contentContainerStyle={[
        styles.content,
        {
          paddingTop: headerHeight + Spacing.xl,
          paddingBottom: tabBarHeight + Spacing.xl,
        },
      ]}
      scrollIndicatorInsets={{ bottom: insets.bottom }}
    >
      <View style={styles.profileSection}>
        <View style={[styles.avatarContainer, { backgroundColor: theme.backgroundDefault }]}>
          <Image
            source={require("../../assets/images/avatar-preset.png")}
            style={styles.avatar}
            resizeMode="cover"
          />
        </View>
        <ThemedText type="h3" style={styles.name}>
          Math Student
        </ThemedText>
        <ThemedText type="body" style={{ color: theme.textSecondary }}>
          Learning one problem at a time
        </ThemedText>
      </View>

      <View style={[styles.statsCard, { backgroundColor: theme.backgroundDefault, borderColor: theme.border }]}>
        <View style={styles.statItem}>
          <ThemedText type="h2" style={{ color: theme.primary }}>
            {stats?.problemsSolved || 0}
          </ThemedText>
          <ThemedText type="small" style={{ color: theme.textSecondary }}>
            Problems Solved
          </ThemedText>
        </View>
      </View>

      <View style={[styles.settingsSection, { backgroundColor: theme.backgroundDefault, borderColor: theme.border }]}>
        <SettingRow
          icon="moon"
          label="Theme"
          value="System"
          onPress={() => handleSettingPress("Theme")}
        />
        <View style={[styles.divider, { backgroundColor: theme.border }]} />
        <SettingRow
          icon="bell"
          label="Notifications"
          onPress={() => handleSettingPress("Notifications")}
        />
        <View style={[styles.divider, { backgroundColor: theme.border }]} />
        <SettingRow
          icon="help-circle"
          label="Help & Support"
          onPress={() => handleSettingPress("Help & Support")}
        />
        <View style={[styles.divider, { backgroundColor: theme.border }]} />
        <SettingRow
          icon="shield"
          label="Privacy Policy"
          onPress={() => handleSettingPress("Privacy Policy")}
        />
        <View style={[styles.divider, { backgroundColor: theme.border }]} />
        <SettingRow
          icon="file-text"
          label="Terms of Service"
          onPress={() => handleSettingPress("Terms of Service")}
        />
      </View>

      <View style={[styles.settingsSection, { backgroundColor: theme.backgroundDefault, borderColor: theme.border }]}>
        <SettingRow
          icon="trash-2"
          label="Clear History"
          onPress={() => {
            Alert.alert(
              "Clear History",
              "Are you sure you want to clear all your saved problems?",
              [
                { text: "Cancel", style: "cancel" },
                { text: "Clear", style: "destructive", onPress: () => {} },
              ]
            );
          }}
          destructive
          showChevron={false}
        />
      </View>

      <ThemedText type="small" style={[styles.version, { color: theme.textSecondary }]}>
        JIGUU Math v1.0.0
      </ThemedText>
    </KeyboardAwareScrollViewCompat>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing.lg,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: Spacing["2xl"],
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    marginBottom: Spacing.lg,
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  name: {
    marginBottom: Spacing.xs,
  },
  statsCard: {
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
    padding: Spacing.xl,
    marginBottom: Spacing.xl,
    flexDirection: "row",
    justifyContent: "center",
  },
  statItem: {
    alignItems: "center",
  },
  settingsSection: {
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
    marginBottom: Spacing.lg,
    overflow: "hidden",
  },
  divider: {
    height: 1,
    marginLeft: Spacing.lg + 36 + Spacing.md,
  },
  version: {
    textAlign: "center",
    marginTop: Spacing.lg,
  },
});
