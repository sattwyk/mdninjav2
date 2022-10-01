import { useEffect, useState } from 'react';

const getCurrentTheme = () => {
  const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (isDarkTheme) return 'dark';

  return 'light';
};

export const useThemeChange = () => {
  const [theme, setTheme] = useState(getCurrentTheme());

  useEffect(() => {
    const html = document.querySelector('html');
    html?.setAttribute('data-theme', theme);
  }, [theme]);

  return setTheme;
};
