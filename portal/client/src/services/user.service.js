import axios from 'axios';
import authHeader from './auth.header';
import { API_BASE_URL } from '../constants/apiConstants';

// Data service
const getStudyData = () => {
    return axios.get(API_BASE_URL + "/user", { headers: authHeader() });
};

const UserService = {
    getStudyData
};

export default UserService;