import { useState, useEffect } from 'react';
import { updateBrowserTheme } from './utils/themeHelper';

const ThemeToggle = () => {
  // 1. Initial State
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('app-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'navy-blue' : 'clean-blue';
  });

  // Check if current theme is one of the dark themes
  const darkThemes = ['navy-blue', 'mono-dark', 'neon-green', 'obsidian-purple', 'warm-dark', 'dark'];
  const isDark = darkThemes.includes(theme);

  // 2. MutationObserver: Keep in sync if AllTheme or DOM changes data-theme
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const currentDataTheme = document.documentElement.getAttribute('data-theme') || 'clean-blue';
      setTheme(currentDataTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  const handleToggle = () => {
    const nextTheme = isDark ? 'clean-blue' : 'navy-blue';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('app-theme', nextTheme);
    updateBrowserTheme(nextTheme);
  };

  return (
    <button
      onClick={handleToggle}
      className="px-4 py-2 bg-(--accent) text-white hover:opacity-90 rounded-full font-medium shadow-(--shadow) cursor-pointer flex items-center gap-2 transition-all"
    >
      {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
