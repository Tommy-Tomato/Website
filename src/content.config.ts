import { defineCollection, z } from 'astro:content';

const home = defineCollection({
  type: "data",
  schema: z.object({
    heroTitle: z.string(),
    heroSubtitle: z.string(),
    resumeUrl: z.string().optional(),
    heroImage: z.string().optional(),   // 👈 Add image support
  }),
});

const about = defineCollection({
  type: "data",
  schema: z.object({
    aboutText: z.string(),
  }),
});

const projects = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
    image: z.string().optional(),   // image support for projects too
  }),
});

export const collections = {
  home,
  about,
  projects
};
