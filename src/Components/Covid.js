import React, { useEffect, useState } from 'react';
import "./Covid.css";

const Covid = () => {

    const [value, setValue] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const data = await res.json();
            console.log(data.statewise[0]);
            setValue(data.statewise[0]);
        } catch (error) {
            // console.log(error);
        }
    };

    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <div>
            <h1 className='title'>Live</h1>
            <h1 className='title2'>Covid 19 Tracker</h1>

            <div className="app" >
                <div className="covid">
                    <h3>Our <span>Country</span></h3>
                    <h4>India</h4>
                </div>
                <div className="recover">
                    <h3>total <span>Recovered</span></h3>
                    <h4>{value.recovered}</h4>
                </div>
                <div className="confirm">
                    <h3>Total <span>Confirmed</span></h3>
                    <h4>{value.confirmed}</h4>
                </div>
                </div>
                <div className='app2'>
                <div className="deaths">
                    <h3>Total <span>Deaths</span></h3>
                    <h4>{value.deaths}</h4>
                </div>
                <div className="active">
                    <h3>Total <span>Active</span></h3>
                    <h4>{value.active}</h4>
                </div>
                <div className="update">
                    <h3>Last <span>Update</span></h3>
                    <h4>{value.lastupdatedtime}</h4>
                </div>
            </div>
        </div>
    )
}

export default Covid
