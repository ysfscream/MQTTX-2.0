import sharedConfig from 'tailwind-config/tailwind.config'
import { Config } from 'tailwindcss'

const config: Config = {
  presets: [sharedConfig],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}

export default config
