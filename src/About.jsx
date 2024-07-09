import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();
    const handleredirect=()=>{
        navigate('/data');
    }
  return (
    <div>
      <h1>About-Us</h1>
      <Link to='/sample'> Navigate to sample page </Link> <br />   
      <button onClick={handleredirect}>Click-me</button>
    </div>
  )
}

export default About
