import React from "react";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
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

// Global safeguard for font scaling across any raw Text components
try {
  if ((Text as any).defaultProps == null) {
    (Text as any).defaultProps = {};
  }
  (Text as any).defaultProps.maxFontSizeMultiplier = 1.25;
} catch {}

// Keep native splash visible until root component mounts and fonts/UI are ready
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

  const hideSplash = React.useCallback(() => {
    SplashScreen.hideAsync().catch(() => {});
  }, []);

  React.useEffect(() => {
    if (fontsLoaded || fontError) {
      hideSplash();
    }
  }, [fontsLoaded, fontError, hideSplash]);

  React.useEffect(() => {
    // Immediate and staggered safety calls to guarantee splash is always dismissed
    hideSplash();
    const t1 = setTimeout(hideSplash, 150);
    const t2 = setTimeout(hideSplash, 600);
    const t3 = setTimeout(hideSplash, 1200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [hideSplash]);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider style={styles.safeArea}>
          <GestureHandlerRootView style={styles.root}>
            <NavigationContainer theme={navTheme}>
              <RootStackNavigator />
            </NavigationContainer>
            <StatusBar style="dark" />
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
