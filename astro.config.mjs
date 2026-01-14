// @ts-check

import react from "@astrojs/react";

import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    adapter: vercel(),
    integrations: [react(), icon()],

    vite: {
        plugins: [tailwindcss()],
    },
});
