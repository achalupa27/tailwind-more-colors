# Tailwind More Colors

A Tailwind CSS plugin that adds intermediary color values to your color palette. Instead of being limited to steps of 100 (like red-400, red-500), you can now use intermediary values in steps of 10 (like red-410, red-420, red-430, etc.).

## Installation

```bash
npm install tailwind-more-colors
```

## Usage

Add the plugin to your tailwind.config.js:

```js
module.exports = {
    plugins: [require('tailwind-more-colors')],
};
```

## Features

Works with all Tailwind default colors:

```html
<div className="text-red-410"></div>
<div className="bg-red-420"></div>
<div className="border-red-430"></div>
```

## Limitations

Only colors ranging from 50-990 are currently supported.

The supported step size is 10. (red-451 won't work)

## How It Works

The plugin uses color interpolation to generate smooth transitions between existing color steps. For example, red-410 will be 10% of the way between red-400 and red-500.

## Compatibility

Requires Tailwind CSS v3.0 or higher
Works with all Tailwind color utilities (text, bg, and border)
Compatible with both JIT and classic modes

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any issues or have questions, please file an issue on GitHub.
