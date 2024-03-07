import axios from "axios";
import { useEffect, useState } from "react";

const BASEURL = 'http://localhost:7000/api/';


export const useFetchApiGet = (url) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get(BASEURL + url);
                console.log(data);
                setData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);


    return [data, loading, error];
}