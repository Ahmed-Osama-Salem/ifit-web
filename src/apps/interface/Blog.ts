export interface Blog {
  _id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  thumbnail: string | null;
  images: string[] | null;
  number_of_views: number;
  number_of_comments: number;
  category: string[];
  helpful: boolean;
  publish: boolean;
  date: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
}
