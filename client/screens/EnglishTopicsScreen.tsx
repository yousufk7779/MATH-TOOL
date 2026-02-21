import React, { memo } from "react";
import { StyleSheet, View, ScrollView, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ColorButton } from "@/components/ColorButton";
import { JiguuColors, Spacing } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

function EnglishTopicsScreen() {
    const navigation = useNavigation<NavigationProp>();
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

    return (
        <ScreenWrapper>
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
                            testID="button-prose"
                            title="PROSE"
                            color="#3F51B5"
                            onPress={() => navigation.navigate("ChapterList")} // Placeholder for now
                        />
                    </View>

                    <View style={styles.buttonWrapper}>
                        <ColorButton
                            testID="button-poetry"
                            title="POETRY"
                            color="#E91E63"
                            onPress={() => navigation.navigate("ChapterList")} // Placeholder for now
                        />
                    </View>

                    <View style={styles.buttonWrapper}>
                        <ColorButton
                            testID="button-short-stories"
                            title="SHORT STORIES"
                            color="#009688"
                            onPress={() => navigation.navigate("ChapterList")} // Placeholder for now
                        />
                    </View>

                    <View style={styles.buttonWrapper}>
                        <ColorButton
                            testID="button-grammar"
                            title="GRAMMER"
                            color="#FF5722"
                            onPress={() => navigation.navigate("ChapterList")} // Placeholder for now
                        />
                    </View>
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
}

export default memo(EnglishTopicsScreen);

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
