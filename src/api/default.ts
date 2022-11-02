import axios from "axios";

const key = process.env.REACT_APP_API_KEY;

export const getData = () => axios.get(`/api/jobtest/${key}`);

export const saveData = () => axios.get(`/api/jobtest/${key}`);
