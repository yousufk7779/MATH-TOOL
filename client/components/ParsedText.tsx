import React from 'react';
import { StyleSheet, useWindowDimensions, ViewStyle, TextStyle } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { JiguuColors } from '@/constants/theme';

interface ParsedTextProps {
    children: string;
    style?: any;
    Component?: React.ComponentType<any>;
    accentColor?: string;
    classesStyles?: any;
    tagsStyles?: any;
}

// Global styles for HTML content tags
const defaultTagsStyles = {
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

export const ParsedText = ({ children, style, Component, accentColor, classesStyles, tagsStyles, ...rest }: ParsedTextProps) => {
    const { width } = useWindowDimensions();

    if (!children) return null;

    // Flatten incoming style to apply to base body style
    const flattenedStyle = StyleSheet.flatten(style) || {};

    // Merge incoming styles with default tag styles
    const dynamicTagsStyles = {
        ...defaultTagsStyles,
        ...tagsStyles,
        body: {
            ...defaultTagsStyles.body,
            ...tagsStyles?.body,
            ...flattenedStyle,
            marginBottom: 0,
        }
    };

    // Use passed classesStyles or keep empty object
    const dynamicClassesStyles = {
        ...classesStyles,
    };

    // Wrap in a div to ensure body styles apply if content is just text
    const htmlContent = `<body>${children}</body>`;

    return (
        <RenderHtml
            contentWidth={width - 48}
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
