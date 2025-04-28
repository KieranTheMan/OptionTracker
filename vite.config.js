import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      layouts: path.resolve(__dirname, 'src/layouts'),
      pages: path.resolve(__dirname, 'src/pages'),
      assets: path.resolve(__dirname, 'src/assets'),
      routes: path.resolve(__dirname, 'src/routes'),
      views: path.resolve(__dirname, 'src/views'),
      variables: path.resolve(__dirname, 'src/variables'),
      // Add more aliases as needed assets/img/auth
    },
  },
});