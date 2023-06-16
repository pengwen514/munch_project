import axios from "axios";
import React, { useState } from "react";

const useAxios = () => {
    const [response, setResponse] = useState([])
    const [error, setError] = useState([])

    const fetchData = async () => {
        try{
            const res = await axios('https://www.themealdb.com/api/json/v1/1/random.php')
            setResponse(res.data)
        }catch(err){
            setError(err)
        }
    }

    return {
        response,
        error,
        fetchData
    }
}

export default useAxios;