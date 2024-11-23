const formatNumber = (num: number) => {
  return num >= 1000 ? (num / 1000).toFixed(2).replace(/\.00$/, "") + "k" : num;
};
export const mathStr = (
  num: number,
  decimals: number,
  isForatK: boolean = false
) => {
  const factor = Math.pow(10, decimals);
  const number = Math.floor(num * factor) / factor;
  if (isForatK) {
    return `${formatNumber(number)}`;
  }
  return `${number}`;
};
export const capitalizeFirstLetter = (str: string) => {
  if (!str) return str; // 如果字符串为空，直接返回
  return str.charAt(0).toUpperCase() + str.slice(1);
};
