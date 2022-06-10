import React from 'react';
import './Navbar.css';

function Navbar (){

    return(
        <section className = "navbar">
            <a href ="/" className = "navbar-item">Home</a>
            <a href ="/Upcoming Events" className = "navbar-item">Upcoming Events</a>
            <a href ="/Volunteers" className = "navbar-item">Volunteers</a>
            <a href ="/Facebook Icon" className = "navbar-item">Facebook Icon</a>
        </section>
    )
}

export default Navbar;