const plugin = require('tailwindcss/plugin');

function interpolateColor(color1, color2, factor) {
    const r1 = parseInt(color1.slice(1, 3), 16);
    const g1 = parseInt(color1.slice(3, 5), 16);
    const b1 = parseInt(color1.slice(5, 7), 16);

    const r2 = parseInt(color2.slice(1, 3), 16);
    const g2 = parseInt(color2.slice(3, 5), 16);
    const b2 = parseInt(color2.slice(5, 7), 16);

    const r = Math.round(r1 + (r2 - r1) * factor);
    const g = Math.round(g1 + (g2 - g1) * factor);
    const b = Math.round(b1 + (b2 - b1) * factor);

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

module.exports = plugin(function ({ addUtilities, theme }) {
    const extendedColors = {};

    // Safely get colors from theme
    const themeColors = theme('colors') || {};

    Object.entries(themeColors).forEach(([colorName, colorValues]) => {
        // Skip if not an object or if null/undefined
        if (!colorValues || typeof colorValues !== 'object' || Array.isArray(colorValues)) {
            return;
        }

        // Convert colorValues to entries and filter out non-numeric shades
        const shadeEntries = Object.entries(colorValues)
            .filter(([shade]) => /^\d+$/.test(shade))
            .sort(([a], [b]) => parseInt(a) - parseInt(b));

        // Process each pair of consecutive shades
        for (let i = 0; i < shadeEntries.length - 1; i++) {
            const [currentShade, currentValue] = shadeEntries[i];
            const [nextShade, nextValue] = shadeEntries[i + 1];

            // Skip if either value isn't a valid hex color
            if (!currentValue?.startsWith('#') || !nextValue?.startsWith('#')) {
                continue;
            }

            // Create intermediary shades
            for (let j = 10; j < 100; j += 10) {
                const intermediaryShade = parseInt(currentShade) + j;
                const factor = j / 100;

                try {
                    extendedColors[`${colorName}-${intermediaryShade}`] = interpolateColor(currentValue, nextValue, factor);
                } catch (error) {
                    console.warn(`Failed to interpolate color ${colorName}-${intermediaryShade}`);
                    continue;
                }
            }
        }
    });

    // Add the new utilities
    const newUtilities = Object.entries(extendedColors).reduce((acc, [name, value]) => {
        acc[`.text-${name}`] = { color: value };
        acc[`.bg-${name}`] = { backgroundColor: value };
        acc[`.border-${name}`] = { borderColor: value };
        return acc;
    }, {});

    addUtilities(newUtilities);
});
