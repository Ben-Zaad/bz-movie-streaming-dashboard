export const sortArrayByCategory = (
  arr: any[],
  category: string
) => {
  return arr.sort((el1, el2) => {
    return Number(el2[category]) - Number(el1[category]);
  });
};
