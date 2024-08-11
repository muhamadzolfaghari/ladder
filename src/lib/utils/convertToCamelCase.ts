import { RawValue } from "@/types/RawValue";

/**
 * Converts a string with underscores to camel case.
 *
 * @param str - The string to convert.
 * @returns The string in camel case.
 */
const convertSnakeCaseToCamelCase = (str: string): string =>
  str.replace(/_([a-z])/g, (_match, letter) => letter.toUpperCase());

/**
 * Normalizes a raw database row by converting any snake_case keys to camelCase.
 *
 * @param obj - The raw database row to normalize.
 * @returns The normalized row, or `null` if the input row is `null`.
 */
export default function convertToCamelCase<T>(obj: RawValue): T {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (key.includes("_")) {
        const newKey = convertSnakeCaseToCamelCase(key);
        obj[newKey] = obj[key];
        delete obj[key];
      }
    }
  }

  return obj as T;
}
