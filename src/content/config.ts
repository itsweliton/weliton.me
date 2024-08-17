// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      category: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});

const booksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    author: z.string(),
    cover: z.string(),
    link: z.string(),
    yearRead: z.date().optional(),
    rating: z.string().optional(),
    status: z.enum(['Readed', 'Wishlist', 'Reading']),
  })
})
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
  books: booksCollection,
};