import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://github.com/luciosantibanez/porfolio2024.git',
  output: 'static',
  base: '/porfolio2024/', 
});