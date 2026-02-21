import React, { memo } from "react";
import { StyleSheet, View, ScrollView, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ColorButton } from "@/components/ColorButton";
import { JiguuColors, Spacing } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

function SocialScienceTopicsScreen() {
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
                    <View style={styles.buttonWrapper}>
                        <ColorButton
                            testID="button-history"
                            title="HISTORY"
                            color="#F44336"
                            onPress={() => navigation.navigate("ChapterList", { subject: "Social Science", topic: "History" })}
                        />
                    </View>

                    <View style={styles.buttonWrapper}>
                        <ColorButton
                            testID="button-geography"
                            title="GEOGRAPHY"
                            color="#2196F3"
                            onPress={() => navigation.navigate("ChapterList", { subject: "Social Science", topic: "Geography" })}
                        />
                    </View>

                    <View style={styles.buttonWrapper}>
                        <ColorButton
                            testID="button-political-science"
                            title="POLITICAL SCIENCE"
                            color="#9C27B0"
                            onPress={() => navigation.navigate("ChapterList", { subject: "Social Science", topic: "Political Science" })}
                        />
                    </View>

                    <View style={styles.buttonWrapper}>
                        <ColorButton
                            testID="button-disaster-management"
                            title="DISASTER MANAGEMENT"
                            color="#FF9800"
                            onPress={() => navigation.navigate("ChapterList", { subject: "Social Science", topic: "Disaster Management" })}
                        />
                    </View>

                    <View style={styles.buttonWrapper}>
                        <ColorButton
                            testID="button-road-safety"
                            title="ROAD SAFETY"
                            color="#607D8B"
                            onPress={() => navigation.navigate("ChapterList", { subject: "Social Science", topic: "Road Safety" })}
                        />
                    </View>
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
}

export default memo(SocialScienceTopicsScreen);

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
