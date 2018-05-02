export const testAction = 'TEST';

export function getTestText() {
  return { type: testAction, text: 'react native' }
}