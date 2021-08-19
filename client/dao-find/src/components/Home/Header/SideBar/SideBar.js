import React from 'react';
import "./SideBar.css"

const SideBar = () => {
    return (
        <div className="nav-bar">
            <ul>
                <li><i class="fas fa-home-lg-alt"></i>Leader board</li>
                <li><i class="fad fa-equals"></i> Dashboard</li>
                <li><i class="fas fa-users"></i> People</li>
                <li><i class="fas fa-book-open"></i>Learn</li>
                <li><i class="fas fa-shopping-cart"></i> Sponsor</li>
                <li><i class="fas fa-dollar-sign"></i> Earn</li>
            </ul>
        </div>
    );
};

export default SideBar;