import Typography from "typography";

const typography = new Typography({
    baseFontSize: "12px",
    baseLineHeight: 1.45,
    bodyColor: '#000',
    googleFonts: [
        {
            name: 'IBM Plex Mono',
            styles: [
              '400'
            ],
        },
    ],
    headerFontFamily: ['IBM Plex Mono'],
    bodyFontFamily: ['IBM Plex Mono']
});

export default typography;

