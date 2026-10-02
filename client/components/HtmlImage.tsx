import React, { memo, useState, useEffect } from "react";
import { View, Image, StyleSheet, useWindowDimensions } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { BorderRadius, Spacing } from "@/constants/theme";

/**
 * Extracts width and height directly from base64 JPEG, PNG, or GIF data.
 * Pure JavaScript, 100% synchronous, works across React Native and Web.
 */
export function getBase64ImageDimensions(
  src: string
): { width: number; height: number; aspectRatio: number } | null {
  if (!src || typeof src !== "string" || !src.startsWith("data:image/")) return null;
  const commaIdx = src.indexOf(",");
  if (commaIdx === -1) return null;

  const header = src.substring(0, commaIdx).toLowerCase();
  // Decode up to 4096 base64 characters (sufficient for PNG and JPEG headers)
  const base64Chunk = src.substring(commaIdx + 1, commaIdx + 1 + 4096);

  let bin: string;
  try {
    bin = typeof atob === "function" ? atob(base64Chunk) : "";
  } catch {
    return null;
  }

  if (!bin || bin.length < 24) return null;

  // PNG: bytes 16-19 = Width (Big Endian), bytes 20-23 = Height (Big Endian)
  if (header.includes("png")) {
    const w =
      (bin.charCodeAt(16) << 24) |
      (bin.charCodeAt(17) << 16) |
      (bin.charCodeAt(18) << 8) |
      bin.charCodeAt(19);
    const h =
      (bin.charCodeAt(20) << 24) |
      (bin.charCodeAt(21) << 16) |
      (bin.charCodeAt(22) << 8) |
      bin.charCodeAt(23);
    const width = w >>> 0;
    const height = h >>> 0;
    if (width > 0 && height > 0 && width < 10000 && height < 10000) {
      return { width, height, aspectRatio: width / height };
    }
  }

  // JPEG: scan markers for Start of Frame (SOF0 = 0xC0, SOF1 = 0xC1, SOF2 = 0xC2)
  if (header.includes("jpeg") || header.includes("jpg")) {
    let offset = 2;
    while (offset < bin.length - 8) {
      if (bin.charCodeAt(offset) === 0xff) {
        const marker = bin.charCodeAt(offset + 1);
        if (marker === 0xc0 || marker === 0xc1 || marker === 0xc2) {
          const height = (bin.charCodeAt(offset + 5) << 8) | bin.charCodeAt(offset + 6);
          const width = (bin.charCodeAt(offset + 7) << 8) | bin.charCodeAt(offset + 8);
          if (width > 0 && height > 0 && width < 10000 && height < 10000) {
            return { width, height, aspectRatio: width / height };
          }
        }
      }
      offset++;
    }
  }

  // GIF: bytes 6-7 = Width (Little Endian), bytes 8-9 = Height (Little Endian)
  if (header.includes("gif")) {
    const width = bin.charCodeAt(6) | (bin.charCodeAt(7) << 8);
    const height = bin.charCodeAt(8) | (bin.charCodeAt(9) << 8);
    if (width > 0 && height > 0) {
      return { width, height, aspectRatio: width / height };
    }
  }

  return null;
}

interface HtmlImageProps {
  src: string;
  alt?: string;
  containerWidth?: number;
}

export const HtmlImage = memo(function HtmlImage({
  src,
  alt,
  containerWidth,
}: HtmlImageProps) {
  const { width: windowWidth } = useWindowDimensions();
  const safeContainerWidth = containerWidth ?? windowWidth - 48;

  const [aspectRatio, setAspectRatio] = useState<number>(() => {
    const dims = getBase64ImageDimensions(src);
    return dims ? dims.aspectRatio : 1.75;
  });

  useEffect(() => {
    if (!src) return;
    const dims = getBase64ImageDimensions(src);
    if (dims) {
      setAspectRatio(dims.aspectRatio);
    } else if (!src.startsWith("data:")) {
      // Remote HTTP/HTTPS URL fallback
      Image.getSize(
        src,
        (w, h) => {
          if (w > 0 && h > 0) {
            setAspectRatio(w / h);
          }
        },
        () => {}
      );
    }
  }, [src]);

  // Compute responsive dimensions
  const maxWidth = Math.max(safeContainerWidth, 240);
  const targetHeight = Math.min(Math.max(maxWidth / aspectRatio, 120), 450);

  return (
    <View style={styles.outerWrapper}>
      <View style={[styles.card, { maxWidth }]}>
        <Image
          source={{ uri: src }}
          style={[styles.image, { height: targetHeight }]}
          resizeMode="contain"
        />
        {alt && alt.trim().length > 0 && !alt.startsWith("data:") ? (
          <ThemedText style={styles.caption}>{alt.trim()}</ThemedText>
        ) : null}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  outerWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: Spacing.md,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: BorderRadius.md,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: "100%",
    borderRadius: BorderRadius.sm,
  },
  caption: {
    color: "#1E293B",
    fontSize: 12.5,
    fontWeight: "600",
    marginTop: 6,
    textAlign: "center",
  },
});
