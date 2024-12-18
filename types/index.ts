import { Slug } from "sanity"

export type StartupCardType = {
  _id: string,
  title: string,
  _createdAt: string,
  slug: {
    current: string,
    _type: Slug
  },
  author: {
    _id: string,
    name: string,
    image: string,
    bio: string
  },
  views: number,
  description: string,
  category: string,
  image: string
}