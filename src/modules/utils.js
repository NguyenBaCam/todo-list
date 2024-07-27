export const getQueryString = (key) => {
    return new URLSearchParams(location.search).get(key);
  };