import React, { memo } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ColorButton } from "@/components/ColorButton";
import { ThemedText } from "@/components/ThemedText";
import { Spacing } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

type Class12ScienceScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Class12Science"
>;

function Class12ScienceScreen() {
  const navigation = useNavigation<Class12ScienceScreenNavigationProp>();

  return (
    <ScreenWrapper showBackButton hideHomeButton homeRoute="Class12">
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[styles.content, styles.centeredContent]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerContainer}>
          <View style={styles.titleRow}>
            <ThemedText style={styles.titleWhite}>Select Science Subject</ThemedText>
          </View>

          <View style={styles.decorationContainer}>
            <LinearGradient
              colors={["#4FC3F7", "#A089CC"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.decLine}
            />
            <LinearGradient
              colors={["#A089CC", "#C26CC1"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.decDot}
            />
            <LinearGradient
              colors={["#C26CC1", "#FF4FA3"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.decLine}
            />
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          {/* 1. PHYSICS BUTTON */}
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-physics-12"
              title="PHYSICS"
              icon="⚡"
              colors={["#FF512F", "#DD2476"]}
              onPress={() =>
                navigation.navigate("ChapterList", {
                  subject: "Class 12 Science",
                  topic: "Physics",
                  className: "Class 12",
                })
              }
            />
          </View>

          {/* 2. CHEMISTRY BUTTON */}
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-chemistry-12"
              title="CHEMISTRY"
              icon="🧪"
              colors={["#8E2DE2", "#4A00E0"]}
              onPress={() =>
                navigation.navigate("ChapterList", {
                  subject: "Class 12 Science",
                  topic: "Chemistry",
                  className: "Class 12",
                })
              }
            />
          </View>

          {/* 3. BOTANY BUTTON */}
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-botany-12"
              title="BOTANY"
              icon="🌿"
              colors={["#11998e", "#38ef7d"]}
              onPress={() =>
                navigation.navigate("ChapterList", {
                  subject: "Class 12 Science",
                  topic: "Botany",
                  className: "Class 12",
                })
              }
            />
          </View>

          {/* 4. ZOOLOGY BUTTON */}
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-zoology-12"
              title="ZOOLOGY"
              icon="🦁"
              colors={["#00b09b", "#96c93d"]}
              onPress={() =>
                navigation.navigate("ChapterList", {
                  subject: "Class 12 Science",
                  topic: "Zoology",
                  className: "Class 12",
                })
              }
            />
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

export default memo(Class12ScienceScreen);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.xs,
    paddingBottom: Spacing["3xl"],
    flexGrow: 1,
  },
  centeredContent: {
    justifyContent: "flex-start",
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: Spacing.lg,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  titleWhite: {
    color: "#FFFFFF",
    fontSize: 15,
    fontFamily: "NotoSans_600SemiBold",
    letterSpacing: 0.5,
  },
  decorationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    gap: 4,
  },
  decLine: {
    width: 32,
    height: 1.5,
    borderRadius: 1,
  },
  decDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  buttonsContainer: {
    gap: Spacing.lg,
  },
  buttonWrapper: {
    width: "100%",
  },
});
