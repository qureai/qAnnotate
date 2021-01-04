import axios from "axios";
import { API_BASE_URL } from "../constants/apiConstants";

const login = (username, password) => {
    const payload = {
        "username": username,
        "password": password
    };

    return (axios.post(API_BASE_URL + "/auth/signin", payload)
            .then((response) => {
                localStorage.setItem("user", JSON.stringify(response.data));
                return response.data;                
            })
    );
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    login,
    logout,
    getCurrentUser
};

export default AuthService;