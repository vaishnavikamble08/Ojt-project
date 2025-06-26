import React from 'react'
import Footer from './Footer'
import './Home.css'

const Home = () => {
    return (
        <>
        <div className="container">
            <div className="college-box" >
                <div className="scrollable-content">
                <div className="image">
    <div><h1 className="h1">Welcome to Vivekanand College!</h1></div>
    <h3 className="h3">Your journey to excellence starts here.</h3>
    <div className="butto"><a href="/Admission"><button>Apply Now!</button></a></div></div>

                <p>
                   Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.
                </p>

                <p>
                   At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.
                </p>

                <h2>Why Choose Vivekanand College?</h2><hr/>

                <ol>
                    <li>Legacy of Excellence: Decades of commitment to quality education.</li>
                    <li>Experienced Faculty: Learn from renowned experts and passionate educators.</li>
                    <li>Modern Facilities: Well-equipped labs, expansive library, and comfortable campus.</li>
                    <li>Holistic Development: Focus on co-curricular activities, sports, and community service.</li>
                    <li>Strong Placements: Excellent career opportunities with leading companies.</li>
                </ol>
                <h2>Campus Life & Facilities</h2>
               <div className="contain"> <img src="/images/whatsapp image 2025-05-14 at 1-07-40 pm (1).jpg" className="photo"/>
                <img src="/images/Department pic.png" className="photo1"/></div>
                <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
                <p>Ready to explore our courses?</p>
                <a href="/Courses" data-discover="true"><div className="buttonn"><button>Explore Courses</button></div></a></div>
            </div></div>

            <Footer />
        </>
    )
}

export default Home