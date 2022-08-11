import { useEffect, useState } from 'react'
import './weather.css'
import axios from 'axios'

function weatherInfo({ fetchUrl}) {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setInfo(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    return (
        <div>
            <h2>weather</h2>
        </div>
    )
}

export default weatherInfo;