// uno.config.ts
import { defineConfig, presetAttributify, presetTypography, presetUno } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetAttributify(),
    presetTypography({
      cssExtend: {
        'pre': {
          color: '#f43f5e',
          backageColor: '#282c34',
        }
      }
    }),
    presetUno()
  ],
  theme: {
    colors: {
      "primary": '#1565D8',
      "dark": {
        "hard": '#0D2436',
        "light": '#5A7184',
        "soft": '#183B56'
      },
      waterMoon: "#A6B5DD",
      ripple: "#ceefe8",
      mountain: "#614da2",
      distant: "#7980c8"
    },
    fontFamily: {
      opensans: ["'Open Sans'", "sans-serif"],
      roboto: ["'Roboto'", "sans-serif"],
    },
  },
  rules: [
    ['stars', {
      'border-radius': '50%',
      'background-color': '#fff',
      'position': 'absolute',
    }],
    ['circle', {
      'clip-path': 'circle(50% at 50% 50%)'
    }],
    ['bg-night', {
      'background': 'linear-gradient(#4c3f6d, #6c62bb, #93b1ed)'
    }],
    ['bg-undersea', {
      'background': 'linear-gradient(#8da6e6, #788cc9)'
    }],
    ['bg-moon', {
      'background': 'linear-gradient(#fefefe, #fffbe8)'
    }],
    ['bg-shooting', {
      'background': 'linear-gradient(to right,rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)'
    }],
    ['shooting-star', {
      'animation': 'shooting-star 2s 2 ease-in-out',
      'animation-delay': '5s',
      'transform-origin': 'left',
      'transform': 'rotate(-40deg)'
    }],
    ['mountain-bottom', {
      'transform': 'scaleY(-1)'
    }],
    ['mountains', {
      'border-radius': '50%',
      'position': 'absolute',
      'z-index': '200',
    }]
  ]
})