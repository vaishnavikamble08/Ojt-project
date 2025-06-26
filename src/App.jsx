import './App.css'
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import Home from './Components/Home'
import About from './Components/About'
import Courses from './Components/Courses'
import Contact from './Components/Contact'
import Admission from './Components/Admission';
import ChatbotComponent from './Components/Chatbot/ChatbotComponent';

const App = () => {

  return (
    
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

    
  )
}

export default App
