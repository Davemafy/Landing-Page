/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "978px",
            xl: "1440px"
        },
        extend: {
            fontFamily: {
                lato: ["Lato", "sans-serif"],
                latoreg: ["LatoReg", "sans-serif"],
                latobd: ["LatoBold", "sans-serif"]
            },
            colors: {
                white: "#f5f5f5",
                lightWheat: "hsl(35, 65%, 81%)",
                coyoteBrown: "hsl(37, 38%, 34%)",
                lightBiege: "hsl(35, 47%, 64%)",
                dark: "hsl(213, 11%, 20%)",
                lightDark: "hsl(218, 8%, 27%)"
            }
        }
    },
    plugins: []
};
