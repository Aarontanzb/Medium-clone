export interface User {
  id: string
  data: {
    email: string
    name: string
    followerCount: number
    imageUrl: string
  }
}

export interface UserData {
  email: string
  name: string
  followerCount: number
  imageUrl: string
}

export interface Article {
  id: string
  data: {
    author: string
    bannerImage: string
    body: string
    brief: string
    category: string
    postLength: number
    postedOn: string
    title: string
  }
}
