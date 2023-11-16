import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#467de3',
          default: '#377dff',
          dark: '#2f6ad9'
        },
        secondary: {
          light: '#ffb74d',
          default: '#f9b934',
          dark: '#FF9800'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'primary': 'rgba(140, 152, 164, 0.176) 0px 10px 40px 10px',
      }
    },
  },
  plugins: [],
}
export default config
