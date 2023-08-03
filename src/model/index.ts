import { AuthorizationRules, buildModel } from "jinaga";
import { projectAuthorization, projectModel } from "../projects/project";
import { taskAuthorization, taskModel } from "../tasks/task";
import { userModel } from "./user";
import { userAuthorization } from "./user";

export const model = buildModel(m => m
  .with(userModel)
  .with(projectModel)
  .with(taskModel)
);

export const authorization = (a: AuthorizationRules) => a
  .with(userAuthorization)
  .with(projectAuthorization)
  .with(taskAuthorization)
  ;