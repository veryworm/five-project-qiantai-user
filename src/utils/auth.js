export function setToken(token){
    localStorage.setItem("token",token);
}
export function getToken(token){
    return localStorage.getItem("token");
}
export function removeToken(token){
    return localStorage.removeItem("token")
}