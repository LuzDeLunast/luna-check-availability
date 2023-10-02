import { objectToArray } from '../helpers';

export async function getRoomsService() {
  if (import.meta.env.DEV) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          import('../data/sample.json').then((data) => {
            const rooms = objectToArray(data.default);
            if (!rooms?.length > 0) {
              throw Error('non rooms');
            }
            return rooms;
          })
        );
      }, 2000);
    });
  }
  return await fetch(`${import.meta.env.VITE_INIT_API}/rooms`)
    .then((res) => res.json())
    .then((data) => {
      const rooms = objectToArray(data);
      if (!rooms?.length > 0) {
        throw Error('no rooms');
      }
      return rooms;
    });
}

export async function checkAvailability(payload) {
  return await fetch(`${import.meta.env.VITE_INIT_API}/availability`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((res) => res.json());
}
