import { IBook } from "../type";

interface FilterType {
  sortBy: {
    currentValue: string;
    order: string;
  };
  rating: {
    onetotwo: boolean;
    twotothree: boolean;
    threetofour: boolean;
    fourtofive: boolean;
  };
  publishedDate: {
    from: string;
    to: string;
  };
}

type RatingRange = { start: number; end: number }[];

function checkRating(bookRating: number, ratingRange: RatingRange): boolean {
  let result = false;
  ratingRange.forEach((range) => {
    if (range.start <= bookRating && range.end >= bookRating) result = true;
  });
  return result;
}

export function filterBooks(books: IBook[], filters: FilterType) {
  let ratingRange: RatingRange = [];
  if (filters.rating) {
    if (filters.rating.onetotwo) {
      ratingRange.push({ start: 1, end: 2 });
    }
    if (filters.rating.twotothree) {
      ratingRange.push({ start: 2, end: 3 });
    }
    if (filters.rating.threetofour) {
      ratingRange.push({ start: 3, end: 4 });
    }
    if (filters.rating.fourtofive) {
      ratingRange.push({ start: 4, end: 5 });
    }
  }
  const ratingFilteredBooks = books.filter((book) => {
    if (ratingRange.length === 0) return true;
    const bookRating = book?.volumeInfo?.averageRating;
    if (!bookRating) return false;
    return checkRating(bookRating, ratingRange);
  });

  const publishDateFilteredBook = ratingFilteredBooks.filter((book) => {
    let result = true;
    const from = filters.publishedDate.from,
      to = filters.publishedDate.to;
    const bookPublishDate = book?.volumeInfo?.publishedDate;
    if (!bookPublishDate) return false;
    if (from !== "" && new Date(from) > new Date(bookPublishDate))
      result = false;
    if (to !== "" && new Date(to) < new Date(bookPublishDate)) result = false;

    return result;
  });

  publishDateFilteredBook.sort((bookA, bookB) => {
    let bookAValue, bookBValue;
    if (filters.sortBy.currentValue === "date") {
      bookAValue = new Date(bookA?.volumeInfo?.publishedDate);
      bookBValue = new Date(bookB?.volumeInfo?.publishedDate);
    } else if (filters.sortBy.currentValue === "rating") {
      bookAValue = bookA?.volumeInfo?.averageRating;
      bookBValue = bookB?.volumeInfo?.averageRating;
    } else if (filters.sortBy.currentValue === "popularity") {
      bookAValue = bookA?.volumeInfo?.ratingsCount;
      bookBValue = bookB?.volumeInfo?.ratingsCount;
    } else {
      return 0;
    }
    if (filters.sortBy.order === "low") {
      if (!bookAValue) return -1;
      if (!bookBValue) return 1;
      return bookAValue >= bookBValue ? 1 : -1;
    } else {
      if (!bookBValue) return -1;
      if (!bookAValue) return 1;
      return bookAValue <= bookBValue ? 1 : -1;
    }
  });

  return publishDateFilteredBook;
}
