import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className='container-navbar'>
            <Link to='/'>Pantry Pal!</Link>
            <ul>
                <li><Link to='/gallery'>Gallery</Link></li>
                <li><Link to='/generate'>Create</Link></li>
            </ul>
        </div>
    )
}
