import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';
import { initialize } from './initialize';
import '@testing-library/jest-dom/vitest';
import './style.css';

// eslint-disable-next-line antfu/no-top-level-await
await initialize({ customSuffix: 'test' });

afterEach(() => {
  cleanup();
});
