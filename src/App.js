import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './reset.css'

//comp
import Header from './component/Header'
import Footer from './component/Footer'
//page
import Home from './page/Main'
import News from './page/News'
// data
import MovieData from './data/movie.json'
import ReviewData from './data/review.json'




function App(){
  let data = []
  let test = btoa(unescape(encodeURIComponent(MovieData[1].name.replace(/(\s*)/g,"").toLowerCase())))
  let result = decodeURIComponent(escape(window.atob( test )));
  console.log(Number(MovieData[0].date.replace(/-/g,"")))
  console.log(test)
 for (let i of ReviewData[test]){
  data.push(i)
 }
 for (let k of MovieData){
  let data = btoa(unescape(encodeURIComponent(k.name.replace(/(\s*)/g,"").toLowerCase())))
  let score = 0
  let people = 0
  for (let i of ReviewData[data]){
    score += i.score
    people++
  }
  k["score"] = Math.floor((score/people)*100)/100
  console.log(k.score)
  console.log(data)
 }


  return(
    <BrowserRouter>
    <div id='wrap'>

    <Header/>
    <Routes>
      <Route path = "/" element ={<Home data = {data}/>}/>
      <Route path = "/news" element ={<News/>}/>
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
  )

}

export default App