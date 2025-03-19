import { createContext } from "react";

export const LikeContext = createContext({
  likeStatus: true,
  likeStatusHandler() {},
});
