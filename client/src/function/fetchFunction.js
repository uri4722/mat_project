import axios from 'axios';

const BASEURL = 'http://localhost:7000/api/';


export const getAllPassedAwayApi = async () => {
    const URL = `${BASEURL}passedAway`;
    const { data } = await axios.get(URL);

    return data;
}

export const getPassedAwayApi = async (id) => {
    const URL = `${BASEURL}passedAway/${id}`;
    const { data } = await axios.get(URL);
    return data[0];
}

export const createPassedAwayApi = async (passedAway) => {
    const URL = `${BASEURL}passedAway`;
    const ans = await postRequst(passedAway, URL);
    return ans;

}

export const getMishnayotApi = async (id) => {
    const URL = `${BASEURL}commitments/passedAway/${id}`;
    const { data } = await axios.get(URL);
    return data;
}
export const getStorysApi = async (id) => {
    const URL = `${BASEURL}Storys/passedAway/${id}`;
    const { data } = await axios.get(URL);
    return data;
}

export const createMemorialProfileApi = async (id, memorialProfile) => {
    const URL = `${BASEURL}memorialProfile/${id}`;
    const ans = await postRequst(memorialProfile, URL)
    return ans;
}

export const createUser = async (user) => {
    const URL = `${BASEURL}user`;
    const ans = postRequst(user, URL);
    return ans;

}

const postRequst = async (body, path) => {
    try {
        const res = await axios.post(path, body);
        const { data } = res;
        return data;
    } catch (error) {
        throw error.response.data;
    }
}