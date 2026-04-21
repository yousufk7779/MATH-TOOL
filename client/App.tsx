import React, { useEffect, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_500Medium,
  NotoSans_600SemiBold,
  NotoSans_700Bold,
} from "@expo-google-fonts/noto-sans";



import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";

import RootStackNavigator from "@/navigation/RootStackNavigator";

import { ErrorBoundary } from "@/components/ErrorBoundary";

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
  const [appIsReady, setAppIsReady] = React.useState(false);
  
  const [fontsLoaded, fontError] = useFonts({
    NotoSans_400Regular,
    NotoSans_500Medium,
    NotoSans_600SemiBold,
    NotoSans_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      setAppIsReady(true);
    }

    // Robust fallback: Force app readiness after 3 seconds to prevent splash screen hang
    const timeout = setTimeout(() => {
      setAppIsReady(true);
    }, 3000);
    
    return () => clearTimeout(timeout);
  }, [fontsLoaded, fontError]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync().catch(() => {});
    }
  }, [appIsReady]);

  // Fallback to hide splash screen in case onLayoutRootView is delayed or fails on Android
  useEffect(() => {
    if (appIsReady) {
      const splashTimeout = setTimeout(async () => {
        await SplashScreen.hideAsync().catch(() => {});
      }, 1000);
      return () => clearTimeout(splashTimeout);
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider style={styles.safeArea}>
          <GestureHandlerRootView style={styles.root} onLayout={onLayoutRootView}>
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
