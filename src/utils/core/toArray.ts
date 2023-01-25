export const toArray = <T>(v: T | T[]): T[] => {
  if (v instanceof Array) return v;
  return [v];
};
