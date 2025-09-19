import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer'
import Main from './Components/Main'
import Navbar from './Components/Navbar'
import AboutUs from './Components/About'
import ContactUs from './Components/ContactUs'
import Career from './Components/Carrers'
import Service from './Components/Service'


function App() {
  const [activeTab,setActiveTab]=useState("Home")

  return (
    <>
      <Navbar setActiveTab={setActiveTab}/>
      {activeTab=="Home"&&<Main/>}
      {activeTab=="About us"&&<AboutUs/>}
      {activeTab=="Contact us"&&<ContactUs/>}
      {activeTab=="Careers"&&<Career/>}
      {activeTab=="Services"&&<Service/>}
      <Footer/>
    </>
  )
}

export default App
