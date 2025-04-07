const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // if using `/app` directory
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        secondary: '#9333EA',
      },
      fontFamily: {
        ivar: ["Ivar-Display-Hydro", "sans-serif"],
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
