import { buildModel } from "jinaga";
import { userModel } from "./user";

export const model = buildModel(m => m
  .with(userModel)
);
