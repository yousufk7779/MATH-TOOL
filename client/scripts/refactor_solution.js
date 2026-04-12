const fs = require('fs');

const path = 'd:/All NCERT SOLUTIONS/client/screens/SolutionScreen.tsx';
let content = fs.readFileSync(path, 'utf8');

// Update HtmlText component definition
content = content.replace(
    'const HtmlText = memo(({ html, style, isCh7 }: { html: string, style?: any, isCh7?: boolean }) => {',
    'const HtmlText = memo(({ html, style, isCh7, isCh8 }: { html: string, style?: any, isCh7?: boolean, isCh8?: boolean }) => {'
);

// Update systemFonts array
content = content.replace(
    "systemFonts={['NotoSans_400Regular', 'NotoSans_700Bold', 'NotoSans_400Regular', 'NotoSans_700Bold']}",
    "systemFonts={['NotoSans_400Regular', 'NotoSans_700Bold', 'NotoSans_400Regular', 'NotoSans_700Bold', 'NotoSans_400Regular', 'NotoSans_700Bold']}"
);

// Update tagsStyles mapping
content = content.replace(
    `tagsStyles={{
        b: { fontFamily: isCh7 ? 'NotoSans_700Bold' : 'NotoSans_700Bold' },
        strong: { fontFamily: isCh7 ? 'NotoSans_700Bold' : 'NotoSans_700Bold' },
        span: { fontFamily: isCh7 ? 'NotoSans_400Regular' : 'NotoSans_400Regular' },
      }}`,
    `tagsStyles={{
        b: { fontFamily: isCh8 ? 'NotoSans_700Bold' : (isCh7 ? 'NotoSans_700Bold' : 'NotoSans_700Bold') },
        strong: { fontFamily: isCh8 ? 'NotoSans_700Bold' : (isCh7 ? 'NotoSans_700Bold' : 'NotoSans_700Bold') },
        span: { fontFamily: isCh8 ? 'NotoSans_400Regular' : (isCh7 ? 'NotoSans_400Regular' : 'NotoSans_400Regular') },
      }}`
);

// Update memo comparison
content = content.replace(
    'prevProps.isCh7 === nextProps.isCh7;',
    'prevProps.isCh7 === nextProps.isCh7 && prevProps.isCh8 === nextProps.isCh8;'
);

// Update isCh7 & isCh8 flags inside SolutionScreen
content = content.replace(
    'const isCh7 = chapterId === "ch7";\n  const isHandwritten = !isCh7; // All except Ch7 are currently handwritten',
    'const isCh7 = chapterId === "ch7";\n  const isCh8 = chapterId === "ch8";\n  const isHandwritten = !isCh7 && !isCh8;'
);

// Update hwStyle
content = content.replace(
    `const hwStyle = isCh7\n    ? { fontFamily: "NotoSans_400Regular", color: "#fff" }\n    : isHandwritten\n      ? { fontFamily: "NotoSans_400Regular", color: "#fff" }\n      : {};`,
    `const hwStyle = isCh8 ? { fontFamily: "NotoSans_400Regular", color: "#fff" } : isCh7 ? { fontFamily: "NotoSans_400Regular", color: "#fff" } : isHandwritten ? { fontFamily: "NotoSans_400Regular", color: "#fff" } : {};`
);

// Update hwTitleStyle
content = content.replace(
    `const hwTitleStyle = isCh7\n    ? { fontFamily: "NotoSans_700Bold", color: "#fff" }\n    : isHandwritten\n      ? { fontFamily: "NotoSans_700Bold", color: "#fff" }\n      : {};`,
    `const hwTitleStyle = isCh8 ? { fontFamily: "NotoSans_700Bold", color: "#fff" } : isCh7 ? { fontFamily: "NotoSans_700Bold", color: "#fff" } : isHandwritten ? { fontFamily: "NotoSans_700Bold", color: "#fff" } : {};`
);

// Update isStyledBackground
content = content.replace(
    'const isStyledBackground = isHandwritten || isCh7;',
    'const isStyledBackground = isHandwritten || isCh7 || isCh8;'
);

// Replace Typography scaled properties
const bodyReplacement = `const scaledBody = { ...Typography.body, ...(isCh8 ? { fontFamily: "NotoSans_400Regular" } : isCh7 ? { fontFamily: "NotoSans_400Regular" } : {}) };
  const scaledH3 = { ...Typography.h3, ...(isCh8 ? { fontFamily: "NotoSans_700Bold" } : isCh7 ? { fontFamily: "NotoSans_700Bold" } : {}) };
  const scaledH4 = { ...Typography.h4, ...(isCh8 ? { fontFamily: "NotoSans_700Bold" } : isCh7 ? { fontFamily: "NotoSans_700Bold" } : {}) };
  const scaledButton = { ...Typography.button, ...(isCh8 ? { fontFamily: "NotoSans_700Bold" } : isCh7 ? { fontFamily: "NotoSans_700Bold" } : {}) };
  const scaledQuestionTitle = { ...Typography.h4, ...(isCh8 ? { fontFamily: "NotoSans_400Regular" } : isCh7 ? { fontFamily: "NotoSans_400Regular" } : { fontFamily: "NotoSans_700Bold" }) };
  const scaledSmall = { ...Typography.small, ...(isCh8 ? { fontFamily: "NotoSans_400Regular" } : isCh7 ? { fontFamily: "NotoSans_400Regular" } : {}) };`;

content = content.replace(
    /const scaledBody =.*?\n.*?\n.*?\n.*?\n.*?\n.*?scaledSmall = .*?;/,
    bodyReplacement
);

// Replace properties mapping `isCh7={isCh7}` for HtmlText tags globally
content = content.replace(/isCh7=\{isCh7\}/g, "isCh7={isCh7} isCh8={isCh8}");

fs.writeFileSync(path, content);
console.log('Successfully updated SolutionScreen.tsx');
