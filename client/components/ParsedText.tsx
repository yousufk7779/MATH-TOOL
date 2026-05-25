import React, { memo } from "react";
import { useWindowDimensions } from "react-native";
import RenderHtml, { defaultSystemFonts } from "react-native-render-html";
import { JiguuColors } from "@/constants/theme";

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
    fontFamily: "NotoSans_400Regular",
    lineHeight: 28,
  },
  p: {
    marginBottom: 8,
    marginTop: 0,
    fontFamily: "NotoSans_400Regular",
  },
  b: {
    fontFamily: "NotoSans_400Regular",
  },
  strong: {
    fontFamily: "NotoSans_400Regular",
  },
  i: {
    fontStyle: "italic",
    fontFamily: "NotoSans_400Regular",
  },
  em: {
    fontStyle: "italic",
    fontFamily: "NotoSans_400Regular",
  },
  div: {
    marginBottom: 4,
    fontFamily: "NotoSans_400Regular",
  },
  span: {
    fontFamily: "NotoSans_400Regular",
  },
  sup: {
    textAlignVertical: "top",
    fontSize: 12,
    lineHeight: 18,
  },
  sub: {
    textAlignVertical: "bottom",
    fontSize: 12,
    lineHeight: 18,
  },
};

export const ParsedText = memo(
  function ParsedText({
    children,
    style,
    Component,
    accentColor,
    classesStyles,
    tagsStyles,
    ...rest
  }: ParsedTextProps) {
    const { width } = useWindowDimensions();

    if (!children) return null;

    // Flatten incoming style to apply to base body style
    const flattenedStyle = Array.isArray(style)
      ? style.reduce((acc, curr) => ({ ...acc, ...curr }), {})
      : style || {};

    // Merge incoming styles with default tag styles
    const dynamicTagsStyles = {
      ...defaultTagsStyles,
      ...tagsStyles,
      body: {
        ...defaultTagsStyles.body,
        ...tagsStyles?.body,
        ...flattenedStyle,
        marginBottom: 0,
      },
    };

    // Use passed classesStyles or keep empty object
    const dynamicClassesStyles = {
      ...classesStyles,
    };

    // Wrap in a div to ensure body styles apply if content is just text
    const htmlContent = `<body>${children}</body>`;

    // Add custom fonts to system fonts so RenderHtml doesn't strip them
    const systemFonts = [
      ...defaultSystemFonts,
      "NotoSans_400Regular",
      "NotoSans_400Regular",
    ];

    return (
      <RenderHtml
        contentWidth={width - 48}
        source={{ html: htmlContent }}
        tagsStyles={dynamicTagsStyles as any}
        classesStyles={dynamicClassesStyles as any}
        baseStyle={flattenedStyle as any}
        enableExperimentalMarginCollapsing={true}
        systemFonts={systemFonts}
        {...rest}
      />
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.children === nextProps.children &&
      JSON.stringify(prevProps.style) === JSON.stringify(nextProps.style) &&
      JSON.stringify(prevProps.tagsStyles) ===
        JSON.stringify(nextProps.tagsStyles) &&
      JSON.stringify(prevProps.classesStyles) ===
        JSON.stringify(nextProps.classesStyles)
    );
  },
);
