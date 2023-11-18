/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        blue: {
          light: '#E9EBF8',
          normal: '#4D7EA8',
          dark: '#3A5F7E',
        },
        gray: {
          light: '#98A1B3',
          // normal: '#98A1B3',
          lighter: '#F2F3F5',
          dark: '#232633',
        },
        yellow: {
          light: '#FEFCE8',
          normal: '#F6E117',
          dark: '#B9A911',
        },
        brown: {
          light: '#E9E8E8',
          normal: '#231A16',
          dark: '#1A1411',
        },
        black: {
          light: '#E6E6E6',
          normal: '#000000',
          dark: '#000000',
        },
        green: {
          light: '#2CE27F',
          normal: '#50cd89',
        },
        orange: {
          normal: '#F6C000',
        },
        red: {
          normal: '#DC362E',
        },
        /* NextBit design system */
        main: { default: '#F6E117', light: '#FEFCE8' },
        critical: { default: '#f1416c', light: '#fcd9e2' },
        valid: { default: '#50cd89', light: '#dcf5e7' },
        note: { default: '#7239ea', light: '#e3d7fb' },
        attention: { default: '#f9d861', light: '#fff4cc' },
      },
    },
  },
  plugins: [],
};
