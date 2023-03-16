import { buildModel } from "jinaga";
import { projectModel } from "./project";
import { userModel } from "./user";

export const model = buildModel(m => m
  .with(userModel)
  .with(projectModel)
);
