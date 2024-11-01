module.exports = {
  presets: ["@babel/preset-typescript"],
  env: {
    production: {
      plugins: ["@babel/plugin-transform-remove-console"],
    },
  },
};
