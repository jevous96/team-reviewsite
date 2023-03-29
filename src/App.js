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
import { useState } from 'react'




function App(){
  let Rdata = []
  let Mdata = []
  const [clue,setClue] = useState(MovieData[1].name)
  const [query,setQuery] = useState('')
  let basesixfour = btoa(unescape(encodeURIComponent(clue.replace(/(\s*)/g,"").toLowerCase())))
  let result = decodeURIComponent(escape(window.atob( basesixfour )));

 for (let i of ReviewData[basesixfour]){
  Rdata.push(i)
 }
 for (let i of MovieData){
  let data = btoa(unescape(encodeURIComponent(i.name.replace(/(\s*)/g,"").toLowerCase())))
  let score = 0
  let people = 0
  for (let j of ReviewData[data]){
    if (j.length === 0){
      return false
    }
    else{
    score += j.score
    people++
    }
  }
  i["score"] = Math.floor((score/people)*100)/100
  Mdata.push(i)
 }

  return(
    <BrowserRouter>
    <div id='wrap'>

    <Header setQuery = {setQuery} Mdata = {Mdata}/>
    <Routes>
      <Route path = "/" element ={<Home Rdata = {Rdata} Mdata ={Mdata} setClue = {setClue} clue = {clue}/>}/>
      <Route path = "/news" element ={<News/>}/>
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
  )

}

export default App