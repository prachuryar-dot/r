export const formatNumberWithCommas = (num: number | undefined): string => {
  if (num === undefined || num === null || isNaN(num)) return '0';
  return num.toLocaleString('en-IN');
};
