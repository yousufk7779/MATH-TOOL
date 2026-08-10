import React, { memo } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ColorButton } from "@/components/ColorButton";
import { JiguuColors, Spacing } from "@/constants/theme";
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
        <View style={styles.buttonsContainer}>
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

          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-zoology"
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

          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-botany"
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

          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-quiz"
              title="START QUIZ"
              icon="🎯"
              colors={["#00c6ff", "#0072ff"]}
              onPress={() =>
                navigation.navigate("Quiz", { className: "Class 12" })
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
