// Copyright (c) 2026 David Dallet
// Licensed under BSL 1.1 - see LICENSE file

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n'; // Initialize i18n before rendering
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
