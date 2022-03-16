module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/screens/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            display: ['"Courier New"'],
            body: ['"Courier New"']
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
            '6xl': '4rem'
        },
        screens: {
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
                movement: {
                    '0%, 100%': { transform: 'none' },
                    '50%': { transform: 'translateY(5%) rotateY(10deg)' }
                }
            },
            // The combinations of the keyframes will be used here
            animation: {
                blob: 'transform 20s ease-in-out infinite both alternate, movement 40s ease-in-out infinite both'
            },
            colors: {
                theme: {
                    primary: '#F5A8FA',
                    secondary: '#191919',
                    bg: '#101010',
                    lightBg: '#fefefe'
                },
                gray: {
                    100: '#f7fafc',
                    200: '#edf2f7',
                    300: '#e2e8f0',
                    400: '#cbd5e0',
                    500: '#a0aec0',
                    600: '#718096',
                    700: '#4a5568',
                    800: '#2d3748',
                    900: '#1a202c'
                },
                black: {
                    100: '#000000',
                    200: '#edf2f7',
                    300: '#e2e8f0',
                    400: '#cbd5e0',
                    500: '#a0aec0',
                    600: '#718096',
                    700: '#4a5568',
                    800: '#2d3748',
                    900: '#1a202c'
                },
                blue: {
                    100: '#ebf8ff',
                    200: '#bee3f8',
                    300: '#90cdf4',
                    400: '#63b3ed',
                    500: '#4299e1',
                    600: '#3182ce',
                    700: '#2b6cb0',
                    800: '#2c5282',
                    900: '#2a4365'
                }
            }
        }
    },
    plugins: []
};
