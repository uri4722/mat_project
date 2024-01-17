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

export const getYahrzeitApi = async () => {
    const URL = `${BASEURL}passedAway/yahrzeit`;
    const { data } = await axios.get(URL);
    return data;
}

export const getManagerPassedAwayApi = async (id) => {
    const URL = `${BASEURL}manager/${id}/passedAway`;
    const { data } = await axios.get(URL);
    return data;
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
export const getStoresApi = async (id) => {
    const URL = `${BASEURL}Stores/passedAway/${id}`;
    const { data } = await axios.get(URL);
    return data;
}

export const createMemorialProfileApi = async (id, memorialProfile) => {
    const URL = `${BASEURL}memorialProfile/${id}`;
    const ans = await postRequst(memorialProfile, URL)
    return ans;
}

export const createUser = async (user) => {
    const URL = `${BASEURL}user/register`;
    const ans = postRequst(user, URL);
    return ans;

}

export const createManager = async (user) => {
    const URL = `${BASEURL}manager/register`;
    const ans = postRequst(user, URL);
    return ans;

}

export const fetchLogin = async (type,user) => {
    const URL = `${BASEURL}${type}/login`;
    const ans = postRequst(user, URL);
    return ans;
}
export const updateManager = async (manager, id) => {
    const URL = `${BASEURL}manager/${id}`;
    const ans = await putRequst(manager, URL);
    return ans;
}
export const deleteStoryApi = async (id) => {
    const URL = `${BASEURL}stores/${id}`;
    const ans = await axios.delete(URL);
    return ans;
}
export const getMyCommitmentsApi = async (id) => {
    const URL = `${BASEURL}commitments/${id}`;
    const { data } = await axios.get(URL);
    return data;
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

const putRequst = async (body, path) => {
    try {
        const res = await axios.put(path, body);
        const { data } = res;
        return data;
    } catch (error) {
        throw error.response.data;
    }

}

