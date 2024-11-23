export const getFullNum = (num: number) => {
  //处理非数字
  if (isNaN(num)) {
    return num;
  }

  //处理不需要转换的数字
  var str = "" + num;
  if (!/e/i.test(str)) {
    return num;
  }

  return num.toFixed(12).replace(/\.?0+$/, "");
};
