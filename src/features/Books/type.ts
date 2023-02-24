export interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    averageRating?: number;
    authors?: string[];
    imageLinks?: {
      smallThumbnail?: string;
      thumbnail?: string;
    };
    categories?: string[];
    pageCount: number;
    publisher: string;
    publishedDate: string;
    description?: string;
    infoLink: string;
    ratingsCount?: number;
  };
  [key: string]: any;
}
