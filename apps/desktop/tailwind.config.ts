import sharedConfig from 'tailwind-config/tailwind.config'
import { Config } from 'tailwindcss'

const config: Config = {
  presets: [sharedConfig],
  content: ['./src/renderer/index.html', './src/renderer/src/**/*.{vue,js,ts,jsx,tsx}'],
}

export default config
