export const sortObjArr = <T extends Record<string, unknown>>(
  obj: T[],
  key: string,
): T[] => {
  return obj.sort((a, b) => {
    if (typeof a[key] == "string" && typeof b[key] == "string") {
      return a[key] > b[key] ? -1 : 1;
    }
    if (typeof a[key] == "number" && typeof b[key] == "number") {
      return a[key] - b[key];
    }
    return 0;
  });
};
