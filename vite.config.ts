// import Inspect from 'vite-plugin-inspect'
import { resolve } from 'path'

export default {
//   plugins: [Inspect()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cgLab41: resolve(__dirname, 'src/cg-lab4-1/index.html'),
        cgLab42: resolve(__dirname, 'src/cg-lab4-2/index.html'),
      }
    }
  }
}