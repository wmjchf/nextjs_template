export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    // 生成一个 0 到 i 之间的随机索引
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // 交换当前元素和随机索引对应的元素
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
};
