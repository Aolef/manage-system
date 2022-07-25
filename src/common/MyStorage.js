export default class MyStorage {
    static setItem(key,value,type = "localStorage") {
        if(type === "localStorage") {
            localStorage.setItem(key, value)
        }else if(type === "sessionStorage") {
            sessionStorage.setItem(key, value)
        }
    }
    static getItem(key,type = "localStorage") {
        if(type === "localStorage") {
            return localStorage.getItem(key)
        }else if(type === "sessionStorage") {
            return sessionStorage.getItem(key)
        }
    }
    static deleteItem(key, type = "localStorage") {
        if(type === "localStorage") {
            localStorage.removeItem(key);
        }else if(type === "sessionStorage") {
            sessionStorage.removeItem(key);
        }
    }
    static clearItem(type = "localStorage") {
        if(type === "localStorage") {
            localStorage.clear();
        }else if(type === "sessionStorage") {
            sessionStorage.clear();
        }
    }
}