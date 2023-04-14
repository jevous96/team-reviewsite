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
      <img src={item.pic} alt={item.title}/>
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
          <img src={item.pic} alt={item.title}/>
          <span onClick = {() => {Showmovie(item.name)}}>
           <img src="./images/icon/playt.png" alt="play" />
          </span>
          </p>
          <figcaption>
          <p>
            <img src={'./images/rating/rating0' + Math.floor(item.score) + '.png'} alt="icon"/>
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
  let SlideNum0 = 0
  let SlideNum1 = 0
  let CurrentShow = 6

  function SlideContents(x,y){
    let list = document.querySelector('div.gall>ul>li').offsetWidth
    let max = Mdata.length
    
    if( window.outerWidth < 1440 && window.outerWidth > 1224){
      CurrentShow = 5
    }
    if(window.outerWidth < 1224){
      CurrentShow = 4
    }


  if (document.querySelector('div.gall>ul').childElementCount > 2){

    if (y === 0){
      if (x.getAttribute('class') === "next"){
       (SlideNum0 < (max - CurrentShow)) ? SlideNum0++ : SlideNum0 = 0
    
        x.previousElementSibling.firstChild.style.marginLeft = "-" + (list * SlideNum0) + "px"
      }
      if (x.getAttribute('class') === "prev"){
        (SlideNum0 < 1) ? SlideNum0 = (max - CurrentShow) : SlideNum0 -= 1 

        x.previousElementSibling.previousElementSibling.firstChild.style.marginLeft = "-" + (list * SlideNum0) + "px"
      }
    }

    if (y === 1){
      if (x.getAttribute('class') === "next"){
        (SlideNum1 < (max - CurrentShow)) ? SlideNum1++ : SlideNum1 = 0
        x.previousElementSibling.firstChild.style.marginLeft = "-" + (list * SlideNum1) + "px"
      }
      if (x.getAttribute('class') === "prev"){
        (SlideNum1 < 1) ? SlideNum1 = (max - CurrentShow) : SlideNum1 -= 1 
        x.previousElementSibling.previousElementSibling.firstChild.style.marginLeft = "-" + (list * SlideNum1) + "px"
      }
    }
  }
  }

  window.addEventListener("resize", () => {
    if (window.outerWidth < 980){
      document.querySelectorAll('div.gall>ul').forEach((item) => {item.style.marginLeft = "0"})
    }
  })


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
          <p className="next" onClick={(e) => {SlideContents(e.target,0)}}>
            <img src="./images/icon/next.png" alt="next" onClick={(e) => {SlideContents(e.target.parentNode,0)}}/>
          </p>
          <p className="prev">
            <img src="./images/icon/prev.png" alt="prev" onClick={(e) => {SlideContents(e.target.parentNode,0)}}/>
          </p>
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
          <p className="next">
          <img src="./images/icon/next.png" alt="next" onClick={(e) => {SlideContents(e.target.parentNode,1)}}/>
          </p>
          <p className="prev" >
          <img src="./images/icon/prev.png" alt="prev"
          onClick={(e) => {SlideContents(e.target.parentNode,1)}}/>
          </p>
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