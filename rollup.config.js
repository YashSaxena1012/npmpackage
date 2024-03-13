import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";

export default defineConfig({
    input:"src/index.ts",
    output:{
        dir:"dist",
        format:"esm",
        name:'my-unique-package-name-has-to-be-different',
    },
    external:["react","react-dom"],
    plugins:[typescript({tsconfig:"tsconfig.json"})],
})