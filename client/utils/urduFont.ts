import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { Asset } from "expo-asset";

/**
 * Urdu (Nastaliq) support — loaded only when an Urdu screen opens, so other subjects never pay for it.
 * Font: Noto Nastaliq Urdu (Google, SIL Open Font License), Regular + Bold, ~0.5 MB each.
 */
export const URDU_FONT = "NotoNastaliqUrdu";
export const URDU_FONT_BOLD = "NotoNastaliqUrdu-Bold";

const regularModule = require("../../assets/fonts/NotoNastaliqUrdu-Regular.ttf");
const boldModule = require("../../assets/fonts/NotoNastaliqUrdu-Bold.ttf");

/** Urdu chapter / module ids look like "c9-urdu-p1". */
export function isUrduChapter(id?: string): boolean {
  return !!id && /^c\d+-urdu-/.test(id);
}

/** Urdu subject names used by the chapter lists, e.g. "Class 9 Urdu". */
export function isUrduSubject(subject?: string): boolean {
  return !!subject && /\bUrdu\b/.test(subject);
}

/** 0-9 → ۰-۹ (Urdu digits) for numbering shown inside Urdu text. */
export function toUrduDigits(n: number | string): string {
  return String(n).replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
}

/** Urdu letters used for MCQ options, in place of A–D. */
export const URDU_OPTION_LETTERS = ["الف", "ب", "ج", "د"];

let nativeLoad: Promise<void> | null = null;
/** Registers the fonts for native <Text> (labels, MCQs). Safe to call many times. */
export function loadUrduFonts(): Promise<void> {
  if (!nativeLoad) {
    nativeLoad = Font.loadAsync({ [URDU_FONT]: regularModule, [URDU_FONT_BOLD]: boldModule }).catch(() => {
      nativeLoad = null; // allow a retry next time; text falls back to the system Urdu font meanwhile
    });
  }
  return nativeLoad;
}

let uriLoad: Promise<{ regular?: string; bold?: string }> | null = null;
/** Local file URIs of the fonts, for @font-face inside chapter WebViews. */
export function getUrduFontUris(): Promise<{ regular?: string; bold?: string }> {
  if (!uriLoad) {
    uriLoad = Asset.loadAsync([regularModule, boldModule])
      .then(([r, b]) => ({ regular: r.localUri || r.uri, bold: b.localUri || b.uri }))
      .catch(() => {
        uriLoad = null;
        return {};
      });
  }
  return uriLoad;
}

/** true once the Urdu fonts are ready (immediately true when `enabled` is false). */
export function useUrduFonts(enabled = true): boolean {
  const [ready, setReady] = useState(!enabled || Font.isLoaded(URDU_FONT));
  useEffect(() => {
    if (!enabled || ready) return;
    let alive = true;
    loadUrduFonts().finally(() => alive && setReady(true));
    return () => {
      alive = false;
    };
  }, [enabled, ready]);
  return ready;
}
