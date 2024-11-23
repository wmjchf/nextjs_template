import { TRADE_TYPE } from "@/constant";

export const getTradeType = (type: TRADE_TYPE) => {
  if (type === TRADE_TYPE.BUY) {
    return {
      text: "buy",
      className: "text-green-300",
      bgClassName: "bg-green-300",
    };
  } else if (type === TRADE_TYPE.SELL) {
    return {
      text: "sell",
      className: "text-red-300",
      bgClassName: "bg-red-300",
    };
  } else {
    return {
      text: "create",
      className: "text-blue-300",
      bgClassName: "bg-blue-300",
    };
  }
};
