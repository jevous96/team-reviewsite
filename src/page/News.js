

function NewsList({area}){
  let areas = [1,2,3,4]
  
  return areas.map((item) => {
    return(
      <div id="newsgall">
              <ul>
                <li>
                  <figure>
                    <img src="" alt=""/>
                    <figcaption>
                      <h3>Newstitle{item}</h3>
                      <p>NewsDate</p>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </div>
    )
  })
  
  
  
}

function News(){
  return (
   <article id="news">
    <div id="newswrap">
      <h2 className="hide">News</h2>
      <div id="News">
        <div id="recently">
            <NewsList area={'recently'}/>          
        </div>
        <div id="interview">
            <NewsList area={'interview'}/>          
        </div>
        <div id="award">
            <NewsList area={'award'}/>          
        </div>
      </div>
      <div id="newsside">
        <ul>
          <li>
            <figure>
              <img src="" alt="Bestnews1"/>
              <figcaption>
                <h3 className="ntitle">Newstitle</h3>
                <p className="ndate">NewsDate</p>      
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </div>
    
   </article>
  )
}

export default News