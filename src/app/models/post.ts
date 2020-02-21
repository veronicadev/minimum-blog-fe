export interface Post{
  _id?: Object;
  title: string;
  category: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface PostsResponse{
  totalItems: number;
  totalPages: number;
  posts: Post[];
}
