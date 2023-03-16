import { AuthorizationRules, FactRepository, LabelOf, ModelBuilder, User } from "jinaga";

export class Project {
  static Type = 'CoLab.Project';
  type = Project.Type;

  constructor(
    public creator: User,
    public guid: string
  ) { }
}

export class ProjectName {
  static Type = 'CoLab.Project.Name';
  type = ProjectName.Type;

  constructor(
    public project: Project,
    public value: string,
    public prior: ProjectName[]
  ) { }
}

export class Invitation {
  static Type = 'CoLab.Project.Invitation';
  type = Invitation.Type;

  constructor(
    public project: Project,
    public user: User,
    public createdAt: Date | string
  ) { }
}

export const projectModel = (m: ModelBuilder) => m
  .type(Project)
  .type(ProjectName, f => f
    .predecessor("project", Project)  
    .predecessor("prior", ProjectName)
  )
  .type(Invitation, f => f
    .predecessor("project", Project)
    .predecessor("user", User)
  );

export const invitedUsers = (project: LabelOf<Project>, facts: FactRepository) =>
  facts.ofType(Invitation)
    .join(invitation => invitation.project, project)
    .selectMany(invitation => facts.ofType(User)
      .join(user => user, invitation.user)
    );

export const projectAuthorization = (a: AuthorizationRules) => a
  .type(Project, p => p.creator)
  .type(ProjectName, n => n.project.creator)
  .type(ProjectName, (n, facts) =>
    invitedUsers(n.project, facts)
  )
  .type(Invitation, i => i.project.creator)
  .type(Invitation, (i, facts) =>
    invitedUsers(i.project, facts)
  );