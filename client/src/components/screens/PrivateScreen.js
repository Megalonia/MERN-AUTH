import {useState, useEffect} from 'react';
import axios from 'axios';

const PrivateScreen = ({history}) => {
    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");

    useEffect(() => {
        if(!localStorage.getItem("authToken")) {
            history.push("/login")
        }
        const fetchPrivateData = async () =
    }, [])
    //return (
    //)
}

export default PrivateScreen;
