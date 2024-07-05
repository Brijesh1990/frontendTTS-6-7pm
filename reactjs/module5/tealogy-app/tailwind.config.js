/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        '"Inter var", sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
      container: {
        center: true,
      },
      container: {
        padding: '2rem',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    extend: {
      spacing: {
        '112': '28rem',
        '128': '32rem',
      },
      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      width: {
        '128': '32rem',
      },

       colors: {
        'regal-blue': '#243c5a',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
  },
  plugins: [],
},

}
}

