import { useEffect, useState } from 'react';

const getCurrentTheme = () => {
  const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (isDarkTheme) return 'dark';

  return 'light';
};

export const useTheme = () => {
  const [theme, setTheme] = useState<string>(getCurrentTheme());

  useEffect(() => {
    const html = document.querySelector('html');
    html?.setAttribute('data-theme', theme);
  }, [theme]);

  return [theme, setTheme] as [string, React.SetStateAction<string>];
};
