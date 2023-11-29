import { FC,useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

//components
import Header from './Components/Header';
import MemberProfile from './Components/MemberProfile';

const App : FC = () => {
  const [isDarkMode,setIsDarkMode] = useState(false);
  
  
    /*toggle dark mode Button*/
  // const toggleDarkMode = () =>{
  //   setIsDarkMode(!isDarkMode);
  //    var elemment = document.body;
  //    elemment.dataset.bsTheme = elemment.dataset.bsTheme == "light" ? 'dark' : 'light';
  // }

  return (
    <>
    <Header />
     {/*about Project*/} 
   
    </>
  );
}

export default App;
