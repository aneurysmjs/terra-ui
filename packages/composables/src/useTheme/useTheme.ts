import { ref, watchEffect, type Ref } from 'vue';
import { isNil } from 'ramda';

type Theme = 'dark' | 'light';

const THEME_MAP = {
  dark: 'light',
  light: 'dark',
} as const;

type UseThemeResult = [Ref<Theme | undefined>, () => void];

export default function useTheme(): UseThemeResult {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const localTheme = localStorage.getItem('theme');
  const theme = ref<Theme | undefined>(undefined);

  watchEffect(() => {
    if (isNil(localTheme)) {
      theme.value = isDarkMode ? 'dark' : 'light';
    } else {
      theme.value = localTheme as Theme;
    }
  });

  watchEffect(() => {
    if (theme.value) {
      document.documentElement.classList.value = theme.value;
    }
  });

  /**
   * @description Toggles between 'dark' and 'light'
   *
   * @return void
   */
  const toggleTheme = () => {
    theme.value = THEME_MAP[theme.value as Theme];

    localStorage.setItem('theme', theme.value);
  };

  return [theme, toggleTheme];
}
