import { RootStackParamList } from "@/navigation/RootStackNavigator";

/**
 * Determines the home route based on the class name or chapter ID.
 */
export const getHomeRoute = (
  className?: string,
  chapterId?: string,
): keyof RootStackParamList => {
  if (className) {
    if (className.includes("Class 9")) return "Class9";
    if (className.includes("Class 8")) return "Class8";
    if (className.includes("Class 7")) return "Class7";
  }

  if (chapterId) {
    if (chapterId.startsWith("c9-")) return "Class9";
    if (chapterId.startsWith("c8-")) return "Class8";
    if (chapterId.startsWith("c7-")) return "Class7";
  }

  // Default to Class 10 Home
  return "Home";
};
