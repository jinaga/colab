import CssBaseline from '@mui/material/CssBaseline';
import React, { PropsWithChildren } from 'react';
import { ThemeContainer } from './ThemeContainer';
import { UserProvider } from './UserProvider';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <React.StrictMode>
      <UserProvider>
        <ThemeContainer>
          <CssBaseline />
          {children}
        </ThemeContainer>
      </UserProvider>
    </React.StrictMode>
  );
};