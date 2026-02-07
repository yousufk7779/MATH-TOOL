import React, { memo } from "react";
import { View, StyleSheet, Text } from "react-native";
import Svg, { Circle, Path, Line, Text as SvgText, Rect, G } from "react-native-svg";
import { JiguuColors, Typography } from "@/constants/theme";

// Diagram for Q18: Spiral of alternating semicircles
export const APSpiralDiagram = memo(() => {
    // Center A at 100, 100
    // Center B at 120, 100 (diff 0.5 unit * scale 40 = 20px)
    // Radiant increase: 0.5 -> 20px, 1.0 -> 40px, 1.5 -> 60px

    return (
        <View style={styles.container}>
            <Svg height="160" width="300" viewBox="0 0 300 160">
                <Line x1="10" y1="80" x2="290" y2="80" stroke="#555" strokeWidth="2" />
                {/* Center A */}
                <Circle cx="100" cy="80" r="3" fill="#000" />
                <SvgText x="100" y="100" fill="#333" fontSize="12" textAnchor="middle">A</SvgText>

                {/* Center B */}
                <Circle cx="120" cy="80" r="3" fill="#000" />
                <SvgText x="120" y="100" fill="#333" fontSize="12" textAnchor="middle">B</SvgText>

                {/* L1: Center A, Radius 20, Top */}
                <Path d="M 120 80 A 20 20 0 0 0 80 80" stroke="#FF5722" strokeWidth="2" fill="none" />
                <SvgText x="100" y="55" fill="#FF5722" fontSize="12" textAnchor="middle">l₁</SvgText>

                {/* L2: Center B, Radius 40 (Start 80, End 160), Bottom */}
                <Path d="M 80 80 A 40 40 0 0 0 160 80" stroke="#2196F3" strokeWidth="2" fill="none" />
                <SvgText x="120" y="135" fill="#2196F3" fontSize="12" textAnchor="middle">l₂</SvgText>

                {/* L3: Center A, Radius 60 (Start 160, End 40), Top */}
                <Path d="M 160 80 A 60 60 0 0 0 40 80" stroke="#4CAF50" strokeWidth="2" fill="none" />
                <SvgText x="100" y="15" fill="#4CAF50" fontSize="12" textAnchor="middle">l₃</SvgText>
            </Svg>
        </View>
    );
});

// Diagram for Q19: Log Pile
export const APLogPileDiagram = memo(() => {
    // Staggering circles
    const r = 10;
    const gap = 2;
    const startX = 20;
    const startY = 140;

    return (
        <View style={styles.container}>
            <Svg height="160" width="300" viewBox="0 0 300 160">
                {/* Bottom row (20 logs) - showing subset for clarity */}
                <G>
                    {[...Array(10)].map((_, i) => (
                        <Circle key={`r1-${i}`} cx={startX + i * (2 * r + gap)} cy={startY} r={r} fill="#795548" stroke="#3E2723" />
                    ))}
                    <SvgText x={startX + 10 * (2 * r + gap) + 10} y={startY + 5} fill="#333" fontSize="12">... 20 logs</SvgText>
                </G>

                {/* Second row (19 logs) */}
                <G>
                    {[...Array(9)].map((_, i) => (
                        <Circle key={`r2-${i}`} cx={startX + r + gap / 2 + i * (2 * r + gap)} cy={startY - r * 1.732} r={r} fill="#8D6E63" stroke="#3E2723" />
                    ))}
                </G>

                {/* Third row (18 logs) */}
                <G>
                    {[...Array(8)].map((_, i) => (
                        <Circle key={`r3-${i}`} cx={startX + 2 * r + gap + i * (2 * r + gap)} cy={startY - 2 * r * 1.732} r={r} fill="#A1887F" stroke="#3E2723" />
                    ))}
                </G>
                <SvgText x={startX + 50} y={20} fill="#333" fontSize="12">Pattern continues upwards...</SvgText>
            </Svg>
        </View>
    );
});

// Diagram for Q20: Potato Race
export const APPotatoRaceDiagram = memo(() => {
    return (
        <View style={styles.container}>
            <Svg height="120" width="320" viewBox="0 0 320 120">
                <Line x1="10" y1="80" x2="310" y2="80" stroke="#555" strokeWidth="2" />

                {/* Bucket at start (x=40) */}
                <Rect x="30" y="50" width="20" height="30" fill="#FFC107" stroke="#FFA000" />
                <SvgText x="40" y="100" fill="#333" fontSize="12" textAnchor="middle">Bucket</SvgText>

                {/* Potato 1 at 5m (scale: 1m = 15px? 5m = 75px + 40 = 115) */}
                <Circle cx="115" cy="80" r="6" fill="#795548" />
                <SvgText x="115" y="100" fill="#333" fontSize="12" textAnchor="middle">1st</SvgText>
                <Line x1="40" y1="40" x2="115" y2="40" stroke="#333" strokeDasharray="4,4" />
                <SvgText x="77" y="35" fill="#333" fontSize="12" textAnchor="middle">5m</SvgText>

                {/* Potato 2 at 8m (3m more -> 45px more -> 160) */}
                <Circle cx="160" cy="80" r="6" fill="#795548" />
                <SvgText x="160" y="100" fill="#333" fontSize="12" textAnchor="middle">2nd</SvgText>
                <Line x1="115" y1="40" x2="160" y2="40" stroke="#333" strokeDasharray="4,4" />
                <SvgText x="137" y="35" fill="#333" fontSize="12" textAnchor="middle">3m</SvgText>

                {/* Potato 3 at 11m (3m more -> 45px more -> 205) */}
                <Circle cx="205" cy="80" r="6" fill="#795548" />
                <SvgText x="205" y="100" fill="#333" fontSize="12" textAnchor="middle">3rd</SvgText>
                <Line x1="160" y1="40" x2="205" y2="40" stroke="#333" strokeDasharray="4,4" />
                <SvgText x="182" y="35" fill="#333" fontSize="12" textAnchor="middle">3m</SvgText>

                <SvgText x="260" y="80" fill="#333" fontSize="12">... and so on</SvgText>
            </Svg>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        borderColor: "#eee"
    }
});
