/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontFamily: {
        heading: 'Poppins',
        body: 'Poppins',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
      colors: {
        'text': 'oklab(94.12% 0.009 -0.02)',
        'background': 'oklab(7.30% 0.003 -0.02)',
        'primary': 'oklab(45.61% 0.016 -0.24)',
        'secondary': 'oklab(12.16% 0.001 -0.08)',
        'accent': 'oklab(36.92% -0.023 -0.25)',
       },
    },
  },
  plugins: [],
}

