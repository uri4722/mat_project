import axios from 'axios';

const BASEURL = 'http://localhost:7000/api/';




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
    if (passedAway.image) {
        console.log(passedAway.image);
        const imageData = new FormData();
        imageData.append('file', passedAway.image);
        imageData.append('upload_preset', 'mat-project');
        const res = await axios.post('https://api.cloudinary.com/v1_1/dwuo8k58o/image/upload', imageData);
        console.log(res);
        if (res.status !== 200) {
            throw new Error('image not uploaded');
        } else {
            // console.log(res.data.secure_url);
            // console.log(res.data.public_id);
            passedAway.image = res.data.secure_url;
        }
    }
    console.log(passedAway);
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

export const fetchLogin = async (user) => {
    const URL = `${BASEURL}user/login`;
    const ans = postRequst(user, URL);
    return ans;
}
export const updateUser = async (manager, id) => {
    // need to change to new URL to everyone are users
    const URL = `${BASEURL}user/${id}`;
    // console.log(URL);
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
        const res = await axios.post(path, body, { withCredentials: true } );
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

