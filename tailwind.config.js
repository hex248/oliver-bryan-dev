/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                ayu: {
                    // background colors
                    bg: "#10141c",
                    highlight: "#161a24",
                    popup: "#141821",

                    // foreground colors
                    fg: "#bfbdb6",
                    gutter: "#6c7380",
                    guide: "#6c7380",

                    // accent colors
                    accent: "#e6b450",
                    link: "#59c2ff",
                    selection: "#3388ff",
                    inactive: "#80b5ff",

                    // state colors
                    added: "#7fd962",
                    modified: "#73b8ff",
                    deleted: "#f26d78",

                    // semantic colors
                    primary: "#e6b450",
                    secondary: "#59c2ff",
                    success: "#7fd962",
                    warning: "#e6b450",
                    error: "#f26d78",
                    info: "#73b8ff",

                    // extended palette based on accent color
                    50: "#fefbf0",
                    100: "#fdf5da",
                    200: "#fae9b5",
                    300: "#f6d885",
                    400: "#f0c053",
                    500: "#e6b450", // primary accent
                    600: "#d49d3a",
                    700: "#b18432",
                    800: "#906b2e",
                    900: "#785628",
                    950: "#422e14",
                },

                "ayu-blue": {
                    50: "#eff8ff",
                    100: "#daeffe",
                    200: "#bee4fd",
                    300: "#91d3fc",
                    400: "#5db8f8",
                    500: "#59c2ff", // link color
                    600: "#2483e2",
                    700: "#1b6bcf",
                    800: "#1c58a8",
                    900: "#1d4d85",
                    950: "#162f51",
                },

                "ayu-green": {
                    50: "#f0fdf1",
                    100: "#dcfce0",
                    200: "#bbf7c3",
                    300: "#86efac",
                    400: "#4ade80",
                    500: "#7fd962", // success color
                    600: "#16a34a",
                    700: "#15803d",
                    800: "#166534",
                    900: "#14532d",
                    950: "#052e16",
                },

                "ayu-red": {
                    50: "#fef2f2",
                    100: "#fee2e2",
                    200: "#fecaca",
                    300: "#fca5a5",
                    400: "#f87171",
                    500: "#f26d78", // error color
                    600: "#dc2626",
                    700: "#b91c1c",
                    800: "#991b1b",
                    900: "#7f1d1d",
                    950: "#450a0a",
                },

                "ayu-gray": {
                    50: "#f9fafb",
                    100: "#f3f4f6",
                    200: "#e5e7eb",
                    300: "#d1d5db",
                    400: "#9ca3af",
                    500: "#6c7380", // gutter color
                    600: "#4b5563",
                    700: "#374151",
                    800: "#1f2937",
                    900: "#161a24", // highlight
                    950: "#10141c", // background
                },
            },

            fontFamily: {
                mono: [
                    "PragmataPro Mono Liga",
                    "SF Mono",
                    "Consolas",
                    "Liberation Mono",
                    "Menlo",
                    "Courier",
                    "monospace",
                ],
            },

            borderRadius: {
                ayu: "4px", // selection corner radius from theme
            },

            spacing: {
                "ayu-shadow": "3px", // shadow width from theme
            },
        },
    },
    plugins: [],
};
