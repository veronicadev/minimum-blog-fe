export interface Post{
  _id?: Object;
  title: string;
  content: string;
  imageUrl: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface PostsResponse{
  totalItems: number;
  totalPages: number;
  posts: Post[];
}
