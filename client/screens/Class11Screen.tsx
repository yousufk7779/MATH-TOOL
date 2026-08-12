import React, { memo, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ColorButton } from "@/components/ColorButton";
import { Spacing } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

type Class11ScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Class11"
>;

function Class11Screen() {
  const navigation = useNavigation<Class11ScreenNavigationProp>();
  const [isBioExpanded, setIsBioExpanded] = useState(true);

  return (
    <ScreenWrapper showBackButton hideHomeButton homeRoute="ClassSelector">
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[styles.content, styles.centeredContent]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.buttonsContainer}>
          {/* PHYSICS BUTTON */}
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-physics"
              title="PHYSICS"
              icon="⚡"
              colors={["#FF512F", "#DD2476"]}
              onPress={() =>
                navigation.navigate("ChapterList", {
                  subject: "Class 11 Science",
                  topic: "Physics",
                  className: "Class 11",
                })
              }
            />
          </View>

          {/* CHEMISTRY BUTTON */}
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-chemistry"
              title="CHEMISTRY"
              icon="🧪"
              colors={["#8E2DE2", "#4A00E0"]}
              onPress={() =>
                navigation.navigate("ChapterList", {
                  subject: "Class 11 Science",
                  topic: "Chemistry",
                  className: "Class 11",
                })
              }
            />
          </View>

          {/* BIOLOGY MAIN BUTTON (WITH EXACT ZOOLOGY GRADIENT) */}
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-biology"
              title={`BIOLOGY ${isBioExpanded ? "▲" : "▼"}`}
              icon="🧬"
              colors={["#00b09b", "#96c93d"]}
              onPress={() => setIsBioExpanded(!isBioExpanded)}
            />
          </View>

          {/* NESTED BOTANY & ZOOLOGY BUTTONS INSIDE BIOLOGY (VERTICALLY CENTERED) */}
          {isBioExpanded && (
            <View style={styles.biologySubContainer}>
              {/* 1. BOTANY FIRST */}
              <View style={styles.buttonWrapper}>
                <ColorButton
                  testID="button-botany"
                  title="BOTANY"
                  icon="🌿"
                  colors={["#11998e", "#38ef7d"]}
                  onPress={() =>
                    navigation.navigate("ChapterList", {
                      subject: "Class 11 Science",
                      topic: "Botany",
                      className: "Class 11",
                    })
                  }
                />
              </View>

              {/* 2. ZOOLOGY SECOND */}
              <View style={styles.buttonWrapper}>
                <ColorButton
                  testID="button-zoology"
                  title="ZOOLOGY"
                  icon="🦁"
                  colors={["#FF512F", "#DD2476"]}
                  onPress={() =>
                    navigation.navigate("ChapterList", {
                      subject: "Class 11 Science",
                      topic: "Zoology",
                      className: "Class 11",
                    })
                  }
                />
              </View>
            </View>
          )}

          {/* START QUIZ BUTTON */}
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-quiz"
              title="START QUIZ"
              icon="🎯"
              colors={["#00c6ff", "#0072ff"]}
              onPress={() =>
                navigation.navigate("Quiz", { className: "Class 11" })
              }
            />
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

export default memo(Class11Screen);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.xl,
    flexGrow: 1,
  },
  centeredContent: {
    justifyContent: "center",
  },
  buttonsContainer: {
    gap: Spacing.xl,
  },
  buttonWrapper: {
    width: "100%",
  },
  biologySubContainer: {
    width: "100%",
    padding: Spacing.lg,
    borderRadius: 20,
    backgroundColor: "rgba(0, 176, 155, 0.12)",
    borderWidth: 1.5,
    borderColor: "rgba(0, 176, 155, 0.4)",
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.lg,
  },
});
