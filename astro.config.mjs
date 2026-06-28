import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://semprevisao.com.br',
  integrations: [sitemap()],
  image: {
    domains: ['backup.clinicassempresorrindo.com.br'],
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
