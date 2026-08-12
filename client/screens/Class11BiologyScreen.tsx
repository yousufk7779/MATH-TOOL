import React, { memo } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ColorButton } from "@/components/ColorButton";
import { Spacing } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

type Class11BiologyScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Class11Biology"
>;

function Class11BiologyScreen() {
  const navigation = useNavigation<Class11BiologyScreenNavigationProp>();

  return (
    <ScreenWrapper showBackButton hideHomeButton homeRoute="Class11">
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[styles.content, styles.centeredContent]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.buttonsContainer}>
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
              colors={["#00b09b", "#96c93d"]}
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
      </ScrollView>
    </ScreenWrapper>
  );
}

export default memo(Class11BiologyScreen);

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
