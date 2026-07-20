import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const getTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    setTheme(getTheme());
  }, []);

  const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
  const label = `Switch to ${nextTheme} mode`;

  const handleThemeChange = () => {
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button className="theme-toggle" type="button" onClick={handleThemeChange} aria-label={label} title={label}>
      <span className="theme-toggle-track" aria-hidden="true">
        <span className={theme === 'dark' ? 'theme-toggle-thumb dark' : 'theme-toggle-thumb'} />
      </span>
      <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  );
};

export default ThemeToggle;
