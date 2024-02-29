function getUser(type) {
    return sessionStorage.getItem(type) ?
        JSON.parse(sessionStorage.getItem(type)) :
        JSON.parse(localStorage.getItem(type));
}
export default getUser;