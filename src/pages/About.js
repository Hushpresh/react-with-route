import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
    return (
        <div id="about">
            <h1>About Astroweb</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem nobis harum corrupti consequuntur provident vitae animi itaque cumque maxime possimus aut eveniet quam minima, eos porro atque voluptas doloribus veritatis!
            </p>
            <button onClick={() => navigate('/contact')}Contact us now></button>
        </div>
    )
}

export default About
