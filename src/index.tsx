import ReactDOM from 'react-dom/client';
import { Providers } from './providers/Providers';
import reportWebVitals from './reportWebVitals';
import { Router } from './routing/Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Providers>
    <Router />
  </Providers>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
