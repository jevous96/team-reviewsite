import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './reset.css'

//comp
import Header from './component/Header'
import Footer from './component/Footer'
//page
import Home from './page/Main'
import News from './page/News'

function App(){
  return(
    <BrowserRouter>
    <div id='wrap'>
    <Header/>
    <Routes>
      <Route path = "/" element ={<Home/>}/>
      <Route path = "/news" element ={<News/>}/>
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App