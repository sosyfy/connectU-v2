type Post = {
    _id: string,
    user: string,
    userInfo: {
      _id: string,
      email: string,
      firstName: string,
      adminNo: string,
      lastName: string,
      emailVerified: boolean
      photo?: string,
      createdAt: string,
      updatedAt: string,
      __v: number
    },
    title: string,
    photo?: string,
    liked: boolean,
    likes: string[]| [],
    comments: string[]| [],
    location: string,
    createdAt: string,
    updatedAt:string,
    __v: number
  }

type User = {
  _id: string,
  userInfo: {
    _id: string,
    email: string,
    firstName: string,
    adminNo: string,
    lastName:string,
    emailVerified: boolean,
    photo: string,
    createdAt: string,
    updatedAt: string,
    __v: number
  },
  connections: User[] | [],
  skills: any[],
  bookmarkedPosts: string[] | [],
  email: string,
  experience: any[],
  education: any[],
  preferredPositions: any[],
  createdAt: string,
  updatedAt: string,
  __v: number,
  about: string,
  jobTitle?: string,
  location: string
}