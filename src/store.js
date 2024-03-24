import { createStore } from "redux";
import cakeReducer from "./redux/reducers/cakeReducer";

export const store = createStore(cakeReducer);
