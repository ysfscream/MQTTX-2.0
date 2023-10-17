import baseConfig from 'tailwind-config/base.config'
import { Config } from 'tailwindcss'

const config: Config = {
  presets: [baseConfig],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}

export default config
