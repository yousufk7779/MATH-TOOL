import React, { memo } from "react";
import { StyleSheet, View, ScrollView, useWindowDimensions } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ColorButton } from "@/components/ColorButton";
import { JiguuColors, Spacing } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

function ScienceTopicsScreen() {
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute<RouteProp<RootStackParamList, "ScienceTopics">>();
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

    const className = route.params?.className;
    const subjectName = className ? `${className} Science` : "Science";

    return (
        <ScreenWrapper showBackButton hideHomeButton>
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
                    }
                ]}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.buttonsContainer}>

                    <View style={styles.buttonWrapper}>
                        <ColorButton
                            testID="button-physics"
                            title="PHYSICS"
                            colors={JiguuColors.gradients.deepOrange}
                            onPress={() => navigation.navigate("ChapterList", { subject: subjectName, topic: "Physics" })}
                        />
                    </View>

                    <View style={styles.buttonWrapper}>
                        <ColorButton
                            testID="button-chemistry"
                            title="CHEMISTRY"
                            colors={JiguuColors.gradients.purple}
                            onPress={() => navigation.navigate("ChapterList", { subject: subjectName, topic: "Chemistry" })}
                        />
                    </View>

                    <View style={styles.buttonWrapper}>
                        <ColorButton
                            testID="button-biology"
                            title="LIFE SCIENCE"
                            colors={JiguuColors.gradients.green}
                            onPress={() => navigation.navigate("ChapterList", { subject: subjectName, topic: "Biology" })}
                        />
                    </View>
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
}

export default memo(ScienceTopicsScreen);

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
