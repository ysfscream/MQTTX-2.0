import type { Config } from 'tailwindcss'
import sharedConfig from 'tailwind-config/tailwind.config'

const config: Pick<Config, 'presets'> = {
  presets: [
    sharedConfig,
    {
      content: ['./src/renderer/index.html', './src/renderer/src/**/*.{vue,js,ts,jsx,tsx}'],
    },
  ],
}

export default config
