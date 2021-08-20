import React, { useState, useEffect } from 'react';
import Daos from './Daos/Daos';
import './Home.css';

const Home = () => {

    const [daos, setDaos] = useState ([]);

    const [noOfDao, setNoOfDao] = useState (9);

    useEffect ( () => {
        fetch ("http://localhost:5000/dao")
        .then(res => res.json())
        .then(data => setDaos (data.slice(0, noOfDao)))
      }, 
      [noOfDao])
    const lter = daos.filter((currentValue, index, arr) => {
        return arr
    })
      console.log ("daos", lter)

    return (
        <div style={{backgroundColor: "white", padding: "10px"}}>
            {
                daos.map (dao => <Daos daos={dao} > </Daos>)
            }
                    <button className="more" onClick={() => setNoOfDao (noOfDao + 9)}>Load More</button>
        </div>

    );
};

export default Home;