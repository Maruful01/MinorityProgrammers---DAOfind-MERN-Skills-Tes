import React, { useState } from 'react';
import logo from '../../../Logo/dao-logo.be289bfc (1).svg'
import SewrchDao from '../../SearchDao/SewrchDao';
import "./Header.css";

const Header = () => {
    const placeholder = "Search DAOs";

    const [search, setSearch] = useState (false);
    const [sData, setData] = useState ([]);

    const searchInputHandler = e => {
        fetch ('https://arcane-atoll-19629.herokuapp.com/search?name=' + e.target.value) 
        .then (res => res.json())
        .then (ans =>  setData (ans))

        fetch ('https://arcane-atoll-19629.herokuapp.com/searchCtg?category=' + e.target.value) 
        .then (res => res.json())
        .then (ans =>  setData (ans))
       }
      
    return (
        <section className="header-section">
            <div className="header">
            <img src={logo} className="bg-logo" alt="" />
            <form action="">
            <input className="search-input" type="search" name="" id="" onChange={searchInputHandler} placeholder={placeholder}/>
            </form>
            <button><i class="fal fa-wallet"></i> Connect Wallet</button>
            </div>
            
            <section className="search">
            {
                sData.map (data => <SewrchDao sData={data}/>)             
            }
            </section>
        </section>
    );
};

export default Header;