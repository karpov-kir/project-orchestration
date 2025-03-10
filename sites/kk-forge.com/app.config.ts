import { defineConfig } from '@solidjs/start/config';
import solidSvgPlugin from 'vite-plugin-solid-svg';

export default defineConfig({
  vite: {
    plugins: [solidSvgPlugin()],
  },
});
