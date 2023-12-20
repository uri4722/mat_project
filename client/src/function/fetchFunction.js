import axios from 'axios';
import { json } from 'react-router-dom';

const BASEURL = 'http://localhost:7000/api/';


export const getAllPassedAwayApi = async () => {
    const URL = `${BASEURL}passedAway`;
    const { data } = await axios.get(URL);

    return data;
}

export const getPassedAwayApi = async (id) => {
    const URL = `${BASEURL}passedAway/${id}`;
    const { data } = await axios.get(URL);
    return data;
}

export const createPassedAwayApi = async (passedAway) => {
    const URL = `${BASEURL}passedAway`;
    console.log(passedAway);
    try {
        const res = await axios.post(URL, passedAway);
        console.log(res);
        const { data } = res;
        return data;
    } catch (error) {
        throw error.response.data;
    }

}
