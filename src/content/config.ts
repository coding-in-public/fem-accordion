import { defineCollection, z } from "astro:content";

const faqs = defineCollection({
  type: "data",
  schema: z.object({
    question: z.string(),
    answer: z.string(),
  }),
});

export const collections = {
  faqs,
};
