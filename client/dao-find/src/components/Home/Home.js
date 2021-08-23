import React, { useState, useEffect } from 'react';
import Daos from './Daos/Daos';
import './Home.css';
import ListedDaos from './ListedDaos/ListedDaos';

const Home = () => {

    const [daos, setDaos] = useState ([]);

    const [noOfDao, setNoOfDao] = useState (9);

    useEffect ( () => {
        fetch ("http://localhost:5000/dao")
        .then(res => res.json())
        .then(data => setDaos (data.slice(0, noOfDao)))
      }, 
      [noOfDao])

    return (
        <div className="home-container">

            <div style={{backgroundColor: "white", padding: "10px"}}>
            {
                daos.map (dao => <Daos daos={dao} > </Daos>)
            }
           <button className="more" onClick={() => setNoOfDao (noOfDao + 9)}>Load More</button>
           </div>

           <div>

           <ListedDaos />
           </div>

           
        </div>

    );
};

export default Home;