// babel.config.js
module.exports = {
  env: {
    production: {
      plugins: ["transform-remove-console"],
    },
  },
};