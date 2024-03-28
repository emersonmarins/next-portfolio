import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      backgroundColor: {
        primary: 'var(--background-primary)',
        secondary: 'var(--background-secondary)',
        header: 'var(--background-header)',
        'transparent-dark': 'var(--background-transparent-dark)',
        'primary-dark': 'var(--background-primary-dark)',
        'primary-light': 'var(--background-primary-light)',
        'secondary-dark': 'var(--background-secondary-dark)',
        'tertiary-dark': 'var(--background-tertiary-dark)',
        'tertiary-light': 'var(--background-tertiary-light)',

      },
      backgroundImage: {
        'primary-linear': 'var(--background-primary-linear)',
        'primary-linear-light': 'var(--background-primary-linear-light)',
        'primary-radial': 'var(--background-primary-radial)',
        'secondary-radial': 'var(--background-secondary-radial)',
        'secondary-linear': 'var(--background-secondary-linear-light)',
        'secondary-dark-linear': 'var(--background-secondary-gradient-dark)',
        'tertiary-dark-linear': 'var(--background-tertiary-gradient-dark)',
        'tertiary-radial': 'var(--background-tertiary-radial)',

      },
      textColor: {
        "primary": "var(--text-primary)",
        "primary-light": "var(--text-primary-light)",
        "primary-dark": "var(--text-primary-dark)",
        "secondary": "var(--text-secondary)",
        "secondary-light": "var(--text-secondary-light)",
        "secondary-dark": "var(--text-secondary-dark)",
        "tertiary": "var(--text-tertiary)",
        "tertiary-light": "var(--text-tertiary-light)",
        "tertiary-dark": "var(--text-tertiary-dark)",
        "quaternary-light": "var(--text-quaternary-light)",
        "quaternary-dark": "var(--text-quaternary-dark)",

      },
      borderColor: {
        "primary-bord": "var(--text-primary)",
        "primary-light-bord": "var(--text-primary-light)",
        "primary-dark-bord": "var(--text-primary-dark)",
        "secondary-bord": "var(--text-secondary)",
        "secondary-light-bord": "var(--text-secondary-light)",
        "secondary-dark-bord": "var(--text-secondary-dark)",
        'transparent-dark': 'var(--background-transparent-dark)',

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
        "show-menu": {
          "0%": { opacity: "0", display: "none", transform: "translateX(100%)" },
          "5%": { opacity: "0", display: "flex", transform: "translateX(100%)" },
          "100%": { opacity: "1", display: "flex", transform: "translateX(0%)" },
        },
        "hidden-menu": {
          "0%": { opacity: "1", display: "flex", transform: "translateX(0%)" },
          "95%": { opacity: "0", display: "flex", transform: "translateX(100%)" },
          "100%": { opacity: "0", display: "none", transform: "translateX(100%)" },
        },
        "pulse-button": {
          "0%": {
            scale: "1",
          },
          "50%": {
            scale: "1.1",
          },
          "100%": {
            scale: "1",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "show-menu": "show-menu 1s ease-in-out",
        "hidden-menu": "hidden-menu 1s ease-in-out",
        "pulse-button": "pulse-button 1.4s ease-in-out",
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      '2md': '900px',
      // => @media (min-width: 900px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2lg': '1170px',
      // => @media (min-width: 1170px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config