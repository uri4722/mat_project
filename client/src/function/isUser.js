function isUser(type) {
  return localStorage.getItem(type) || sessionStorage.getItem(type) ? true : false;
}
export default isUser;