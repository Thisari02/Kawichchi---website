/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B2B2B",     // dark wood
        secondary: "#F7F2EB",   // cream background
        accent: "#C08A2D",      // gold button
        muted: "#8B8B8B",
        whatsapp: '#25D366',    // WhatsApp green
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
