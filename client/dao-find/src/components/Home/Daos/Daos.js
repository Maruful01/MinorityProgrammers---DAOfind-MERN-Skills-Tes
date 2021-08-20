import React from 'react';
import './Daos.css'

const Daos = (props) => {

    const {aum, category, foundDate, img, name, twl, id} = props.daos;
      console.log (props.daos)
    return (
        <div className="daos">
            <img className="daos-img" src={img} alt="" />
            <h4 className="border-right"> {name} </h4>
            <h4 className="border-right">${twl}</h4>
            <div>
                <h4><i class="fas fa-user"></i> <span>{id}</span></h4>
            </div>
        </div>
    );
};

export default Daos;