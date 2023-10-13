import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  content: [],
  theme: {
    extend: {
      colors: {
        green: {
          'mqttx-primary': '#34c388',
        },
      },
    },
  },
  plugins: [],
}
export default config
