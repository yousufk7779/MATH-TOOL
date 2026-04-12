import React, { memo } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ColorButton } from "@/components/ColorButton";
import { JiguuColors, Spacing } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <ScreenWrapper>
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
              onPress={() => navigation.navigate("ChapterList", { subject: "Mathematics" })}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-science"
              title="SCIENCE"
              icon="🔬"
              colors={JiguuColors.gradients.purple}
              onPress={() => navigation.navigate("ScienceTopics")}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-quiz"
              title="START QUIZ"
              icon="🎯"
              colors={JiguuColors.gradients.brightBlue}
              onPress={() => navigation.navigate("Quiz")}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-notes"
              title="NOTES"
              icon="📝"
              colors={JiguuColors.gradients.green}
              onPress={() => navigation.navigate("QuickNotes")}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-about"
              title="ABOUT"
              icon="👤"
              colors={JiguuColors.gradients.deepOrange}
              onPress={() => navigation.navigate("AboutEducator")}
            />
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

export default memo(HomeScreen);

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
