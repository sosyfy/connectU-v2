type Post = {
  _id: string;
  user: string;
  userInfo: {
    _id: string;
    email: string;
    firstName: string;
    adminNo: string;
    lastName: string;
    emailVerified: boolean;
    photo?: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  title: string;
  photo?: string;
  liked: boolean;
  likes: string[] | [];
  comments: string[] | [];
  location: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type User = {
  _id: string;
  userInfo: {
    _id: string;
    email: string;
    firstName: string;
    adminNo: string;
    lastName: string;
    emailVerified: boolean;
    photo: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  connections: User[] | [];
  skills: string[];
  bookmarkedPosts: string[] | [];
  email: string;
  experience: ExperienceData[];
  education: EducationData[];
  preferredPositions: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  about: string;
  jobTitle?: string;
  location: string;
};

type ForumPost = {
  _id: string;
  title: string;
  creator: string;
  userInfo: {
    _id: string;
    email: string;
    firstName: string;
    adminNo: string;
    lastName: string;
    emailVerified: boolean;
    photo: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  description: string;
  likes: string[] | [];
  comments: Comment[] | string[];
  category: string;
  views: number;
  visitedBy: string[] | [];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type CommentType = {
  _id: string;
  post: string;
  user: string;
  userInfo: {
    _id: string;
    email: string;
    firstName: string;
    adminNo: string;
    lastName: string;
    emailVerified: boolean;
    photo: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  commentText: string;
  likes: string[] | [];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type EducationData =   {
  schoolName: string,
  course: string,
  summary:  string,
  _id: string
}

type ExperienceData =   {
  position: string,
  company: string,
  summary:  string,
  location:  string,
  startDate:  string,
  endDate:  string,
  _id: string
}

