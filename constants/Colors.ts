/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#2F3C7E';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#101820',
    background: '#ECEDEE',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#101820',
    tabIconSelected: tintColorLight,
    tabBarBackground: '#ECEDEE',
  },
  dark: {
    text: '#ECEDEE',
    background: '#101820',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    tabBarBackground: '#101820',
  },
};

/**
 * Converts a hex color to an RGBA color with the specified opacity.
 * @param {string} hex - The hex color code.
 * @param {number} opacity - The opacity value (0 to 1).
 * @returns {string} The RGBA color code.
 */
export const hexToRgba = (hex: string, opacity: number): string => {
  const [r, g, b] = hex.match(/\w\w/g)!.map(x => parseInt(x, 16));
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
