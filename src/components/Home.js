import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home">
            <p>Welcome to BMI Calculator <Link to="/bmi">go and calculate BMI</Link></p>
        </div>
    )
}

export default Home
