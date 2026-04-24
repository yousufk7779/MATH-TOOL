import React, { memo } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ColorButton } from "@/components/ColorButton";
import { JiguuColors, Spacing } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

type Class9ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Class9">;

function Class9Screen() {
  const navigation = useNavigation<Class9ScreenNavigationProp>();

  return (
    <ScreenWrapper showBackButton hideHomeButton>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.content,
          styles.centeredContent,
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-math"
              title="MATHEMATICS"
              icon="📘"
              colors={JiguuColors.gradients.pink}
              onPress={() => navigation.navigate("ChapterList", { subject: "Class 9", topic: "Mathematics" })}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-science"
              title="SCIENCE"
              icon="🔬"
              colors={JiguuColors.gradients.purple}
              onPress={() => navigation.navigate("ScienceTopics", { className: "Class 9" })}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-quiz"
              title="START QUIZ"
              icon="🎯"
              colors={JiguuColors.gradients.brightBlue}
              onPress={() => navigation.navigate("Quiz", { className: "Class 9" })}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-notes"
              title="NOTES"
              icon="📝"
              colors={JiguuColors.gradients.green}
              onPress={() => navigation.navigate("QuickNotes", { className: "Class 9" })}
            />
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

export default memo(Class9Screen);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.xl, // Perfectly symmetric for true centering
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
