# Tailwind Interpolate Colors

A Tailwind CSS plugin that adds intermediary color values to your color palette. Instead of being limited to steps of 100 (like red-400, red-500), you can now use intermediary values in steps of 10 (like red-410, red-420, red-430, etc.).

## Installation

```bash
npm install tailwind-more-colors
```

## Usage

Add the plugin to your tailwind.config.js:

```js
module.exports = {
    plugins: [require('@your-username/tailwind-interpolate-colors')],
};
```

## Features

Works with all Tailwind default colors and your custom colors:

```html
<div class="text-red-410"></div>
<div class="bg-red-420"></div>
<div class="border-red-430"></div>
<div class="text-red-440"></div>
<div class="bg-red-450"></div>
<div class="border-red-460"></div>
<div class="text-red-470"></div>
<div class="bg-red-480"></div>
<div class="border-red-490"></div>
```

Automatically generates intermediary colors between existing Tailwind color steps
Supports all color scales in your theme
Creates utilities for text, background, and border colors
Smooth color interpolation

**Currently only colors ranging from 50-990 are enabled.**

**The supported step size is 10. (red-451 won't work)**

## Examples

Instead of jumping from red-400 to red-500, you can now use:

-   Gray scale: `gray-410`, `gray-420`, etc.
-   Blue scale: `blue-410`, `blue-420`, etc.
-   Green scale: `green-410`, `green-420`, etc.
-   And any other color in your theme!

## How It Works

The plugin uses color interpolation to generate smooth transitions between existing color steps. For example, red-410 will be 10% of the way between red-400 and red-500.
Compatibility

Requires Tailwind CSS v3.0 or higher
Works with all Tailwind color utilities
Compatible with both JIT and classic modes

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any issues or have questions, please file an issue on GitHub.
