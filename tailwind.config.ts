import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
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
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-in": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "spotlight": {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)"
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.5s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        float: "float 5s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "spotlight": "spotlight 2s ease forwards",
      },
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        inter: ["Inter", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "2xs": "0.625rem", // 10px
        xs: "0.75rem",     // 12px
        sm: "0.875rem",    // 14px
        base: "1rem",      // 16px
        lg: "1.125rem",    // 18px
        xl: "1.25rem",     // 20px
        "2xl": "1.5rem",   // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem",  // 36px
        "5xl": "3rem",     // 48px
        "6xl": "3.75rem",  // 60px
        "7xl": "4.5rem",   // 72px
        "8xl": "6rem",     // 96px
      },
      letterSpacing: {
        tightest: '-0.075em',
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      boxShadow: {
        "glow-sm": "0 0 10px rgba(125, 218, 242, 0.3)",
        "glow-md": "0 0 20px rgba(125, 218, 242, 0.4)",
        "glow-lg": "0 0 30px rgba(125, 218, 242, 0.5)",
        "accent-glow": "0 0 15px rgba(132, 43, 234, 0.5)",
        "dual-glow":
          "0 0 20px rgba(125, 218, 242, 0.3), 0 0 40px rgba(132, 43, 234, 0.2)",
        "text-glow": "0 0 8px rgba(125, 218, 242, 0.3)",
        "soft-xl": "0 20px 25px -5px rgb(0 0 0 / 0.05), 0 10px 10px -5px rgb(0 0 0 / 0.02)",
        "soft-2xl": "0 25px 50px -12px rgb(0 0 0 / 0.05)",
        "inner-glow": "inset 0 0 20px 0 rgba(125, 218, 242, 0.15)",
        "button": "0 2px 4px rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "noise-pattern":
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=')",
        "shimmer": "linear-gradient(to right, transparent 0%, rgba(125, 218, 242, 0.1) 20%, rgba(125, 218, 242, 0.2) 60%, transparent 100%)",
        "card-grain": "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIiB0eXBlPSJzYXR1cmF0ZSIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=')",
      },
      textShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.3)',
        md: '0 2px 4px rgba(0, 0, 0, 0.3)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.3)',
        glow: '0 0 8px rgba(125, 218, 242, 0.5)',
      },
      spacing: {
        '18': '4.5rem',
        '68': '17rem',
        '88': '22rem',
        '128': '32rem',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      lineHeight: {
        'tighter': '1.1',
      },
      gridTemplateColumns: {
        'auto-fill-250': 'repeat(auto-fill, minmax(250px, 1fr))',
        'auto-fit-150': 'repeat(auto-fit, minmax(150px, 1fr))',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-lg': {
          textShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-glow': {
          textShadow: '0 0 8px rgba(125, 218, 242, 0.5)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
        '.bg-blur-xs': {
          backdropFilter: 'blur(2px)',
        },
        '.bg-blur-sm': {
          backdropFilter: 'blur(4px)',
        },
        '.bg-blur': {
          backdropFilter: 'blur(8px)',
        },
        '.bg-blur-md': {
          backdropFilter: 'blur(12px)',
        },
        '.bg-blur-lg': {
          backdropFilter: 'blur(16px)',
        },
        '.bg-blur-xl': {
          backdropFilter: 'blur(24px)',
        },
        '.animate-shimmer': {
          backgroundSize: '200% 100%',
          animation: 'shimmer 2s linear infinite',
        },
      }
      addUtilities(newUtilities)
    }),
  ],
} satisfies Config;

export default config;
