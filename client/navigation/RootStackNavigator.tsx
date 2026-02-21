import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { JiguuColors } from "@/constants/theme";
import HomeScreen from "@/screens/HomeScreen";
import ChapterListScreen from "@/screens/ChapterListScreen";
import SolutionScreen from "@/screens/SolutionScreen";
import QuickNotesScreen from "@/screens/QuickNotesScreen";
import NewsEventsScreen from "@/screens/NewsEventsScreen";
import AboutEducatorScreen from "@/screens/AboutEducatorScreen";
import BookmarksScreen from "@/screens/BookmarksScreen";
import ImportantQuestionsScreen from "@/screens/ImportantQuestionsScreen";
import { GlobalPYQScreen } from "@/screens/GlobalPYQScreen";
import ScienceTopicsScreen from "@/screens/ScienceTopicsScreen";
import SocialScienceTopicsScreen from "@/screens/SocialScienceTopicsScreen";
import EnglishTopicsScreen from "@/screens/EnglishTopicsScreen";

import { Note } from "@/utils/storage";
import NoteEditorScreen from "@/screens/NoteEditorScreen";
import QuizScreen from "@/screens/QuizScreen";
import { SearchProvider } from "@/context/SearchContext";

export type RootStackParamList = {
  Home: undefined;
  ScienceTopics: undefined;
  SocialScienceTopics: undefined;
  EnglishTopics: undefined;
  ChapterList: { subject?: string; topic?: string } | undefined;
  Solution: {
    chapterId: string;
    chapterName: string;
    section?: string;
    exerciseId?: string;
    questionId?: string;
  };
  QuickNotes: undefined;
  NoteEditor: { note?: Note } | undefined;
  Quiz: undefined;
  NewsEvents: undefined;
  AboutEducator: undefined;
  Bookmarks: undefined;
  ImportantQuestions: undefined;
  GlobalPYQ: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <SearchProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "none",
          contentStyle: { backgroundColor: JiguuColors.background },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ScienceTopics" component={ScienceTopicsScreen} />
        <Stack.Screen name="SocialScienceTopics" component={SocialScienceTopicsScreen} />
        <Stack.Screen name="EnglishTopics" component={EnglishTopicsScreen} />
        <Stack.Screen name="ChapterList" component={ChapterListScreen} />
        <Stack.Screen name="Solution" component={SolutionScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="QuickNotes" component={QuickNotesScreen} />
        <Stack.Screen
          name="NoteEditor"
          component={NoteEditorScreen}
          options={{
            presentation: "modal",
            animation: "slide_from_bottom"
          }}
        />
        <Stack.Screen name="NewsEvents" component={NewsEventsScreen} />
        <Stack.Screen name="AboutEducator" component={AboutEducatorScreen} />
        <Stack.Screen name="Bookmarks" component={BookmarksScreen} />
        <Stack.Screen name="ImportantQuestions" component={ImportantQuestionsScreen} />
        <Stack.Screen name="GlobalPYQ" component={GlobalPYQScreen} />
      </Stack.Navigator>
    </SearchProvider>
  );
}
