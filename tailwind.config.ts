import type { Config } from "tailwindcss";

const config: Config = {
    theme: {
        extend: {
            colors: {
                first: "#1E40AF", // Example primary color (blue-800)
                second: "#000000", // Example secondary color (yellow-400)
            },
        },
    },
    plugins: [],
};

export default config;
