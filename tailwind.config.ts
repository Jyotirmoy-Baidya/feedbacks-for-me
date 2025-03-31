import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    '50': '#fcfcfc',
                    '100': '#f1f1f2',
                    '200': '#e0e0e2',
                    '300': '#c7c7cc',
                    '400': '#a8a8af',
                    '500': '#82828b',
                    '600': '#57575f',
                    '700': '#27272a',
                    '800': '#111113',
                    '900': '#040405',
                    '950': '#000000'
                },
                secondary: {
                    '50': '#f4f7fc',
                    '100': '#e3ecfa',
                    '200': '#c2d5f4',
                    '300': '#96b7ec',
                    '400': '#6996e1',
                    '500': '#3d74d3',
                    '600': '#265ab9',
                    '700': '#1d4e9d',
                    '800': '#163b75',
                    '900': '#102a52',
                    '950': '#0b1d3a'
                },
            }
        }
    },
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [require("tailwindcss-animate")],
};
export default config;
