import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Kalam_400Regular,
  Kalam_700Bold,
} from "@expo-google-fonts/kalam";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";

import RootStackNavigator from "@/navigation/RootStackNavigator";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { SavedItemsProvider } from "@/context/SavedItemsContext";
import { JiguuColors } from "@/constants/theme";

SplashScreen.preventAutoHideAsync();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: JiguuColors.background,
    card: JiguuColors.background,
  },
};

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Kalam_400Regular,
    Kalam_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync().catch(() => { });
    }
    const timer = setTimeout(() => {
      SplashScreen.hideAsync().catch(() => { });
    }, 2500); // Fail-safe to ensure splash screen hides
    return () => clearTimeout(timer);
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return <View style={styles.loading} />;
  }

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider style={styles.safeArea}>
          <GestureHandlerRootView style={styles.root}>
            <KeyboardProvider>
              <SavedItemsProvider>
                <NavigationContainer theme={navTheme}>
                  <RootStackNavigator />
                </NavigationContainer>
                <StatusBar style="dark" />
              </SavedItemsProvider>
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
  },
  safeArea: {
    flex: 1,
    backgroundColor: JiguuColors.background,
  },
  loading: {
    flex: 1,
    backgroundColor: JiguuColors.background,
  },
});
