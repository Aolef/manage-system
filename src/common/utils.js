import MyStorage from "./MyStorage"
/**
 * logout
 */
export function logout() {
    MyStorage.clear()
}
export function checkUserIsLogin() {
    let loginInfo = MyStorage.getItem("Authorization")
    console.log("getToken",loginInfo)
    if(loginInfo === "validToken"){
        return true
    }else {
        return false
    }
}