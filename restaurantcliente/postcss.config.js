//tailwind lo instalo con : npm i --save-dev autoprefixer postcss-cli tailwindcss
//este archivo lo creo con: npx tailwind init tailwind.js
const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
};
