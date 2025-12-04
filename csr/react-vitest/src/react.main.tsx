import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { initialize } from './initialize';

await initialize()
  .then(() => {
    const htmlElement: HTMLElement | null =
      document.querySelector<HTMLDivElement>('div#app');
    if (htmlElement instanceof HTMLElement) {
      const root = createRoot(htmlElement);
      root.render(
        <StrictMode>
          <App />
        </StrictMode>
      );
    }
  })
  .catch(console.error);
