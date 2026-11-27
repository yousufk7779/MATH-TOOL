import React, { memo } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ColorButton } from "@/components/ColorButton";
import { Spacing } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

type Class9EnglishScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Class9English"
>;

// Class 9 English (JKBOSE — Tulip Series Book-IX). Exact replica of Class10EnglishScreen;
// each category button uses its own gradient from the Class Selector palette.
const CATEGORIES: { topic: string; title: string; icon: string; colors: string[] }[] = [
  { topic: "Prose", title: "PROSE", icon: "📖", colors: ["#EC008C", "#FC6767"] },
  { topic: "Poetry", title: "POETRY", icon: "✒️", colors: ["#00C6FF", "#0072FF"] },
  { topic: "Short Stories", title: "SHORT STORIES", icon: "📚", colors: ["#F39C12", "#D35400"] },
  { topic: "Plays", title: "PLAYS", icon: "🎭", colors: ["#00B09B", "#96C93D"] },
  { topic: "Grammar & Writing Skills", title: "GRAMMAR & WRITING", icon: "✍️", colors: ["#E040FB", "#7B1FA2"] },
];

function Class9EnglishScreen() {
  const navigation = useNavigation<Class9EnglishScreenNavigationProp>();

  return (
    <ScreenWrapper showBackButton hideHomeButton homeRoute="Class9">
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
                testID={`button-c9-eng-${c.topic.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                title={c.title}
                icon={c.icon}
                colors={c.colors}
                onPress={() =>
                  navigation.navigate("ChapterList", {
                    subject: "Class 9 English",
                    topic: c.topic,
                    className: "Class 9",
                  })
                }
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

export default memo(Class9EnglishScreen);

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
});
