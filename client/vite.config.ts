import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

function isExternal(id: string) {
  return !id.startsWith('.') && !path.isAbsolute(id) && !id.startsWith('@');
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  plugins: [react()],
});
