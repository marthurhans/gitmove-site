import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { readFileSync, writeFileSync } from 'fs';

const copyRedirects = () => {
  return {
    name: 'copy-redirects',
    writeBundle() {
      const src = resolve(__dirname, 'public/_redirects');
      const dest = resolve(__dirname, 'dist/_redirects');
      const content = readFileSync(src);
      writeFileSync(dest, content);
    },
  };
};


export default defineConfig({
  plugins: [react(), copyRedirects()]
});