import { types } from "./types";

const { BUY_ICECREAM } = types;

export const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
  };
};
