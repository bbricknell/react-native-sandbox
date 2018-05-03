export const testAction = 'TEST';

export function getTestText() {
  return { type: testAction, text: 'react native' };
}

export const updateAction = 'UPDATED';

export function getUpdatedText(data) {
  return { type: updateAction, data };
}