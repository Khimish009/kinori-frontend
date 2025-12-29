import 'app/providers/i18n/i18n';
import './index.css';

import { App } from 'app/App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');

if (!container) {
  throw new Error("Root element with id 'root' not found");
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
