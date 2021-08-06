const setData = (key, value) => {
  localStorage.setItem(key, value);
};

const getData = (key) => {
  return localStorage.getItem(key);
};

const removeData = (key) => {
  localStorage.removeItem(key);
};

export { setData, getData, removeData };
