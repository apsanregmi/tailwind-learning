

module.exports = {
  plugins: [
    'tailwindcss',
    'autoprefixer',
  ],
   purge: {
    content: ['./src/**/*.js', './public/index.html'],
    safelist: ['^bg-', '^text-', '^border-', '^hover:', '^focus:', '^active:', '^group-hover:', '^dark:', '^light:'],
  },
}