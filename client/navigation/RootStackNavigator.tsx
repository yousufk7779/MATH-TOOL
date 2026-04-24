import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { JiguuColors } from "@/constants/theme";
import HomeScreen from "@/screens/HomeScreen";
import ChapterListScreen from "@/screens/ChapterListScreen";
import SolutionScreen from "@/screens/SolutionScreen";
import QuickNotesScreen from "@/screens/QuickNotesScreen";
import NewsEventsScreen from "@/screens/NewsEventsScreen";
import AboutEducatorScreen from "@/screens/AboutEducatorScreen";
import { GlobalPYQScreen } from "@/screens/GlobalPYQScreen";
import ScienceTopicsScreen from "@/screens/ScienceTopicsScreen";


import { Note } from "@/utils/storage";
import NoteEditorScreen from "@/screens/NoteEditorScreen";
import QuizScreen from "@/screens/QuizScreen";


import ClassSelectorScreen from "@/screens/ClassSelectorScreen";
import Class9Screen from "@/screens/Class9Screen";
import Class8Screen from "@/screens/Class8Screen";
import Class7Screen from "@/screens/Class7Screen";

export type RootStackParamList = {
  ClassSelector: undefined;
  Home: undefined;
  Class9: undefined;
  Class8: undefined;
  Class7: undefined;
  ScienceTopics: { className?: string } | undefined;
  ChapterList: { subject?: string; topic?: string } | undefined;
  Solution: {
    chapterId: string;
    chapterName: string;
    exerciseId?: string;
    questionId?: string;
  };
  QuickNotes: { className?: string } | undefined;
  NoteEditor: { note?: Note; className?: string } | undefined;
  Quiz: { className?: string } | undefined;
  NewsEvents: undefined;
  AboutEducator: undefined;
  GlobalPYQ: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "none",
        contentStyle: { backgroundColor: JiguuColors.background },
      }}
    >
      <Stack.Screen name="ClassSelector" component={ClassSelectorScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Class9" component={Class9Screen} />
      <Stack.Screen name="Class8" component={Class8Screen} />
      <Stack.Screen name="Class7" component={Class7Screen} />
      <Stack.Screen name="ScienceTopics" component={ScienceTopicsScreen} />

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
      <Stack.Screen name="GlobalPYQ" component={GlobalPYQScreen} />
    </Stack.Navigator>
  );
}
