
import ReviewM from "../modal/Reviewm"
import './Main.css'


function NewsCard({Ndata, setNewsD}){
  let mainnews = []
  let bestnews = Ndata.sort((a,b) => {
    return (a.count > b.count ? -1 : 1)
  })
  
  for (let i = 0; i < 2 ; i++){
    mainnews.push(bestnews[i])
  }

  function Countup(x){
    let copyarr = [...Ndata]
    let idx = copyarr.findIndex((item) => item.id === x)
    console.log(copyarr[idx].count)
    copyarr[idx] = {...copyarr[idx], count : copyarr[idx].count + 1}
    setNewsD(copyarr)
  }

return mainnews.map((item,index) => {
    return (
    <figure key={index}>
      <img src="" alt=""/>
      <figcaption onClick={() => {Countup(item.id)}}>
        <p className="mndate">{item.date}</p>
        <p className="mntitle">{item.title}</p>
      </figcaption>
    </figure>
    )
  })
}



function Listup({ Mdata, type, setClue}){
  let data= Mdata
  function Showmovie(x){
   setClue(x)
   document.querySelector('div#reviewmodal').style.display = "flex"}

if (type === "recently"){
   data = Mdata.sort((a,b) => {
    return Number(a.date.replace(/-/g,"")) > Number(b.date.replace(/-/g,"")) ? -1 : 1
  })}
if (type === "score"){
  data = Mdata.sort((a,b) => {
    return a.score > b.score ? -1 : 1
  })}

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


function Home({Rdata, Mdata, setClue, clue, query, Ndata, setNewsD}){
  

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
            <Listup Mdata = {FMdata} type = {"recently"} setClue ={setClue}/>
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
            <Listup Mdata = {FMdata} type = {"score"} setClue ={setClue}/>
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
              <NewsCard Ndata ={Ndata} setNewsD = {setNewsD}/>
          </div>
          </div>
        </div>
      </div>
      <ReviewM Rdata = {Rdata} Mdata = {Mdata} clue = {clue}/>
    </article>
  )
}

export default Home