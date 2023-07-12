/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/component/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/container/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
            DEFAULT: "#FED049",
            lite: "#CFFDE1",
        },
        "secondary": {
          DEFAULT: "#3D5656",
        },
        "accent": {
          DEFAULT: "#68B984",
        },
        "surface-color": "#FDFAF3",
        "dark-text": "#2A2A2A",
        "light-text": "#FDFAF3",
      },
      fontSize: {
        "big-text": ["5.9375rem", {
          lineHeight: "112%",
          fontWeight: 400
        }],
        "heading-1": ["4.75rem", {
          lineHeight: "112%",
          fontWeight: 400
        }],
        "heading-2": ["3.8125rem", {
          lineHeight: "120%",
          fontWeight: 400
        }],
        "heading-3": ["3.0625rem", {
          lineHeight: "112%",
          fontWeight: 400
        }],
        "heading-4": ["2.4375rem", {
          lineHeight: "112%",
          fontWeight: 400
        }],
        "heading-5": ["1.9375rem", {
          lineHeight: "120%",
          fontWeight: 400
        }],
        "heading-6": ["1.5625rem", {
          lineHeight: "112%",
          fontWeight: 400
        }],
        "subheading": ["1.5rem", {
          lineHeight: "120%",
          fontWeight: 700
        }],
        "subheading-regular": ["1.25rem", {
          lineHeight: "112%",
          fontWeight: 400
        }],
        "body-big": ["1.5rem", {
          lineHeight: "120%",
          fontWeight: 400
        }],
        "body": ["1rem", {
          lineHeight: "120%",
          fontWeight: 400
        }],
        "body-bold": ["1rem", {
          lineHeight: "120%",
          fontWeight: 700
        }],
      },
      spacing: {
        "md": "1rem",
        "large": "1.5rem",
        "xl": "2.625rem",
        "xxl": "4.5rem",
      }
    },
  },
  plugins: [],
}
