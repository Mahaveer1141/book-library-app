interface ICategoryFilter {
  title: boolean;
  author: boolean;
  category: boolean;
  publisher: boolean;
}

const AUTHOR_FILTER = "+inauthor:";
const TITLE_FILTER = "+intitle:";
const PUBLISHER_FILTER = "+inpublisher:";
const CATEGORY_FILTER = "+subject:";

export function filterUrl(
  URL: string,
  searchParamter: string,
  categoryFilter: ICategoryFilter
) {
  let resURL = URL;
  if (categoryFilter.author) resURL += AUTHOR_FILTER + searchParamter;
  if (categoryFilter.title) resURL += TITLE_FILTER + searchParamter;
  if (categoryFilter.publisher) resURL += PUBLISHER_FILTER + searchParamter;
  if (categoryFilter.category) resURL += CATEGORY_FILTER + searchParamter;
  if (URL === resURL) {
    resURL += searchParamter;
  }
  return resURL;
}
