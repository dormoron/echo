// uno.config.ts
import { defineConfig, presetAttributify, presetTypography, presetUno } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets:[
    presetAttributify(),
    presetTypography({
      cssExtend:{
        'pre':{
          color: '#f43f5e',
          backageColor: '#282c34',
        }
      }
    }),
    presetUno()
  ],
  theme:{
    colors:{
        "primary": '#1565D8',
        "dark":{
          "hard":'#0D2436',
          "light":'#5A7184',
          "soft": '#183B56'
        }
    },
    clipPath: {
      'circle-50': 'circle(50% at 50% 50%)',
    },
    fontFamily: {
      opensans: ["'Open Sans'", "sans-serif"],
      roboto: ["'Roboto'", "sans-serif"],
    },
  }
})