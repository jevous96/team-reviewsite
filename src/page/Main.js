
import ReviewM from "../modal/Reviewm"
import './Main.css'

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
        <h2 className="hide">main review</h2>
        <div>
          <h3>최신 영화순</h3>
          <div className="album">
          <div className="gall">
          <ul id="recent">
            <Listup Mdata = {Mdata} type = "recently" setClue ={setClue}/>
          </ul>
          </div>
          <p className="next">next</p>
          <p className="prev">prev</p>
          </div>
        </div>
        <div>
          <h3>베스트 평점순</h3>
          <div className="album">
          <div className="gall">
          <ul id="best">
            <Listup Mdata = {Mdata} type = "score" setClue ={setClue}/>
          </ul>
          </div>
          <p className="next">next</p>
          <p className="prev">prev</p>
          </div>
        </div>
        <div id="news">
          <h3>뉴스</h3>
          <div className="album">
          <div className="newsp">
          <p>뉴-스1</p>
          <p>뉴-스2</p>
          </div>
          </div>
        </div>
      </div>
      <ReviewM Rdata = {Rdata} Mdata = {Mdata} clue = {clue}/>
    </article>
  )
}

export default Home