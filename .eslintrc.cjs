module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended", // ¡Buena Práctica! Asegura que sigas las reglas de los Hooks
    "plugin:prettier/recommended", // Integra Prettier en ESLint
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    // Opcional: Desactiva reglas que Prettier maneja o ajusta el estilo
    "@typescript-eslint/no-explicit-any": "warn", // Considera 'error' más adelante
  },
};
