import React, { memo } from "react";
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

  return (
    <ScreenWrapper showBackButton hideHomeButton homeRoute="ClassSelector">
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[styles.content, styles.centeredContent]}
        showsVerticalScrollIndicator={false}
      >
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
                  subject: "Class 11 Science",
                  topic: "Physics",
                  className: "Class 11",
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
                  subject: "Class 11 Science",
                  topic: "Chemistry",
                  className: "Class 11",
                })
              }
            />
          </View>

          {/* 3. BIOLOGY BUTTON (EXACT ZOOLOGY COLOR, NAVIGATES TO BIOLOGY SCREEN) */}
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-biology"
              title="BIOLOGY"
              icon="🧬"
              colors={["#00b09b", "#96c93d"]}
              onPress={() => navigation.navigate("Class11Biology")}
            />
          </View>

          {/* 4. EDUCATION BUTTON */}
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-education"
              title="EDUCATION"
              icon="🎓"
              colors={["#F39C12", "#D35400"]}
              onPress={() =>
                navigation.navigate("ChapterList", {
                  subject: "Class 11 Arts",
                  topic: "Education",
                  className: "Class 11",
                })
              }
            />
          </View>

          {/* 5. START QUIZ BUTTON */}
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
});
