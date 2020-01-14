import React, {useState, useEffect} from 'react';
import logo from '../j.png';
import '../App.css';

const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData(){
            let response = await fetch(
                "https://joke3.p.rapidapi.com/v1/joke", 
                { 
                    "headers": {
                        "x-rapidapi-host": "joke3.p.rapidapi.com",
	                    "x-rapidapi-key": "10d2a9fcb6mshc2ed34fb35700cap1bc73fjsnb9e30f7966e0",
            }});
            let respData = await response.json();
            if(respData.nsfw === false) setData(respData.content);
            setLoading(false);
        };
        fetchData();
    }, []);

    return {data, loading};
}
function Counter() {

    const [count, setCount] = useState(0);
    const {data, loading} = useFetch(
        "https://joke3.p.rapidapi.com/v1/joke", 
        {
            "method": 'GET',
            "headers": {
                "x-rapidapi-host": "joke3.p.rapidapi.com",
	            "x-rapidapi-key": "10d2a9fcb6mshc2ed34fb35700cap1bc73fjsnb9e30f7966e0",
            }
        }
    ) 

    return (
    <header className="App-header">
    <div onClick={() => setCount(count + 1)}>
        <img src={logo} className="App-logo" alt="logo"/>
    </div>
    <h2>
        You've clicked Jerome {count} times.
    </h2>
    <span style={{fontStyle: 'italic'}}>
    {loading ? <p>Loading...</p> : <p>{data}</p>}
    </span>
    </header>
    );
};


export default Counter;