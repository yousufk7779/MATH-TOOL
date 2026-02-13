import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ParsedTextProps {
    children: string;
    style?: any;
    Component?: React.ComponentType<any>;
    accentColor?: string;
    // If we need to pass props to the underlying component
    [key: string]: any;
}

export const ParsedText = ({ children, style, Component = Text, accentColor, ...rest }: ParsedTextProps) => {
    if (!children) return null;
    const parts = children.split(/({{frac}}.*?{{over}}.*?{{endfrac}})/g);

    // Helper to flatten style and get color (for separator)
    const flattenedStyle = StyleSheet.flatten(style);
    const textColor = flattenedStyle?.color || '#000';

    return (
        <Component style={style} {...rest}>
            {parts.map((part, index) => {
                const match = part.match(/{{frac}}(.*?){{over}}(.*?){{endfrac}}/);
                if (match) {
                    const numerator = match[1];
                    const denominator = match[2];
                    return (
                        <View key={index} style={styles.fractionContainer}>
                            <View style={styles.numeratorContainer}>
                                <Text style={[styles.numeratorText, { color: textColor }, { fontSize: (flattenedStyle?.fontSize || 14) * 0.8 }]}>{numerator}</Text>
                            </View>
                            <View style={[styles.separator, { backgroundColor: textColor }]} />
                            <View style={styles.denominatorContainer}>
                                <Text style={[styles.denominatorText, { color: textColor }, { fontSize: (flattenedStyle?.fontSize || 14) * 0.8 }]}>{denominator}</Text>
                            </View>
                        </View>
                    );
                }
                return <Text key={index}>{part}</Text>;
            })}
        </Component>
    );
};

const styles = StyleSheet.create({
    fractionContainer: {
        alignItems: 'center',
        justifyContent: 'center', // Center vertically within the line height
        marginHorizontal: 3,
        // Adjust vertical alignment to match text baseline better
        transform: [{ translateY: 4 }],
    },
    numeratorContainer: {
        alignItems: 'center',
        marginBottom: 0,
        paddingHorizontal: 1,
    },
    numeratorText: {
        textAlign: 'center',
        lineHeight: 12,
        fontWeight: '500',
    },
    separator: {
        height: 1,
        width: '100%',
        minWidth: 8,
    },
    denominatorContainer: {
        alignItems: 'center',
        marginTop: 0,
        paddingHorizontal: 1,
    },
    denominatorText: {
        textAlign: 'center',
        lineHeight: 12,
        fontWeight: '500',
    }
});
