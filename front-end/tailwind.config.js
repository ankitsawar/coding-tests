/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        sans: ['Open Sans']
      },
      backgroundImage: {
        'pricing_card_bullet': "url('../images/bullet.svg')",
        'footer-effects': "url('../images/effect-lines.png')"
      }
    },
    colors: {
      'text-brand': '#54565A'
    }
  },
  plugins: [],
}