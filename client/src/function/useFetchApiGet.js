import axios from "axios";
import { useEffect, useState } from "react";

const BASEURL = 'http://localhost:7000/api/';


export const useFetchApiGet = (url) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get(BASEURL + url);
                setData(data);
            } catch (error) {
                console.log(error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [url]);


    return [data, isLoading, error];
}