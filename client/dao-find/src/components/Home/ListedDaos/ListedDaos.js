import React from 'react';
import { Link } from 'react-router-dom';
import './ListedDaos.css'

const ListedDaos = () => {
    return (
        <div className="daos-list">
         <Link to="/add">  <button><i class="fas fa-plus"></i> Add DAO</button> </Link>
        </div>
    );
};

export default ListedDaos;