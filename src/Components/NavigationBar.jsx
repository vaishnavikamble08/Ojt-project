import React from 'react'
import {Link} from 'react-router-dom'
import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <body><div id='nav'>
      <div className="title"><h5>Vivekanand College</h5></div>
            <ul>
                <Link to={'/'}><li>Home</li> </Link>
                <Link to={'/About'}>   <li>About</li> </Link>
                <Link to={'/Courses'}> <li>Courses</li></Link>
                <Link to={'/Contact'}> <li>Contact</li></Link>
                <Link to={'/Admission'}><div className="bu"> <button>Apply Now!</button></div></Link>
            </ul>
           
        </div>
    </body>

  )
}

export default NavigationBar