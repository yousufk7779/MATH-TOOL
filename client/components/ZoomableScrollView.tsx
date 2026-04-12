import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';

interface Props {
    children: React.ReactNode;
    contentContainerStyle?: any;
}

export const ZoomableScrollView = React.forwardRef<any, Props>(({ children, contentContainerStyle }, ref) => {
    const scale = useSharedValue(1);
    const savedScale = useSharedValue(1);

    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const savedTranslateX = useSharedValue(0);
    const savedTranslateY = useSharedValue(0);

    const pinchGesture = Gesture.Pinch()
        .onUpdate((e) => {
            scale.value = Math.max(1, savedScale.value * e.scale);
        })
        .onEnd(() => {
            if (scale.value <= 1) {
                scale.value = withTiming(1);
                translateX.value = withTiming(0);
                translateY.value = withTiming(0);
                savedScale.value = 1;
                savedTranslateX.value = 0;
                savedTranslateY.value = 0;
            } else {
                savedScale.value = scale.value;
            }
        });

    const panGesture = Gesture.Pan()
        .minPointers(1)
        .onUpdate((e) => {
            if (scale.value > 1) {
                translateX.value = savedTranslateX.value + e.translationX;
                translateY.value = savedTranslateY.value + e.translationY;
            }
        })
        .onEnd(() => {
            if (scale.value > 1) {
                savedTranslateX.value = translateX.value;
                savedTranslateY.value = translateY.value;
            }
        });

    const scrollGesture = Gesture.Native();

    const composed = Gesture.Simultaneous(scrollGesture, Gesture.Simultaneous(pinchGesture, panGesture));

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: translateX.value },
                { translateY: translateY.value },
                { scale: scale.value },
            ],
        };
    });

    return (
        <GestureDetector gesture={composed}>
            <Animated.ScrollView
                ref={ref}
                style={styles.container}
                contentContainerStyle={contentContainerStyle}
                bounces={true}
                showsVerticalScrollIndicator={false}
            >
                <Animated.View style={[animatedStyle, styles.scrollChild]}>
                    {children}
                </Animated.View>
            </Animated.ScrollView>
        </GestureDetector>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollChild: {
        flexGrow: 1,
    },
});
