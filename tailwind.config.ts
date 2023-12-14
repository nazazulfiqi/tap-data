import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        cream: {
          base: "#F1EFE4"
        },
        error: {
          base: '#F4677F',
          100: '#FEDBD7',
          200: '#FDB1AF',
          300: '#F9868F',
          400: '#F4677F',
          500: '#ED3768',
          600: '#CB2864',
          700: '#AA1B5D',
          800: '#891154',
          900: '#710A4E',
        },

        success: {
          base: '#6AD26A',
          100: '#E3FBDA',
          200: '#C2F7B6',
          300: '#95E88D',
          400: '#6AD26A',
          500: '#3EB449',
          600: '#2D9A41',
          700: '#1F813A',
          800: '#136832',
          900: '#0B562D',
        },
    },
    }
  },
  plugins: [],
}
export default config
