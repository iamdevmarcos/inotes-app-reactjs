export const FirstLetterUp = (title: string) => {
    const firstLetter = title.charAt(0).toUpperCase();
    return `${firstLetter}${title.substr(1)}`;
}