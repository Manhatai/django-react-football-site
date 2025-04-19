import {React, useState, useEffect} from 'react'
import AxiosInstance from "./Axios.jsx";

const Create = () => {
    const [country, setCountry] = useState([])

    console.log(country)

    const GetData = () => {
        AxiosInstance.get(`country/`).then((res) => {
            setCountry(res.data)
        })
    }
    useEffect(() => {
        GetData()
    },[])
    return(
        <div>
            This is the create page
        </div>
    )
}

export default Create