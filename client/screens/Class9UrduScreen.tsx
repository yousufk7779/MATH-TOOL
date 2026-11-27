import React, { memo } from "react";
import { StyleSheet, View, ScrollView, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ColorButton } from "@/components/ColorButton";
import { Spacing } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { useUrduFonts } from "@/utils/urduFont";

type Class9UrduScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Class9Urdu"
>;

// Class 9 Urdu (JKBOSE — بہارستانِ اردو، جماعت نہم). Same layout as Class9EnglishScreen,
// with the four sections of the book and syllabus; titles in Urdu (Nastaliq), loaded on demand.
const CATEGORIES: { topic: string; title: string; icon: string; colors: string[] }[] = [
  { topic: "Prose", title: "حصۂ نثر", icon: "📖", colors: ["#EC008C", "#FC6767"] },
  { topic: "Ghazals", title: "غزلیات", icon: "🌹", colors: ["#00C6FF", "#0072FF"] },
  { topic: "Nazms", title: "نظمیں اور مثنوی", icon: "✒️", colors: ["#F39C12", "#D35400"] },
  { topic: "Grammar & Writing", title: "قواعد اور تخلیقی کام", icon: "✍️", colors: ["#E040FB", "#7B1FA2"] },
];

function Class9UrduScreen() {
  const navigation = useNavigation<Class9UrduScreenNavigationProp>();
  const fontsReady = useUrduFonts(true);

  return (
    <ScreenWrapper showBackButton hideHomeButton homeRoute="Class9">
      {!fontsReady ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
      ) : (
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.buttonsContainer}>
            {CATEGORIES.map((c) => (
              <View key={c.topic} style={styles.buttonWrapper}>
                <ColorButton
                  centerLabel
                  urdu
                  testID={`button-c9-urdu-${c.topic.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  title={c.title}
                  icon={c.icon}
                  colors={c.colors}
                  onPress={() =>
                    navigation.navigate("ChapterList", {
                      subject: "Class 9 Urdu",
                      topic: c.topic,
                      className: "Class 9",
                    })
                  }
                />
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </ScreenWrapper>
  );
}

export default memo(Class9UrduScreen);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.xl,
    flexGrow: 1,
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
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
