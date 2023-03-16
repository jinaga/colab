# Jinaga React Starter Kit

This is a starter kit for building a web application with [Jinaga](https://jinaga.com) and [React](https://reactjs.org).

First, create a React app using the TypeScript template:

```bash
npx create-react-app my-app --template typescript
cd my-app
```

Then install Jinaga, Material UI, and React Router:

```bash
npm i jinaga @emotion/react @emotion/styled @mui/icons-material @mui/material @stablelib/uuid react-router-dom
```

Delete the following files:

- logo.svg
- App.css
- index.css
- App.test.tsx
- App.tsx

Then start replacing the contents of files. Start with index.tsx:

```tsx
import ReactDOM from 'react-dom/client';
import { Providers } from './providers/Providers';
import { Router } from './routing/Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Providers>
    <Router />
  </Providers>
);
```