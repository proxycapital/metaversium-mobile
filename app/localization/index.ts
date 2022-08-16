import i18n from "i18n-js"
import * as RNLocalize from "react-native-localize"
import en from "./translations/en.json"

export function initLocalization() {
  const locales = RNLocalize.getLocales()

  if (Array.isArray(locales)) {
    i18n.locale = locales[0].languageTag
  }

  i18n.fallbacks = true
  i18n.translations = {
    en,
  }
}

export function translate(text: string): string {
  if (!text) {
    return ""
  }
  return i18n.t(text)
}

export function formatTranslate(text: string, values: Record<string, string>) {
  if (!text) {
    return ""
  }
  return i18n.t(text, values)
}
