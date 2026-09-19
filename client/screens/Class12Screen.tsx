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

type Class12ScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Class12"
>;

function Class12Screen() {
  const navigation = useNavigation<Class12ScreenNavigationProp>();

  return (
    <ScreenWrapper showBackButton hideHomeButton homeRoute="ClassSelector">
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[styles.content, styles.centeredContent]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerContainer}>
          <View style={styles.titleRow}>
            <ThemedText style={styles.titleWhite}>Select Your Subject</ThemedText>
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
              testID="button-physics"
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
              testID="button-chemistry"
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

          {/* 3. BIOLOGY BUTTON (EXACT ZOOLOGY COLOR, NAVIGATES TO CLASS 12 BIOLOGY SCREEN) */}
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-biology"
              title="BIOLOGY"
              icon="🧬"
              colors={["#00b09b", "#96c93d"]}
              onPress={() => navigation.navigate("Class12Biology")}
            />
          </View>

          {/* 4. ENGLISH BUTTON */}
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-english-12"
              title="ENGLISH"
              icon="📖"
              colors={["#ec008c", "#fc6767"]}
              onPress={() => navigation.navigate("Class12English")}
            />
          </View>

          {/* 5. EDUCATION BUTTON */}
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-education"
              title="EDUCATION"
              icon="🎓"
              colors={["#F39C12", "#D35400"]}
              onPress={() =>
                navigation.navigate("ChapterList", {
                  subject: "Class 12 Arts",
                  topic: "Education",
                  className: "Class 12",
                })
              }
            />
          </View>

          {/* 5. POLITICAL SCIENCE BUTTON */}
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-political-science"
              title="POLITICAL SCIENCE"
              icon="🏛️"
              colors={["#0083B0", "#00B4DB"]}
              onPress={() =>
                navigation.navigate("ChapterList", {
                  subject: "Class 12 Arts",
                  topic: "Political Science",
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

export default memo(Class12Screen);

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
