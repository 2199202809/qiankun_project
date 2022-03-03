module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:vue/vue3-recommended", "plugin:vue/essential"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["vue"],
  rules: {
    "vue/multi-word-component-names": "off",
  },
};
