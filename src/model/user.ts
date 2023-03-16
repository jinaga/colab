import { AuthorizationRules, ModelBuilder, User } from "jinaga";

export class UserName {
    static Type = 'CoLab.User.Name';
    type = UserName.Type;

    constructor(
        public user: User,
        public value: string,
        public prior: UserName[]
    ) { }
}

export const userModel = (m: ModelBuilder) => m
    .type(User)
    .type(UserName, f => f
        .predecessor("user", User)
        .predecessor("prior", UserName)
    )

export const userAuthorization = (a: AuthorizationRules) => a
    .any(User)
    .type(UserName, n => n.user)
