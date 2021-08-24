import React from 'react';
import './LearnDao.css';

const learnDaos = ["The History of DAOs & The Future", "Free Code to Build Your Own DAO", "No COde daaS DAO as Service", "Top Voting Systems For DAOs", "On-Chain VS Off-Chain DAOs",
                    "Which Blockchains Has More DAOs", "Which Blockchains Has More DAOs", "The History of DAOs & The Future", "The History of DAOs & The Future"]

const LearnDao = () => {
    return (
        <section style={{backgroundColor: "white", padding: "50px 0px"}}>
            <h3 style={{color: "black", margin: "20px 0px"}}><span className="dash"> ______  </span> <i style={{color: "gold"}} class="fas fa-trophy"></i> Learn DAO <span className="dash"> ______</span></h3>
        <div className="learn-dao-component">  
            {
                learnDaos.map (data => <div className= "learn-dao"> <div className="border-b"><h4><i class="fas fa-globe"></i> {data}</h4> </div> <div><button>Social</button>
                <button>Grants</button> </div></div>)
            }
        </div>
        </section>
    );
};

export default LearnDao;