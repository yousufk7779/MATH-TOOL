import React from 'react';
import { StyleSheet, useWindowDimensions, ViewStyle, TextStyle } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { JiguuColors } from '@/constants/theme';

interface ParsedTextProps {
    children: string;
    style?: any;
    Component?: React.ComponentType<any>;
    accentColor?: string;
    [key: string]: any;
}

// Global styles for HTML content tags
const tagsStyles = {
    body: {
        fontSize: 18,
        color: JiguuColors.textPrimary,
        fontFamily: 'Kalam_400Regular',
        lineHeight: 28,
    },
    p: {
        marginBottom: 8,
        marginTop: 0,
        fontFamily: 'Kalam_400Regular',
    },
    b: {
        fontFamily: 'Kalam_700Bold',
    },
    strong: {
        fontFamily: 'Kalam_700Bold',
    },
    i: {
        fontStyle: 'italic',
        fontFamily: 'Kalam_400Regular',
    },
    em: {
        fontStyle: 'italic',
        fontFamily: 'Kalam_400Regular',
    },
    div: {
        marginBottom: 4,
        fontFamily: 'Kalam_400Regular',
    },
    span: {
        fontFamily: 'Kalam_400Regular',
    }
};

const classesStyles = {
    'fraction': {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        marginHorizontal: 4,
        fontFamily: 'Kalam_400Regular',
    },
    'numerator': {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingHorizontal: 2,
        textAlign: 'center',
        fontFamily: 'Kalam_700Bold',
        fontSize: 16,
    },
    'denominator': {
        paddingTop: 1,
        textAlign: 'center',
        fontFamily: 'Kalam_700Bold',
        fontSize: 16,
    },
    'formula': {
        color: '#2E7D32',
        fontFamily: 'Kalam_700Bold',
        fontSize: 18,
    },
    'bold': {
        fontFamily: 'Kalam_700Bold',
    }
};

export const ParsedText = ({ children, style, Component, accentColor, ...rest }: ParsedTextProps) => {
    const { width } = useWindowDimensions();

    if (!children) return null;

    // Flatten incoming style to apply to base body style
    const flattenedStyle = StyleSheet.flatten(style) || {};

    // Merge incoming styles with default tag styles
    // Note: RenderHtml 'baseStyle' applies to the root, but 'tagsStyles.body' is safer for text inheritance
    const dynamicTagsStyles = {
        ...tagsStyles,
        body: {
            ...tagsStyles.body,
            ...flattenedStyle, // Apply color, fontFamily, fontSize from props
            marginBottom: 0, // Reset margin for inline-like usage
        }
    };

    // If accentColor is provided, we can use it for specific classes if needed
    const dynamicClassesStyles = {
        ...classesStyles,
        // potentially add accent colored classes here
    };

    // Wrap in a div to ensure body styles apply if content is just text
    const htmlContent = `<body>${children}</body>`;

    return (
        <RenderHtml
            contentWidth={width - 48} // standardized padding subtraction
            source={{ html: htmlContent }}
            tagsStyles={dynamicTagsStyles as any}
            classesStyles={dynamicClassesStyles as any}
            baseStyle={flattenedStyle as any}
            enableExperimentalMarginCollapsing={true}
            {...rest}
        />
    );
};

const styles = StyleSheet.create({});
