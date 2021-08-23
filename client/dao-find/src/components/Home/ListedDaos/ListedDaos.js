import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ListedDaos.css'

const ListedDaos = () => {


    const [newDaos, setNewDaos] = useState ([]);

    const [length, setLength] = useState ();

    const [list, setList] = useState (false);

    const newAdded = length - 2;

    useEffect ( () => {
        fetch ("http://localhost:5000/dao")
        .then(res => res.json())
        .then(data => {
            setLength (data.length);
            setNewDaos(data.splice(newAdded, length)); 
                       })
      }, 
      [length])

      console.log ("newDaos", newDaos);
    return (
        <section>
            { list ? <button type="button" onClick={() => setList (false)} className="newly-dao-list btn btn-outline-light">Close Newly Listed DAOs</button> : 
                      <button type="button" onClick={() => setList (true)} className="newly-dao-list btn btn-outline-light">Open Newly Listed DAOs</button>
                    } 
                     
        <div className="daos-list">
        <h4>Newly Listed DAOs</h4>
        {
          newDaos.map (data => <div className="listed-div"> <img className="dao-img" src={data.img} alt="" /> 
                               <div> <h6>{data.name}</h6>
                                <h6 className="b-btn">$30003</h6>
                                <p>1 day ago</p>
                                </div> </div>)  
        }
 
         <Link to="/add">  <button><i class="fas fa-plus"></i> Add DAO</button> </Link>
        </div>
        {
            list ?         <div className="list">
            <h4>Newly Listed DAOs</h4>
            {
              newDaos.map (data => <div className="listed-div"> <img className="dao-img" src={data.img} alt="" /> 
                                   <div> <h6>{data.name}</h6>
                                    <h6 className="b-btn">$30003</h6>
                                    <p>1 day ago</p>
                                    </div> </div>)  
            }
     
             <Link to="/add">  <button><i class="fas fa-plus"></i> Add DAO</button> </Link>
            </div> 
            : 
            ""
        }
        </section>
    );
};

export default ListedDaos;