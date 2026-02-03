/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#2C2C2C',       // dark charcoal
        secondary: '#F5F1EA',     // warm beige
        accent: '#BFA57A',        // muted gold
        button: '#111111',
        whatsapp: '#25D366',      // WhatsApp green
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
