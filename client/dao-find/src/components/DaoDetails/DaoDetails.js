import React, { useEffect, useState } from 'react';
import './DaoDetails.css';

const DaoDetails = (props) => {

    const {aum, category, foundDate, img, name, twl, id} = props.dao;

    console.log (props)

    const [followers, setFollowers] = useState ([]);

    const [more, setMores] = useState (2);

    useEffect ( () => {
        fetch ("https://arcane-atoll-19629.herokuapp.com/dao")
        .then(res => res.json())
        .then(data => setFollowers (data.slice(0, id)))
      }, 
      [id])

    return (
        <section >
 <div className="dao-details">
        <div>
         <div className="top-links">
          <div className="icons">
          <p> <i style={{color: "red"}} class="fas fa-heart"></i> 100</p>
          <p><i class="fab fa-twitter-square"></i></p>
          <p><i class="fab fa-github"></i></p>
          <p> <i class="fas fa-file-word"></i></p> 
          <p><i class="fas fa-paper-plane"></i></p>
          </div>
          <p className="founded">founded march 2019</p>
         </div>

         <p>Compound DAO is the first dao ever to be the dao that really matters in the game. The DAO that dictates  the aggregation protocol. </p>
         <p>DAO is known for this for more information hare, may need to put governance token and address and thi like that, need better icons on side and need hover state.</p>
         <div className="icons">
          <p style={{marginRight: "20px"}}>Members ({id})</p>
          <p className="founded">Twitter Followers ({id})</p>
         </div>
         
         {
             followers.slice(0, more).map ( data => <div> 
                                            <span className="icons"> <img style={{borderRadius: "50%", marginRight: "20px"}} className="dao-image" src={data.img} alt="" /> <h4>{data.name}</h4></span>
                                             <br />
                                             <p className="founded">Since {data.foundDate}</p>
                                             </div> )
         }
         <button className="more" onClick={() => setMores (more+ 2)}>Load More</button>
         </div>
          

         <div>
          {props.edit ? <i class="fas fa-edit" onClick={() => props.setEdit(false)}></i> : <i class="fas fa-edit" onClick={() => props.setEdit(true)}></i>}
            <h4 style={{fontWeight: "normal", color: "gray"}}>Recent Proposals <span className="dash"> ______</span></h4>
         <div>
             {
                  followers.slice(0, 2).map ( data =>        <div style={{width: "100%", textAlign: "right"}} className="proposal-grid"> 
                                                                  <p>Add Enzyme Vault Comound</p>
                                                                 <img style={{borderRadius: "50%"}} className="dao-image-sm" src={data.img} alt="" />
                                                                </div> )
                                                                
             }
             <p style={{fontSize: "20px", textAlign: "center", borderBottom: "2px solid lightgray", padding: "5px"}}>Voting Process DAO Structure </p>
         </div>
         <h4 style={{fontWeight: "normal", color: "gray"}}>Finding Members <span className="dash"> ______</span></h4>

         <div  className="finding-members">
         {
             followers.slice(0, 2).map ( data => <img src={data.img} alt="" /> )
         }
        </div>
         </div>
  </div>
         <div className="mint">
         <button>Mint Your DAO Membership As NFT</button>
         </div>
        </section>
    );
};

export default DaoDetails;