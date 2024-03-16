import React from 'react'

import './styles.scss'

import thinking from '../../images/thinking.png';
import reading from '../../images/reading.png';

// component imports
import Divider from '../../components/Divider';



import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (

        <div className='container-landing'>
            <div className='container-hero'>
                <h1>Pantry Pal!</h1>
                <Divider />
            </div>
            <h2>AI Created Delicious Recipes Tailored to Your Pantry Ingredients.</h2>
            <div className='container-buttons'>
                <div className='container-link'>
                    <Link to='/generate'>
                        <img src={thinking} alt="thinking robot" />
                        <span>Create Recipe</span>
                    </Link>
                </div>
                <div className="container-link">
                    <Link to='/gallery'>
                        <span>Check Gallery</span>
                        <img src={reading} alt="thinking robot" />
                    </Link>
                </div>
            </div>

        </div >

    )
}
