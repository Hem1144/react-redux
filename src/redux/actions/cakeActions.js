import { types } from "./types";

const { BUY_CAKE } = types;
export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};
