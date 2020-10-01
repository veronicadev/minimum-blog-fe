import { SafeHtml } from '@angular/platform-browser';

export interface Post{
  _id?: Object;
  title: string;
  category: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
  excerpt?: string;
}

export interface PostsResponse{
  totalItems: number;
  totalPages: number;
  posts: Post[];
}

export interface IPaginationSettings{
  totalPages: number;
  currentPage: number;
  maxPaginationSize: number;
}

export class PaginationSettings implements IPaginationSettings{
  totalPages = 0;
  currentPage= 1;
  maxPaginationSize= 0;
}
