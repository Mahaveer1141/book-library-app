export function showBookTitle(title: string) {
  const wordArray = title.split(" ");
  const slicedArray = wordArray.slice(0, 2);
  const resString = slicedArray.join(" ");
  return resString;
}
