import './App.css'
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import Home from './Components/Home'
import About from './Components/About'
import Courses from './Components/Courses'
import Contact from './Components/Contact'
import Admission from './Components/Admission';
import ChatbotComponent from './Components/Chatbot/ChatbotComponent';
import DeveloperInfoPopup from './Components/DeveloperInfo/DeveloperInfoPopup';
import { useState } from 'react';

const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Vaishnavi Kamble"
          studentPhotoUrl="/images/v.jpeg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    
       <BrowserRouter>
    <NavigationBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
         <Route path='/Courses' element={<Courses/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Admission' element={<Admission/>}/>
    </Routes>
    <ChatbotComponent/>
    </BrowserRouter>
</>
    
  )
}

export default App
