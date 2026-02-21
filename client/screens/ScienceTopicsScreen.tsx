import React, { memo } from "react";
import { StyleSheet, View, ScrollView, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ColorButton } from "@/components/ColorButton";
import { JiguuColors, Spacing } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

function ScienceTopicsScreen() {
    const navigation = useNavigation<NavigationProp>();
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

    return (
        <ScreenWrapper showBackButton>
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
                    <View style={styles.actionButtons}>
                        <View style={styles.actionButtonWrapper}>
                            <ColorButton
                                testID="button-bookmarks"
                                title="BOOKMARKS"
                                color={JiguuColors.accent2}
                                onPress={() => navigation.navigate("Bookmarks")}
                            />
                        </View>
                        <View style={styles.actionButtonWrapper}>
                            <ColorButton
                                testID="button-important"
                                title="IMPORTANT"
                                color={JiguuColors.accent3}
                                onPress={() => navigation.navigate("ImportantQuestions")}
                            />
                        </View>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <ColorButton
                            testID="button-physics"
                            title="PHYSICS"
                            color="#E91E63"
                            onPress={() => navigation.navigate("ChapterList", { subject: "Science", topic: "Physics" })}
                        />
                    </View>

                    <View style={styles.buttonWrapper}>
                        <ColorButton
                            testID="button-chemistry"
                            title="CHEMISTRY"
                            color="#9C27B0"
                            onPress={() => navigation.navigate("ChapterList", { subject: "Science", topic: "Chemistry" })}
                        />
                    </View>

                    <View style={styles.buttonWrapper}>
                        <ColorButton
                            testID="button-biology"
                            title="BIOLOGY"
                            color="#4CAF50"
                            onPress={() => navigation.navigate("ChapterList", { subject: "Science", topic: "Biology" })}
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
    actionButtons: {
        flexDirection: "row",
        gap: Spacing.md,
    },
    actionButtonWrapper: {
        flex: 1,
    },
});
