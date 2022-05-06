const constants = require('./src/constants');

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/screens/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            display: ['"Montserrat"'],
            body: ['"Montserrat"']
        },
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '3.75rem',
            '7xl': '5rem',
            '8xl': '6rem',
            '9xl': '7rem',
            '10xl': '8rem'
        },
        screens: {
            xxs: '280px',
            // => @media (min-width: 280px) { ... }

            xs: '380px',
            // => @media (min-width: 280px) { ... }

            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px'
            // => @media (min-width: 1280px) { ... }
        },
        extend: {
            // This keyframe for the animation of the blob
            keyframes: {
                transform: {
                    '0%, 100%': { borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%' },
                    '14%': { borderRadius: '40% 60% 54% 46% / 49% 60% 40% 51%' },
                    '28%': { borderRadius: '54% 46% 38% 62% / 49% 70% 30% 51%' },
                    '42%': { borderRadius: '61% 39% 55% 45% / 61% 38% 62% 39%' },
                    '56%': { borderRadius: '61% 39% 67% 33% / 70% 50% 50% 30%' },
                    '70%': { borderRadius: '50% 50% 34% 66% / 56% 68% 32% 44%' },
                    '84%': { borderRadius: '46% 54% 50% 50% / 35% 61% 39% 65%' }
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-1deg)' },
                    '50%': { transform: 'rotate(1deg)' }
                }
            },
            // The combinations of the keyframes will be used here
            animation: {
                blob: 'transform 20s ease-in-out infinite both alternate, wiggle 20s ease-in-out infinite'
            },
            colors: constants.colors,
            height: {
                100: '25rem',
                112: '28rem',
                128: '32rem',
                132: '36rem',
                136: '40rem',
                140: '44rem'
            }
        }
    },
    plugins: [require('@tailwindcss/line-clamp')]
};
