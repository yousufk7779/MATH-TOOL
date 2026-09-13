import React, { memo } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ColorButton } from "@/components/ColorButton";
import { Spacing } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

type Class12EnglishScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Class12English"
>;

function Class12EnglishScreen() {
  const navigation = useNavigation<Class12EnglishScreenNavigationProp>();

  return (
    <ScreenWrapper showBackButton hideHomeButton homeRoute="Class12">
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[styles.content, styles.centeredContent]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.buttonsContainer}>
          {/* 1. FLAMINGO (MAIN TEXTBOOK) */}
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-flamingo"
              title="FLAMINGO"
              icon="📖"
              colors={["#FF416C", "#FF4B2B"]}
              onPress={() =>
                navigation.navigate("ChapterList", {
                  subject: "Class 12 English",
                  topic: "Flamingo",
                  className: "Class 12",
                })
              }
            />
          </View>

          {/* 2. VISTAS (SUPPLEMENTARY READER) */}
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-vistas"
              title="VISTAS"
              icon="📚"
              colors={["#4776E6", "#8E54E9"]}
              onPress={() =>
                navigation.navigate("ChapterList", {
                  subject: "Class 12 English",
                  topic: "Vistas",
                  className: "Class 12",
                })
              }
            />
          </View>

          {/* 3. WRITING SKILLS & GRAMMAR */}
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-writing-grammar-12"
              title="WRITING & GRAMMAR"
              icon="✍️"
              colors={["#F39C12", "#D35400"]}
              onPress={() =>
                navigation.navigate("ChapterList", {
                  subject: "Class 12 English",
                  topic: "Writing & Grammar",
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

export default memo(Class12EnglishScreen);

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
