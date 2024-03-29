import axios from "axios";

const API_URL = "http://onlin-LoadB-12U5T18J0TO18-7c5f47c684b4f1ef.elb.eu-north-1.amazonaws.com:8081/api/auth/";

const register = (firstName, lastName, username, email, password, confirmPassword, contactNumber) => {
  return axios.post(API_URL + "register", {
    firstName,
    lastName,
    username,
    email,
    password,
    confirmPassword,
    contactNumber
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService;
