import React, { memo } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Defs, LinearGradient as SvgLinearGradient, Stop, Text as SvgText } from "react-native-svg";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ColorButton } from "@/components/ColorButton";
import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

type ClassSelectorNavigationProp = NativeStackNavigationProp<RootStackParamList, "ClassSelector">;

function ClassSelectorScreen() {
  const navigation = useNavigation<ClassSelectorNavigationProp>();

  return (
    <ScreenWrapper>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.content,
          styles.centeredContent,
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerContainer}>
          <View style={styles.titleRow}>
            <ThemedText style={styles.titleWhite}>Select Your Class</ThemedText>
          </View>
          
          <View style={styles.decorationContainer}>
            <LinearGradient
              colors={['#4FC3F7', '#A089CC']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.decLine}
            />
            <LinearGradient
              colors={['#A089CC', '#C26CC1']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.decDot}
            />
            <LinearGradient
              colors={['#C26CC1', '#FF4FA3']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.decLine}
            />
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-class-10"
              title="Class 10"
              colors={JiguuColors.gradients.blue}
              onPress={() => navigation.navigate("Home")}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-class-9"
              title="Class 9"
              colors={JiguuColors.gradients.purple}
              onPress={() => navigation.navigate("Class9")}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-class-8"
              title="Class 8"
              colors={JiguuColors.gradients.pink}
              onPress={() => navigation.navigate("Class8")}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-class-7"
              title="Class 7"
              colors={JiguuColors.gradients.green}
              onPress={() => navigation.navigate("Class7")}
            />
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

export default memo(ClassSelectorScreen);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.xl,
    flexGrow: 1,
  },
  centeredContent: {
    justifyContent: "center",
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: Spacing["3xl"],
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWhite: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: "NotoSans_600SemiBold",
    letterSpacing: 0.5,
  },
  decorationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    gap: 4,
  },
  decLine: {
    width: 32,
    height: 1.5,
    borderRadius: 1,
  },
  decDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  buttonsContainer: {
    gap: Spacing.xl,
  },
  buttonWrapper: {
    width: "100%",
  },
});
