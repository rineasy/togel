/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        luxury: {
          "primary": "#FFD700",          // Gold
          "secondary": "#C0A080",        // Rose Gold
          "accent": "#B8860B",           // Dark Golden Rod
          "neutral": "#1a1a1a",          // Deep Black
          "base-100": "#0F0F0F",         // Dark Background
          "base-200": "#1F1F1F",         // Slightly Lighter Background
          "base-300": "#2A2A2A",         // Even Lighter Background
          "info": "#8ABCD1",             // Light Blue
          "success": "#3D9970",          // Emerald Green
          "warning": "#DAA520",          // Golden Yellow
          "error": "#8B0000",            // Dark Red
          
          "--rounded-box": "0.5rem",     // Border radius for cards
          "--rounded-btn": "0.3rem",     // Border radius for buttons
          "--rounded-badge": "0.5rem",   // Border radius for badges
          
          "--animation-btn": "0.3s",     // Button click animation time
          "--animation-input": "0.2s",   // Input focus animation time
          
          "--btn-text-case": "uppercase",// Button text transform
          "--navbar-padding": "1rem",    // Navbar padding
        },
      },
      "dark",
      "luxury"
    ],
  },
}
