import { useState, useEffect } from 'react';

function getInitialTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? '--dark' : '--light';
}

function useTheme() {
  const [dark, setDark] = useState(getInitialTheme());

  useEffect(() => {
    const handleChange = (e) => {
      setDark(e.matches ? '--dark' : '--light');
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return dark;
}

export default useTheme;
