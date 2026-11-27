import { Platform } from "react-native";
import * as Haptics from "expo-haptics";

/**
 * Light tap feedback that can never crash the app.
 * Skipped on web; if the native haptics module is missing or the device rejects the call
 * (e.g. "Haptic.impactAsync is not available on android" in some Expo Go builds),
 * the error is swallowed instead of becoming an unhandled promise rejection.
 */
export function lightImpact(): void {
  if (Platform.OS === "web") return;
  try {
    if (typeof Haptics?.impactAsync !== "function") return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
  } catch {
    // native module unavailable — haptics are optional
  }
}
