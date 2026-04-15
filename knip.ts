import type { KnipConfig } from "knip";
const config: KnipConfig = {
  entry: ["src/main.tsx", "index.html", "eslint.config.js"],
  project: ["src/**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],
  typescript: {
    config: "tsconfig.app.json",
  },
  paths: {
    "@entities": ["./src/entities/index.ts"],
    "@features": ["./src/features/index.ts"],
    "@pages": ["./src/pages/index.ts"],
    "@widgets": ["./src/widgets/index.ts"],
    "@app/*": ["./src/app/*"],
    "@entities/*": ["./src/entities/*"],
    "@features/*": ["./src/features/*"],
    "@pages/*": ["./src/pages/*"],
    "@widgets/*": ["./src/widgets/*"],
    "@shared/api": ["./src/shared/api/index.ts"],
    "@shared/assets": ["./src/shared/assets/index.ts"],
    "@shared/consts": ["./src/shared/consts/index.ts"],
    "@shared/lib": ["./src/shared/lib/index.ts"],
    "@shared/model": ["./src/shared/model/index.ts"],
    "@shared/*": ["./src/shared/*"],
    "@src/*": ["./src/*"],
  },
};

export default config;
