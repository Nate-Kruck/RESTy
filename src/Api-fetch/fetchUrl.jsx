export const fetchUrl = (url, method, data) => {
  // eslint-disable-next-line max-len
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
};
