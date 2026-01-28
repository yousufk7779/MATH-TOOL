import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SolveScreen from "@/screens/SolveScreen";
import { HeaderTitle } from "@/components/HeaderTitle";
import { useScreenOptions } from "@/hooks/useScreenOptions";

export type SolveStackParamList = {
  Solve: undefined;
};

const Stack = createNativeStackNavigator<SolveStackParamList>();

export default function SolveStackNavigator() {
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Solve"
        component={SolveScreen}
        options={{
          headerTitle: () => <HeaderTitle title="JIGUU" />,
        }}
      />
    </Stack.Navigator>
  );
}
