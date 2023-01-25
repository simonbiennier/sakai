export const titleCase = (s: string) => {
  let l = s;
  if (!l) l = "";
  return s.replace(/\b\w+/g, (t) => {
    return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
  });
};
