/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        // The app's palette (flowai-mobile-new/constants/theme.ts).
        primary: "#4F46E5",
        secondary: "#0E7490",
        page: "#F1F4FB",
        ink: "#1E2028",
        "ink-body": "#3B3F4A",
        "ink-muted": "#696E7C",
        line: "#E4E6EC",
        wash: "#EEF0FE",
        edge: "#C7CCFA",
      },
      backgroundImage: {
        // Teal to indigo, the same sweep as the app's main button.
        brand: "linear-gradient(90deg, #0E7490 0%, #0369A1 35%, #2563EB 70%, #4F46E5 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
