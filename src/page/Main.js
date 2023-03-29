
import ReviewM from "../modal/Reviewm"

function Listup({ Mdata, type, setClue}){

if (type === "recently"){
 let data = Mdata.sort((a,b) => {
    return Number(a.date.replace(/-/g,"")) > Number(b.date.replace(/-/g,"")) ? -1 : 1
  })
  return data.map((item,index) => {
    return (
      <li key={index} onClick = {() => {setClue(item.name)}}>
        <figure>
          <p>
          <img src="" alt=""/>
          <span>더보기</span>
          </p>
          <figcaption>
          <p>
            <img src="" alt="icon"/>
            <span>{item.score}</span>
          </p>
          <p>{item.name}</p>
          </figcaption>
        </figure>
      </li>
    )
  })
}

if (type === "score"){
  let data = Mdata.sort((a,b) => {
    return a.score > b.score ? -1 : 1
  })
  return data.map((item,index) => {
    return (
      <li key={index} onClick = {() => {setClue(item.name)}}>
        <figure>
          <p>
          <img src="" alt=""/>
          <span>더보기</span>
          </p>
          <figcaption>
          <p>
            <img src="" alt="icon"/>
            <span>{item.score}</span>
          </p>
          <p>{item.name}</p>
          </figcaption>
        </figure>
      </li>
    )
  })  
}

else{
  return false
}


}


function Home({Rdata, Mdata, setClue, clue}){
  return(
    <article id="home">
      <div id="homewrap">
        <ul id="recent">
          <Listup Mdata = {Mdata} type = "recently" setClue ={setClue}/>
        </ul>
        <ul id="best">
          <Listup Mdata = {Mdata} type = "score" setClue ={setClue}/>
        </ul>
        <div id="news">
          <p>뉴-스</p>
        </div>
      </div>
      <ReviewM Rdata = {Rdata} Mdata = {Mdata} clue = {clue}/>
    </article>
  )
}

export default Home