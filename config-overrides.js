// config-overrides.js
const { override } = require('customize-cra');
const tailwindcss = require('tailwindcss');

module.exports = override(
  (config) => {
    // Add Tailwind CSS to PostCSS processing pipeline
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [tailwindcss],
          },
        },
      ],
    });
    return config;
  }
);
