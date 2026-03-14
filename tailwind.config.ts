import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bone:      '#F5F0E8',
        cream:     '#EDE5D5',
        ink:       '#1A1614',
        rouge:     '#C4503A',
        gold:      '#B8965A',
        'warm-gray': '#8C7E72',
      },
      fontFamily: {
        bebas:     ['var(--font-bebas)', 'sans-serif'],
        cormorant: ['var(--font-cormorant)', 'serif'],
        dm:        ['var(--font-dm)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
