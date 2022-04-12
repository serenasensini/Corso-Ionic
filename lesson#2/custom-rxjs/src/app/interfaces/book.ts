export interface Book {
  _id: number;
  title: string;
  isbn: string;
  pageCount: number;
  publishedDate;
  thumbnailUrl: string;
  shortDescription?;
  longDescription: string;
  status: string;
  authors?;
  categories?;
}
