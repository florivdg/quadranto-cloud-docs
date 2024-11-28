// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "quadranto Docs",
      customCss: ["./src/styles/custom.css"],
      social: {
        github: "https://github.com/florivdg/quadranto-cloud",
      },
      sidebar: [
        {
          label: "Self-Hosting",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Docker", slug: "self-hosting/docker" },
          ],
        },
      ],
    }),
  ],
});
