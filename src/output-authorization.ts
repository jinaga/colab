import { AuthorizationRules, describeAuthorizationRules } from "jinaga";
import { model } from "./model";
import { userAuthorization } from "./model/user";
import { projectAuthorization } from "./projects/project";
import { taskAuthorization } from "./tasks/task";

const authorization = (a: AuthorizationRules) => a
  .with(userAuthorization)
  .with(projectAuthorization)
  .with(taskAuthorization)
  ;

console.log(describeAuthorizationRules(model, authorization));