export const searchData = (str: string, search: string) => {
  return str.toLocaleLowerCase().includes(search.toLocaleLowerCase());
};
