// types/jest-axe.d.ts
import { AxeResults } from 'axe-core';
import 'jest';

declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveNoViolations(): R;
    }
  }
}
