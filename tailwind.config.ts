import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D5A4A",
          green: "#2D5A4A",
        },
        secondary: {
          green: "#7CB342",
        },
        coral: {
          DEFAULT: "#E57373",
          dark: "#C62828",
        },
        cream: {
          DEFAULT: "#FAF9F6",
          light: "#FFF5F5",
        },
        background: {
          light: "#F5F5F0",
        },
        text: {
          primary: "#1A1A1A",
          secondary: "#6B7280",
          light: "#9CA3AF",
        },
        accent: {
          yellow: "#FDE68A",
        },
        badge: {
          citric: {
            bg: "#E8F5E9",
            text: "#2D5A4A",
            border: "#7CB342",
          },
          vegetable: {
            bg: "#FFEBEE",
            text: "#C62828",
            border: "#E57373",
          },
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "4px",
        xl: "16px",
        "2xl": "20px",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      fontSize: {
        "hero": ["48px", { lineHeight: "56px", fontWeight: "700", letterSpacing: "-0.02em" }],
        "hero-mobile": ["32px", { lineHeight: "40px", fontWeight: "700", letterSpacing: "-0.02em" }],
        "section": ["36px", { lineHeight: "44px", fontWeight: "600" }],
        "product-name": ["40px", { lineHeight: "48px", fontWeight: "600" }],
        "product-name-mobile": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "product-name-tablet": ["32px", { lineHeight: "40px", fontWeight: "600" }],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "shimmer": "shimmer 1.5s infinite linear",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
