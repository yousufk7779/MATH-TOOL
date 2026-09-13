import React, { memo } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ColorButton } from "@/components/ColorButton";
import { Spacing } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

type Class11EnglishScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Class11English"
>;

function Class11EnglishScreen() {
  const navigation = useNavigation<Class11EnglishScreenNavigationProp>();

  return (
    <ScreenWrapper showBackButton hideHomeButton homeRoute="Class11">
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[styles.content, styles.centeredContent]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.buttonsContainer}>
          {/* 1. HORNBILL (MAIN TEXTBOOK) */}
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-hornbill"
              title="HORNBILL"
              icon="📖"
              colors={["#FF416C", "#FF4B2B"]}
              onPress={() =>
                navigation.navigate("ChapterList", {
                  subject: "Class 11 English",
                  topic: "Hornbill",
                  className: "Class 11",
                })
              }
            />
          </View>

          {/* 2. SNAPSHOTS (SUPPLEMENTARY READER) */}
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-snapshots"
              title="SNAPSHOTS"
              icon="📚"
              colors={["#4776E6", "#8E54E9"]}
              onPress={() =>
                navigation.navigate("ChapterList", {
                  subject: "Class 11 English",
                  topic: "Snapshots",
                  className: "Class 11",
                })
              }
            />
          </View>

          {/* 3. WRITING SKILLS & GRAMMAR */}
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-writing-grammar"
              title="WRITING & GRAMMAR"
              icon="✍️"
              colors={["#F39C12", "#D35400"]}
              onPress={() =>
                navigation.navigate("ChapterList", {
                  subject: "Class 11 English",
                  topic: "Writing & Grammar",
                  className: "Class 11",
                })
              }
            />
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

export default memo(Class11EnglishScreen);

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
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonWrapper: {
    width: "100%",
  },
});
