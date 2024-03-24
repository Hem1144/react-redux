import { types } from "./types";

const { BUY_ICECREAM } = types;

export const buyIceCream = (number = 1) => {
  return {
    type: BUY_ICECREAM,
    payload: number,
  };
};
