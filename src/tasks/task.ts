import { AuthorizationRules, ModelBuilder } from "jinaga";
import { invitedUsers, Project } from "../projects/project";

export class Task {
  static Type = 'CoLab.Task';
  type = Task.Type;

  constructor(
    public project: Project,
    public createdAt: Date | string
  ) { }
}

export class TaskDescription {
  static Type = 'CoLab.Task.Description';
  type = TaskDescription.Type;

  constructor(
    public task: Task,
    public value: string,
    public prior: TaskDescription[]
  ) { }
}

export const taskModel = (m: ModelBuilder) => m
  .type(Task, f => f
    .predecessor("project", Project)
  )
  .type(TaskDescription, f => f
    .predecessor("task", Task)
    .predecessor("prior", TaskDescription)
  );

export const taskAuthorization = (a: AuthorizationRules) => a
  .type(Task, t => t.project.creator)
  .type(Task, (t, facts) =>
    invitedUsers(t.project, facts)
  )
  .type(TaskDescription, d => d.task.project.creator)
  .type(TaskDescription, (d, facts) =>
    invitedUsers(d.task.project, facts)
  );