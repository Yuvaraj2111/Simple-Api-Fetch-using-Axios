import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Card, Word } from './styled'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then((res) => {
                setData(res.data)
                console.log(data)
            }).catch(e => console.log("err"))
    }


    return (
        <>
            <Word type="title">Simple Url API fetch Page</Word>
            <div className="row">
                {data.map(e => (
                    <Card key={e.id}>
                        <Word type="Name">{e.id}.{e.name}</Word>
                        <Word>{e.address.suite + e.address.street + e.address.city}</Word>
                        <Word>{e.phone}</Word>
                    </Card>
                ))}

            </div>
        </>
    );
}

export default App;