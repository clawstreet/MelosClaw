import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "screenshots/**",
      ".chrome-test-profile/**",
    ],
  },
  ...nextVitals,
  ...nextTypescript,
];

export default eslintConfig;
