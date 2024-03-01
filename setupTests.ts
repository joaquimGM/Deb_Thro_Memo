import '@testing-library/jest-dom';
import { jest } from '@jest/globals';

jest.mock('react', () => {
  const originalReact = jest.requireActual('react');
  return {
    ...(originalReact as Record<string, unknown>),
    useRef: jest.fn(() => ({ current: null })),
    useState: jest.fn((initialValue: any) => [initialValue, jest.fn()] as [any, () => void]),
    useEffect: jest.fn(),
  };
});

