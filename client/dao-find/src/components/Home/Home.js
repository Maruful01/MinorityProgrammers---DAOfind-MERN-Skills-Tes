import React, { useState, useEffect } from 'react';
import Daos from './Daos/Daos';
import './Home.css';
import ListedDaos from './ListedDaos/ListedDaos';

const Home = () => {

    const [daos, setDaos] = useState ([]);

    const [noOfDao, setNoOfDao] = useState (9);

    useEffect ( () => {
        fetch ("https://arcane-atoll-19629.herokuapp.com/dao")
        .then(res => res.json())
        .then(data => setDaos (data.slice(0, noOfDao)))
      }, 
      [noOfDao])

    return (
        <div className="home-container">
            <div style={{backgroundColor: "white", padding: "10px"}}>
            <h3 style={{color: "black", margin: "20px 0px"}}><span className="dash"> ______  </span> <i style={{color: "gold"}} class="fas fa-trophy"></i>DAO Leaderboard  <span className="dash"> ______</span></h3>
            {
                daos.map (dao => <Daos daos={dao} key={dao.id} > </Daos>)
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