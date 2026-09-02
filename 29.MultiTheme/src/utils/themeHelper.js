export const themes = [
  // ☀️ LIGHT MODE PALETTES
  {
    id: "clean-blue",
    name: "Clean White + Blue",
    category: "Light",
    bg: "#FFFFFF",
    accent: "#0066CC",
    border: "#E0E0E0",
    icon: "💎",
    desc: "Standard, highly readable base for modern apps"
  },
  {
    id: "admin-dashboard",
    name: "Admin Dashboard",
    category: "Light",
    bg: "#F4F6F9",
    accent: "#0D6EFD",
    border: "#DEE2E6",
    icon: "📊",
    desc: "Optimized for data-heavy interfaces & dashboards"
  },
  {
    id: "soft-indigo",
    name: "Soft Gray + Indigo",
    category: "Light",
    bg: "#F9FAFB",
    accent: "#3B82F6",
    border: "#E5E7EB",
    icon: "💠",
    desc: "Soft modern alternative to pure white"
  },
  {
    id: "warm-neutrals",
    name: "Warm Neutrals",
    category: "Light",
    bg: "#F5F5DC",
    accent: "#8B5A2B",
    border: "#D2B48C",
    icon: "☕",
    desc: "Inviting organic feel for lifestyle brands"
  },
  {
    id: "high-contrast",
    name: "High Contrast Pro",
    category: "Light",
    bg: "#FFFFFF",
    accent: "#0055AA",
    border: "#CCCCCC",
    icon: "🎯",
    desc: "Maximum accessibility & stark clarity"
  },

  // 🌙 DARK MODE PALETTES
  {
    id: "navy-blue",
    name: "Navy + Electric Blue",
    category: "Dark",
    bg: "#0C1120",
    accent: "#3A82FF",
    border: "#1E293B",
    icon: "🔷",
    desc: "Refined, trustworthy & calm aesthetic"
  },
  {
    id: "mono-dark",
    name: "Mono Minimalism",
    category: "Dark",
    bg: "#121212",
    accent: "#888888",
    border: "#444444",
    icon: "🕶️",
    desc: "Clean, professional grayscale dark theme"
  },
  {
    id: "neon-green",
    name: "Charcoal + Neon Green",
    category: "Dark",
    bg: "#0E0E0E",
    accent: "#22C55E",
    border: "#262626",
    icon: "⚡",
    desc: "High visibility & contrast for tech & dev tools"
  },
  {
    id: "obsidian-purple",
    name: "Obsidian Purple",
    category: "Dark",
    bg: "#13111C",
    accent: "#8B5CF6",
    border: "#2E2A3D",
    icon: "🔮",
    desc: "Rich purple-black tones for creative tools"
  },
  {
    id: "warm-dark",
    name: "Warm Charcoal",
    category: "Dark",
    bg: "#1C1C1C",
    accent: "#FF6F61",
    border: "#3D3835",
    icon: "🍂",
    desc: "Soft black & warm beige for non-harsh contrast"
  },
];

export const updateBrowserTheme = (themeId) => {
  // Support aliases: 'light' -> 'clean-blue', 'dark' -> 'navy-blue'
  const normalizedId = themeId === 'light' ? 'clean-blue' : themeId === 'dark' ? 'navy-blue' : themeId;
  const active = themes.find((t) => t.id === normalizedId) || themes[0];

  // 1. Dynamic SVG Favicon Update
  let favicon = document.querySelector("link[rel='icon']");
  if (favicon) {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='46' fill='${active.bg}' stroke='${active.accent}' stroke-width='8'/><text x='50%' y='55%' font-size='48' text-anchor='middle' dominant-baseline='middle'>${active.icon}</text></svg>`;
    favicon.href = `data:image/svg+xml,${encodeURIComponent(svg)}`;
  }

  // 2. Mobile Address Bar Color Update
  let metaThemeColor = document.querySelector("meta[name='theme-color']");
  if (metaThemeColor) {
    metaThemeColor.setAttribute("content", active.bg);
  }

  // 3. Tab Title Update
  document.title = `${active.icon} ${active.name} | MultiTheme`;
};
