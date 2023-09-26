import { LANGUAGE_DICTIONARY } from "./enum/Languages";

export function t(label: string): string {
    const dictionary = LANGUAGE_DICTIONARY["pt"] ;

    return dictionary[label] || label;
}