import adapter from '@sveltejs/adapter-auto';
import { sveltePreprocess } from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess({
    scss: {
      includePaths: ['./src/styles'],
    }
  }),

  kit: {
    adapter: adapter(),
    alias: {
      '@components': resolve('./src/components'),
      '@lib': resolve('./src/lib'),
      '@styles': resolve('./src/styles'),
      // Add more aliases as needed
    }
  }
};

export default config;
