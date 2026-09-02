import { useState, useEffect } from "react";
import { themes, updateBrowserTheme } from "./utils/themeHelper";

export default function AllTheme() {
  // 1. Pure React State
  const [selectedTheme, setSelectedTheme] = useState(() => {
    const saved = localStorage.getItem("app-theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "navy-blue" : "clean-blue";
  });

  // 2. Filter Tab State (All / Light / Dark)
  const [filter, setFilter] = useState("All");

  // 3. Hover Preview State
  const [previewTheme, setPreviewTheme] = useState(null);
  const currentTheme = previewTheme || selectedTheme;

  // 4. HTML tag par data-theme attribute apply karna & Favicon/Title update
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    updateBrowserTheme(currentTheme);
  }, [currentTheme]);

  // 5. MutationObserver: Keep in sync with ThemeToggle
  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (!previewTheme) {
        const currentDataTheme = document.documentElement.getAttribute("data-theme");
        if (currentDataTheme && currentDataTheme !== selectedTheme) {
          setSelectedTheme(currentDataTheme);
        }
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, [previewTheme, selectedTheme]);

  // 6. Handle Theme Selection
  const handleSelectTheme = (themeId) => {
    setSelectedTheme(themeId);
    localStorage.setItem("app-theme", themeId);
  };

  // Filtered list
  const filteredThemes = filter === "All"
    ? themes
    : themes.filter((t) => t.category === filter);

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-8 py-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-(--text-h) tracking-tight">
          🎨 10 Curated Theme Palettes
        </h1>
        <p className="text-(--text) text-sm sm:text-base max-w-xl">
          Hover करके <span className="font-semibold text-(--accent)">Live Preview</span> देखें, और Click करके अपनी पसंदीदा Theme <span className="font-semibold text-(--accent)">Apply</span> करें।
        </p>
      </div>

      {/* Filter Tabs (All / Light / Dark) */}
      <div className="flex items-center p-1 bg-(--code-bg) border border-(--border) rounded-2xl shadow-(--shadow)">
        {["All", "Light", "Dark"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
              filter === tab
                ? "bg-(--accent) text-white shadow-sm"
                : "text-(--text) hover:text-(--text-h)"
            }`}
          >
            {tab === "All" ? "🌈 All (10)" : tab === "Light" ? "☀️ Light (5)" : "🌙 Dark (5)"}
          </button>
        ))}
      </div>

      {/* Themes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {filteredThemes.map((theme) => {
          const isSelected = selectedTheme === theme.id;
          const isPreviewing = previewTheme === theme.id;

          return (
            <div
              key={theme.id}
              onMouseEnter={() => setPreviewTheme(theme.id)}
              onMouseLeave={() => setPreviewTheme(null)}
              onClick={() => handleSelectTheme(theme.id)}
              className={`relative p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex flex-col justify-between gap-4 bg-(--code-bg) shadow-(--shadow) hover:scale-102 ${
                isSelected
                  ? "border-(--accent) ring-2 ring-(--accent)"
                  : "border-(--border) hover:border-(--accent-border)"
              }`}
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-lg text-(--text-h) flex items-center gap-2">
                    <span>{theme.icon}</span> {theme.name}
                  </span>

                  {isSelected ? (
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-(--accent) text-white font-medium">
                      Active ✓
                    </span>
                  ) : isPreviewing ? (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-(--accent-bg) text-(--accent) font-medium">
                      Previewing 👀
                    </span>
                  ) : (
                    <span className="text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-md border border-(--border) text-(--text) font-semibold opacity-75">
                      {theme.category}
                    </span>
                  )}
                </div>

                <p className="text-xs text-(--text) leading-relaxed">
                  {theme.desc}
                </p>
              </div>

              {/* Color Swatches Palette */}
              <div className="pt-2 border-t border-(--border) flex items-center justify-between">
                <span className="text-xs text-(--text) font-mono">Palette:</span>
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-full border border-gray-400/30 shadow-inner"
                    style={{ backgroundColor: theme.bg }}
                    title={`Background: ${theme.bg}`}
                  />
                  <div
                    className="w-6 h-6 rounded-full shadow-inner"
                    style={{ backgroundColor: theme.accent }}
                    title={`Accent: ${theme.accent}`}
                  />
                  <div
                    className="w-6 h-6 rounded-full shadow-inner"
                    style={{ backgroundColor: theme.border }}
                    title={`Border: ${theme.border}`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Demo Live Preview Card */}
      <div className="w-full p-6 sm:p-8 rounded-3xl border border-(--border) bg-(--code-bg) shadow-(--shadow) text-center space-y-4 mt-2">
        <h2 className="text-2xl font-bold text-(--text-h)">
          Live Component Preview (<span className="text-(--accent)">{currentTheme}</span>)
        </h2>
        <p className="text-(--text) text-sm max-w-lg mx-auto">
          Theme बदलते ही Buttons, Cards, Borders, Text और Scrollbar एक साथ Smoothly बदल रहे हैं।
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <button className="px-6 py-2.5 rounded-xl bg-(--accent) text-white font-medium shadow-(--shadow) hover:opacity-90 cursor-pointer transition-all">
            Primary Action Button
          </button>
          <button className="px-6 py-2.5 rounded-xl bg-(--accent-bg) text-(--accent) border border-(--accent-border) font-medium cursor-pointer transition-all">
            Subtle Badge Action
          </button>
        </div>
      </div>
    </div>
  );
}
