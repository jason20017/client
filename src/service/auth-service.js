import axios from "axios";
const API_URL = "http://localhost:8080/api/user";

//class 在js 中可以創造很多object
class AuthService {
  login(email, password) {
    return axios.post(API_URL + "/login", { email, password });
  }
  logout() {
    localStorage.removeItem("user"); //要直接登出最簡單的辦法，就是將瀏覽器localStorage中的使用者資料刪掉
  }
  register(username, email, password) {
    return axios.post(API_URL + "/register", {
      username,
      email,
      password,
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user")); //用來判斷登入狀態，主要是登入後就不需要看到login的按鈕，若登出後就不需看到logout 的按鈕
  }

  loginWithGoogle() {
    return axios.get(API_URL + "/google");
  }
}

export default new AuthService(); //因為AuthService是個class 所以在作後直接用new 作一個object 出來
