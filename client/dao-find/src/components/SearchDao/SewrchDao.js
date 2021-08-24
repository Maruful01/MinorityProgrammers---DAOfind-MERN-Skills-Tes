import React from 'react';
import './SearchDao.css';

const SewrchDao = (props) => {
    const {category, foundDate, id, img, name, twl} = props.sData;
    return (
        <div className="search-daos">
        <img className="daos-img" src={img} alt="" />                           
        <h4 className="border-right"> {name} </h4>
        <h4 className="border-right">${twl}</h4>
        <div className="grid-three">
        <h4><i class="fas fa-user"></i> <span>{id}</span></h4>
        <h6><i class="fas fa-diamond"></i> Ethereum</h6>
        <div>
          <button>Social</button> <br />
          <button>Grants</button>
        </div>
        <i class="fas fa-globe"></i>
        </div>
        </div>   
    );
};

export default SewrchDao;