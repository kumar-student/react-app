import localFont from 'next/font/local';

export const inter = localFont({
    src: [
        {
            path: '../../styles/fonts/Inter/Inter-VariableFont_slnt,wght.ttf',
            weight: 'variable',
            style: 'normal',
        },
    ],
    variable: '--font-inter',
    display: 'swap',
    preload: false
});