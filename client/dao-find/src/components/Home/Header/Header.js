import React from 'react';
import logo from '../../../Logo/dao-logo.be289bfc (1).svg'
import "./Header.css";

const Header = () => {
    const placeholder = "Search DAOs";
    return (
        <section className="header-section">
            <div className="header">
            <img src={logo} className="bg-logo" alt="" />
            <form action="">
            <input className="search-input" type="search" name="" id="" placeholder={placeholder}/>
            </form>
            <button><i class="fal fa-wallet"></i> Connect Wallet</button>
            </div>
        </section>
    );
};

export default Header;