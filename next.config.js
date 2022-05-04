/* tslint:disable-next-line */
const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
module.exports = withPWA({
    pwa: {
        disable:
            process.env.NODE_ENV === 'development' ||
            process.env.NODE_ENV === 'test' ||
            process.env.NODE_ENV === 'production',
        dest: 'public',
        register: true
    },
    images: {
        formats: ['image/avif', 'image/webp']
    },
    reactStrictMode: true
});
