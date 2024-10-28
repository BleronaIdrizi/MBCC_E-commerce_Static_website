// https://vitejs.dev/config/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/*', // Burimi i skedarëve që do të kopjohen
          dest: 'src/assets'   // Destinacioni në dosjen 'dist'
        }
      ]
    })
  ]
});
