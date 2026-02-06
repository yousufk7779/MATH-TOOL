import React, { memo } from "react";
import { StyleSheet, View, ScrollView, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ColorButton } from "@/components/ColorButton";
import { JiguuColors, Spacing } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <ScreenWrapper>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.content,
          {
            paddingTop: isLandscape ? Spacing.md : 0,
            paddingBottom: isLandscape ? 100 : 100,
            marginTop: isLandscape ? 0 : -20,
            justifyContent: isLandscape ? "flex-start" : "center",
            flexGrow: isLandscape ? 0 : 1,
          }
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-chapters"
              title="All Chapters"
              color="#00C853"
              onPress={() => navigation.navigate("ChapterList")}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-quick-notes"
              title="Quick Notes"
              color="#FFAB00"
              onPress={() => navigation.navigate("QuickNotes")}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-news"
              title="News & Events"
              color="#AA00FF"
              onPress={() => navigation.navigate("NewsEvents")}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-quiz"
              title="Practice Quiz"
              color={JiguuColors.accent2}
              onPress={() => navigation.navigate("Quiz")}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-pyq"
              title="Previous Year Questions"
              color={JiguuColors.accent3}
              onPress={() => navigation.navigate("GlobalPYQ")}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-about-educator"
              title="About the Educator"
              color={JiguuColors.accent1}
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
    paddingHorizontal: Spacing["2xl"],
  },
  buttonsContainer: {
    gap: Spacing.md,
  },
  buttonWrapper: {
    width: "100%",
  },
});
