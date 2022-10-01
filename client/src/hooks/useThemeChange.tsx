import { useEffect } from 'react';

export const useThemeChange = () => {
  useEffect(() => {
    const html = document.querySelector('html');
    html?.setAttribute('data-theme', 'cyberpunk');
  }, []);

  return;
};
