import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainTabNavigator from "@/navigation/MainTabNavigator";
import SolutionScreen from "@/screens/SolutionScreen";
import ProblemDetailScreen from "@/screens/ProblemDetailScreen";
import { useScreenOptions } from "@/hooks/useScreenOptions";

interface HistoryItem {
  id: string;
  problem: string;
  category: string;
  answer: string;
  steps: Array<{
    stepNumber: number;
    title: string;
    explanation: string;
    formula?: string;
  }>;
  createdAt: string;
}

export type RootStackParamList = {
  Main: undefined;
  Solution: {
    problemText?: string;
    imageBase64?: string;
  };
  ProblemDetail: {
    historyItem: HistoryItem;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Main"
        component={MainTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Solution"
        component={SolutionScreen}
        options={{
          presentation: "modal",
          headerTitle: "Solution",
        }}
      />
      <Stack.Screen
        name="ProblemDetail"
        component={ProblemDetailScreen}
        options={({ route }) => ({
          headerTitle: route.params.historyItem.category,
        })}
      />
    </Stack.Navigator>
  );
}
