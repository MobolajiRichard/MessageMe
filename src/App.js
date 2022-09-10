import Sidebar from './ChatSidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Main from './ChatMain/Main';
import './App.css';
import { useSelector } from 'react-redux';
import {useState, useEffect} from 'react'
import Login from './Login';



function App() {
  const [toggleSidebar, setToggleSidebar] = useState(true)
  const user  = useSelector(state => state.user.currentUser)

  useEffect(()=>{
    if (window.screen.width > 600){
        setToggleSidebar(true) 
    }
  }, [])

  function detectWindowSize() {
    if (window.innerWidth > 600){
      setToggleSidebar(true) 
  }else if(window.innerWidth < 600){
    setToggleSidebar(false) 
  }      
}

 window.onresize = detectWindowSize;

const hideSidebar = () =>{
  setToggleSidebar(prev => !prev)
}

  return (
    <div className="clone-app">
      {!user ? (
        <div>
          <Login/>
        </div>
      ):(
        <div className='chatapp_container'>
          <div className='chatapp_sidebar'>
            {toggleSidebar && <Sidebar hideSidebar={hideSidebar} />}
          </div>
        <div className='chatapp_main'>
          <Routes>
            < Route path='/rooms/:roomId' element={ <Main hideSidebar={hideSidebar} />}/>
          </Routes>
          <Routes>
            < Route path='/' element={ <Main hideSidebar={hideSidebar} />}/>
          </Routes>
        </div>
      </div>
      )}
    </div>
  );
}

export default App;
