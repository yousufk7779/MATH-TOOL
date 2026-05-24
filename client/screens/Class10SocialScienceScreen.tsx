import React, { memo } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ColorButton } from "@/components/ColorButton";
import { JiguuColors, Spacing } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { getHomeRoute } from "@/utils/navigation-utils";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

function Class10SocialScienceScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route =
    useRoute<RouteProp<RootStackParamList, "Class10SocialScience">>();
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const className = "Class 10";
  const subjectName = "Class 10 Social Science";

  const homeRoute = getHomeRoute(className);

  return (
    <ScreenWrapper showBackButton hideHomeButton homeRoute={homeRoute}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.content,
          {
            paddingTop: isLandscape ? Spacing.md : 0,
            paddingBottom: isLandscape ? 100 : 100,
            marginTop: isLandscape ? 0 : -20,
            justifyContent: isLandscape ? "flex-start" : "center",
            flexGrow: isLandscape ? 0 : 1,
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-history"
              title="HISTORY"
              icon="🏰"
              colors={JiguuColors.gradients.deepOrange}
              onPress={() =>
                navigation.navigate("ChapterList", {
                  subject: subjectName,
                  topic: "History",
                  className: className,
                })
              }
            />
          </View>

          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-geography"
              title="GEOGRAPHY"
              icon="🌍"
              colors={JiguuColors.gradients.green}
              onPress={() =>
                navigation.navigate("ChapterList", {
                  subject: subjectName,
                  topic: "Geography",
                  className: className,
                })
              }
            />
          </View>

          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-civics"
              title="POLITICAL SCIENCE"
              icon="⚖️"
              colors={JiguuColors.gradients.purple}
              onPress={() =>
                navigation.navigate("ChapterList", {
                  subject: subjectName,
                  topic: "Civics",
                  className: className,
                })
              }
            />
          </View>

          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-economics"
              title="ECONOMICS"
              icon="🪙"
              colors={JiguuColors.gradients.gold}
              onPress={() =>
                navigation.navigate("ChapterList", {
                  subject: subjectName,
                  topic: "Economics",
                  className: className,
                })
              }
            />
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

export default memo(Class10SocialScienceScreen);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing["2xl"],
  },
  buttonsContainer: {
    gap: Spacing.md,
  },
  buttonWrapper: {
    width: "100%",
  },
});
