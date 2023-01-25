export const isNumber = (v: string) => {
  return Number.isInteger(Number(v)) && v !== null;
};
