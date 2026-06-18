import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import avatar from '../src/assets/images/favicon.png';

// Injection dynamique du favicon
const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/png';
link.href = avatar;
document.head.appendChild(link);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);