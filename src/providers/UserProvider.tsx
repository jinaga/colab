import { j } from '../jinaga-config';
import { User } from 'jinaga';
import React, { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { model } from '../model';
import { UserName } from '../model/user';

interface UserContextValue {
  user: User | null;
  error: Error | null;
}

export const UserContext = createContext<UserContextValue>({
  user: null,
  error: null,
});

const namesOfUser = model.given(User).match((user, facts) =>
  facts.ofType(UserName)
    .join(userName => userName.user, user));

interface GitHubProfile {
  displayName: string | null;
  username: string | null;
}

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { userFact, profile } = await j.login<User>();
      setUser(userFact);

      // Update the user's name if it has changed.
      const names = await j.query(namesOfUser, userFact);
      const gitHubProfile = profile as GitHubProfile;
      const name = gitHubProfile.displayName || gitHubProfile.username;
      if (name && (names.length !== 1 || names[0].value !== name)) {
        await j.fact(new UserName(userFact, name, names));
      }
    };

    fetchUser().catch((err) => {
      setError(err);
    });
  }, [setUser, setError]);

  return (
    <UserContext.Provider value={{ user, error }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { user, error } = React.useContext(UserContext);

  if (error) {
    throw error;
  }

  return user;
}