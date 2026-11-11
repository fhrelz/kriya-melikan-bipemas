import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                terracotta: {
                    50: '#FDF8F6',
                    100: '#FBECE8',
                    200: '#F6D5CC',
                    300: '#EBB4A4',
                    400: '#DC8972',
                    500: '#C2593F',
                    600: '#B84A39',
                    700: '#9E3827',
                    800: '#7E2C1E',
                    900: '#541C13',
                },
                ochre: {
                    50: '#FDF9F0',
                    100: '#FBF2DE',
                    200: '#F6E4BC',
                    300: '#EFCF90',
                    400: '#E5B760',
                    500: '#D48B38',
                    600: '#BA7325',
                    700: '#94581B',
                    800: '#764417',
                    900: '#5F3615',
                },
                sand: {
                    50: '#FAF8F5',
                    100: '#F5EFE6',
                    200: '#EAE1D3',
                    300: '#DCD0BE',
                    400: '#C5B49D',
                    500: '#A9957B',
                },
                basalt: {
                    800: '#262220',
                    900: '#1C1917',
                    950: '#12100E',
                },
                moss: {
                    500: '#4A6953',
                    600: '#3D5644',
                    700: '#2F4335',
                }
            }
        },
    },

    plugins: [forms],
};
