function getUser() {
    return sessionStorage.getItem('user') ?
        JSON.parse(sessionStorage.getItem('user')) :
        JSON.parse(localStorage.getItem('user'));
}
export default getUser;