import React, { memo } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ColorButton } from "@/components/ColorButton";
import { Spacing } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

type Class12BiologyScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Class12Biology"
>;

function Class12BiologyScreen() {
  const navigation = useNavigation<Class12BiologyScreenNavigationProp>();

  return (
    <ScreenWrapper showBackButton hideHomeButton homeRoute="Class12">
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
                  subject: "Class 12 Science",
                  topic: "Botany",
                  className: "Class 12",
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
                  subject: "Class 12 Science",
                  topic: "Zoology",
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

export default memo(Class12BiologyScreen);

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
