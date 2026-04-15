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
import { Animated, Easing, Image, Text, Appearance } from "react-native";
import { Asset } from "expo-asset";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";

import RootStackNavigator from "@/navigation/RootStackNavigator";
import { JiguuLogo } from "@/components/JiguuLogo";
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

const LoadingScreen = ({ onReady }: { onReady: () => void }) => {
  const scrollAnim = React.useRef(new Animated.Value(-60)).current;
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    // Initial fade in for the loading screen itself
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
        // Only signal ready once we've at least started rendering the dark background
        if (onReady) onReady();
    });

    Animated.loop(
      Animated.sequence([
        Animated.timing(scrollAnim, {
          toValue: 200,
          duration: 1500,
          easing: Easing.bezier(0.4, 0, 0.2, 1),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [scrollAnim, fadeAnim]);

  return (
    <View style={styles.loading}>
      <StatusBar style="light" />
      <Animated.View style={[styles.splashContent, { opacity: fadeAnim }]}>
        <Image
          source={require("./assets/images/jiguu-logo.png")}
          style={styles.splashLogo}
          resizeMode="contain"
        />
        <View style={styles.splashSubtitle}>
          <Text style={[styles.subtitleGray, { fontFamily: "NotoSans_600SemiBold" }]}>Learn Smart</Text>
          <Text style={[styles.subtitlePink, { fontFamily: "NotoSans_500Medium" }]}> • Class 10</Text>
        </View>
        <View style={styles.loaderContainer}>
          <View style={styles.loaderTrack}>
            <Animated.View
              style={[
                styles.loaderBar,
                {
                  transform: [{ translateX: scrollAnim }],
                },
              ]}
            />
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default function App() {
  const [appIsReady, setAppIsReady] = React.useState(false);
  const [animationReady, setAnimationReady] = React.useState(false);
  
  const [fontsLoaded, fontError] = useFonts({
    NotoSans_400Regular,
    NotoSans_500Medium,
    NotoSans_600SemiBold,
    NotoSans_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        await Asset.loadAsync([
            require("./assets/images/jiguu-logo.png"),
        ]);
      } catch (e) {
        console.warn("Error preloading assets:", e);
      }
    }
    prepare();
  }, []);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // JS UI is fully ready (fonts and assets)
      // We will hide the splash screen once the loading screen animation is ready to avoid any flicker
      
      const timer = setTimeout(() => {
        setAppIsReady(true);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [fontsLoaded, fontError]);

  const onLoadingScreenReady = useCallback(() => {
    setAnimationReady(true);
    // Hide native splash now that the loading screen has finished its initial fade-in
    SplashScreen.hideAsync().catch(() => {});
  }, []);

  if (!appIsReady) {
    return (
      <LoadingScreen onReady={onLoadingScreenReady} />
    );
  }

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
  loading: {
    flex: 1,
    backgroundColor: JiguuColors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  splashContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  splashLogo: {
    width: 250,
    height: 75,
    marginBottom: 0,
  },
  splashSubtitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translateY: -22 }], // Tighter gap than default
    marginBottom: -10,
  },
  subtitleGray: {
    fontSize: 15,
    letterSpacing: 1,
    color: "#E0E0E0",
    fontFamily: "NotoSans_600SemiBold",
  },
  subtitlePink: {
    fontSize: 15,
    letterSpacing: 1,
    color: JiguuColors.accent2,
    fontFamily: "NotoSans_500Medium",
  },
  loaderContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  loaderTrack: {
    width: 140,
    height: 2,
    backgroundColor: "rgba(255, 107, 157, 0.1)",
    borderRadius: 1,
    overflow: "hidden",
  },
  loaderBar: {
    width: 60,
    height: "100%",
    backgroundColor: JiguuColors.accent2,
    shadowColor: JiguuColors.accent2,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 4,
  },
});
