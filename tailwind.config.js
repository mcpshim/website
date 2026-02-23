module.exports = {
  content: [
    './{components,hooks,layouts,pages,app}/**/*.{ts,tsx,js,jsx}',
    '../../shared/{components,hooks,layouts,pages}/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        'background-secondary': 'hsl(var(--background-secondary))',
        'background-tertiary': 'hsl(var(--background-tertiary))',
        'background-quaternary': 'hsl(var(--background-quaternary))',
        stroke: 'hsl(var(--stroke))',
        'stroke-secondary': 'hsl(var(--stroke-secondary))',
        accent: 'hsl(var(--accent))',
        'accent-secondary': 'hsl(var(--accent-secondary))',
        content: 'hsl(var(--content))',
        'content-secondary': 'hsl(var(--content-secondary))',
      },
    },
  },
  plugins: [],
}
