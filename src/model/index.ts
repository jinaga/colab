import { buildModel } from "jinaga";
import { projectModel } from "../projects/project";
import { taskModel } from "../tasks/task";
import { userModel } from "./user";

export const model = buildModel(m => m
  .with(userModel)
  .with(projectModel)
  .with(taskModel)
);
