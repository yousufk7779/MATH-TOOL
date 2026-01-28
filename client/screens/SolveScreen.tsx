import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Platform,
  Keyboard,
  Alert,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useHeaderHeight } from "@react-navigation/elements";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as Haptics from "expo-haptics";

import { KeyboardAwareScrollViewCompat } from "@/components/KeyboardAwareScrollViewCompat";
import { ThemedText } from "@/components/ThemedText";
import { GradientButton } from "@/components/GradientButton";
import { ActionChip } from "@/components/ActionChip";
import { useTheme } from "@/hooks/useTheme";
import { Spacing, BorderRadius } from "@/constants/theme";
import type { RootStackParamList } from "@/navigation/RootStackNavigator";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function SolveScreen() {
  const insets = useSafeAreaInsets();
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();
  const { theme } = useTheme();
  const navigation = useNavigation<NavigationProp>();
  
  const [problemText, setProblemText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCameraPress = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Camera Permission Required",
        "Please enable camera access in your device settings to capture math problems.",
        [{ text: "OK" }]
      );
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 0.8,
      base64: true,
    });

    if (!result.canceled && result.assets[0]) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      navigation.navigate("Solution", {
        imageBase64: result.assets[0].base64,
        problemText: undefined,
      });
    }
  };

  const handleLibraryPress = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Photo Library Permission Required",
        "Please enable photo library access in your device settings to select math problems.",
        [{ text: "OK" }]
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 0.8,
      base64: true,
    });

    if (!result.canceled && result.assets[0]) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      navigation.navigate("Solution", {
        imageBase64: result.assets[0].base64,
        problemText: undefined,
      });
    }
  };

  const handleSubmitText = () => {
    if (!problemText.trim()) return;
    Keyboard.dismiss();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    navigation.navigate("Solution", {
      problemText: problemText.trim(),
      imageBase64: undefined,
    });
    setProblemText("");
  };

  return (
    <KeyboardAwareScrollViewCompat
      style={[styles.container, { backgroundColor: theme.backgroundRoot }]}
      contentContainerStyle={[
        styles.content,
        {
          paddingTop: headerHeight + Spacing.xl,
          paddingBottom: tabBarHeight + Spacing["3xl"],
        },
      ]}
      scrollIndicatorInsets={{ bottom: insets.bottom }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.heroSection}>
        <Image
          source={require("../../assets/images/hero-illustration.png")}
          style={styles.heroImage}
          resizeMode="contain"
        />
        <ThemedText type="h2" style={styles.heroTitle}>
          What math problem can I help with?
        </ThemedText>
        <ThemedText type="body" style={[styles.heroSubtitle, { color: theme.textSecondary }]}>
          Take a photo or type your problem to get step-by-step solutions
        </ThemedText>
      </View>

      <View style={styles.cameraSection}>
        <GradientButton
          onPress={handleCameraPress}
          size="large"
          icon={<Feather name="camera" size={24} color="#FFFFFF" />}
          style={styles.cameraButton}
        >
          Capture Problem
        </GradientButton>
      </View>

      <View style={styles.chipsContainer}>
        <ActionChip
          onPress={handleLibraryPress}
          icon={<Feather name="image" size={16} color={theme.primary} />}
        >
          Photo from library
        </ActionChip>
      </View>

      <View style={styles.divider}>
        <View style={[styles.dividerLine, { backgroundColor: theme.border }]} />
        <ThemedText type="small" style={[styles.dividerText, { color: theme.textSecondary }]}>
          Or type your problem
        </ThemedText>
        <View style={[styles.dividerLine, { backgroundColor: theme.border }]} />
      </View>

      <View style={styles.inputSection}>
        <TextInput
          style={[
            styles.textInput,
            {
              backgroundColor: theme.backgroundDefault,
              borderColor: theme.border,
              color: theme.text,
            },
          ]}
          placeholder="e.g., solve 2x + 5 = 15"
          placeholderTextColor={theme.textSecondary}
          value={problemText}
          onChangeText={setProblemText}
          multiline
          textAlignVertical="top"
          returnKeyType="done"
          blurOnSubmit
          testID="input-problem"
        />
        <GradientButton
          onPress={handleSubmitText}
          disabled={!problemText.trim()}
          icon={<Feather name="send" size={18} color="#FFFFFF" />}
          style={styles.submitButton}
        >
          Solve
        </GradientButton>
      </View>
    </KeyboardAwareScrollViewCompat>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing.lg,
  },
  heroSection: {
    alignItems: "center",
    marginBottom: Spacing["3xl"],
  },
  heroImage: {
    width: 180,
    height: 180,
    marginBottom: Spacing.xl,
  },
  heroTitle: {
    textAlign: "center",
    marginBottom: Spacing.sm,
  },
  heroSubtitle: {
    textAlign: "center",
    paddingHorizontal: Spacing.xl,
  },
  cameraSection: {
    marginBottom: Spacing.xl,
  },
  cameraButton: {
    width: "100%",
  },
  chipsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: Spacing.sm,
    marginBottom: Spacing["2xl"],
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Spacing.xl,
  },
  dividerLine: {
    flex: 1,
    height: 1,
  },
  dividerText: {
    marginHorizontal: Spacing.lg,
  },
  inputSection: {
    gap: Spacing.md,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: BorderRadius.sm,
    padding: Spacing.lg,
    fontSize: 16,
    minHeight: 100,
    ...Platform.select({
      ios: {},
      android: {},
      web: { outlineStyle: "none" as any },
    }),
  },
  submitButton: {
    alignSelf: "flex-end",
  },
});
