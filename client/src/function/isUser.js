
function isUser(type) {
  const user = JSON.parse(localStorage.getItem("user")) || JSON.parse(sessionStorage.getItem("user"));
  const role = user ? user.role : null;

  return role === type;
}
export default isUser;