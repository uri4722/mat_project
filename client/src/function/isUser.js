
function isUser(type) {
  const LEVELS = ["user","manager" ,"admin"];

  const user = JSON.parse(localStorage.getItem("user")) || JSON.parse(sessionStorage.getItem("user"));
  const role = user ? user.role : null;
  
  return LEVELS.indexOf(role) >= LEVELS.indexOf(type);
}
export default isUser;