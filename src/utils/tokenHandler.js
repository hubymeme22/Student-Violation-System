export const saveToken = (token) => {
  localStorage.setItem('webToken', token);
};

export const checkToken = () => {
  let token = localStorage.getItem('webToken');
  return token ? token : null;
};

export const clearToken = () => {
  localStorage.clear();
};
