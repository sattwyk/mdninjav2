import { useEffect } from 'react';
import { themeChange } from 'theme-change';
export const useThemeChange = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return;
};
