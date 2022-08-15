import React, {useState, useEffect } from 'react';
import axios from 'axios';


function DataFetching() {
    
    const [lists, setLists] = useState<string[]>([]);

    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=45185b5e8a7f944eef598a5d36fde903')
        .then(res => {
            console.log(res)
        })
            .catch(err => {
                console.log(err)
        })
    })
    return (
       <div>
        <ul>
            {/* {lists.map(list => (
                <li key={list.id}>{list.main}</li>
            ))} */}
        </ul>
       </div>
)
}

export default DataFetching;