
import ReviewM from "../modal/Reviewm"
import './Main.css'

function Listup({ Mdata, type, setClue}){

function Showmovie(x){
 setClue(x)
 document.querySelector('div#reviewmodal').style.display = "flex"
}


if (type === "recently"){
 let data = Mdata.sort((a,b) => {
    return Number(a.date.replace(/-/g,"")) > Number(b.date.replace(/-/g,"")) ? -1 : 1
  })
  return data.map((item,index) => {
    return (
      <li key={index} >
        <figure>
          <p>
          <img src="" alt=""/>
          <span onClick = {() => {Showmovie(item.name)}}>더보기</span>
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
          <span onClick = {() => {Showmovie(item.name)}}>더보기</span>
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

function Home({Rdata, Mdata, setClue, clue, query}){
  let FMdata = Mdata.filter((item) => {return item.name.replace(/(\s*)/g,"").toLowerCase().includes(query.toLowerCase().trim().replace(/(\s*)/g,"")) || item.story.replace(/(\s*)/g,"").toLowerCase().includes(query.toLowerCase().trim().replace(/(\s*)/g,"")) || item.actor.replace(/(\s*)/g,"").toLowerCase().includes(query.toLowerCase().trim().replace(/(\s*)/g,"")) || item.director.replace(/(\s*)/g,"").toLowerCase().includes(query.toLowerCase().trim().replace(/(\s*)/g,""))})
  return(
    <article id="home">
      <div id="homewrap">
        <h2 className="hide">main review</h2>
        <div>
          <h3>최신 영화순</h3>
          <div className="album">
          <div className="gall">
          <ul id="recent">
            <Listup Mdata = {FMdata} type = "recently" setClue ={setClue}/>
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
            <Listup Mdata = {FMdata} type = "score" setClue ={setClue}/>
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
          <figure>
            <img src="" alt=""/>
            <figcaption>
              <p className="ndate">2022-01-01</p>
              <p className="nwriter">홍길동</p>
              <p className="ntitle">여우주연상은?</p>
            </figcaption>
          </figure>
          <figure>
            <img src="" alt=""/>
            <figcaption>
              <p className="ndate">2022-02-02</p>
              <p className="nwriter">김가네</p>
              <p className="ntitle">배우주연상은?</p>
            </figcaption>
          </figure>
          </div>
          </div>
        </div>
      </div>
      <ReviewM Rdata = {Rdata} Mdata = {Mdata} clue = {clue}/>
    </article>
  )
}

export default Home