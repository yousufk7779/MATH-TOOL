import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_500Medium,
  NotoSans_600SemiBold,
  NotoSans_700Bold,
} from "@expo-google-fonts/noto-sans";

import * as SplashScreen from "expo-splash-screen";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";

import RootStackNavigator from "@/navigation/RootStackNavigator";
import { useUpdateCheck } from "@/hooks/useUpdateCheck";

import { ErrorBoundary } from "@/components/ErrorBoundary";

import { JiguuColors } from "@/constants/theme";

// Keep splash screen visible until app is mounted
SplashScreen.preventAutoHideAsync().catch(() => {});

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: JiguuColors.background,
    card: JiguuColors.background,
  },
};

export default function App() {
  useUpdateCheck();

  // Load fonts
  const [fontsLoaded, fontError] = useFonts({
    NotoSans_400Regular,
    NotoSans_500Medium,
    NotoSans_600SemiBold,
    NotoSans_700Bold,
  });

  React.useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [fontsLoaded, fontError]);

  React.useEffect(() => {
    // Fallback safety timers to ensure splash ALWAYS hides immediately
    SplashScreen.hideAsync().catch(() => {});
    const t1 = setTimeout(() => {
      SplashScreen.hideAsync().catch(() => {});
    }, 200);
    const t2 = setTimeout(() => {
      SplashScreen.hideAsync().catch(() => {});
    }, 800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider style={styles.safeArea}>
          <GestureHandlerRootView style={styles.root}>
            <KeyboardProvider>
              <NavigationContainer theme={navTheme}>
                <RootStackNavigator />
              </NavigationContainer>
              <StatusBar style="dark" />
            </KeyboardProvider>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: JiguuColors.background,
    // @ts-ignore - Web only property to disable selection globally
    userSelect: "none",
  },
  safeArea: {
    flex: 1,
    backgroundColor: JiguuColors.background,
  },
});
