

function NewsList({area}){
  let areas = [1,2,3,4]
  
  return areas.map((item) => {
    return(
      
              <ul>
                <li>
                  <figure>
                    <img src="" alt=""/>
                    <figcaption>
                      <h3 className="ntitle">Newstitle{item}</h3>
                      <p className="ndate">NewsDate</p>
                    </figcaption>
                  </figure>
                </li>
              </ul>

    )
  })
  
  
  
}

function News({Ndata}){
  return (
   <article id="news">
    <div id="newswrap">
      <h2 className="hide">News</h2>
      <div id="News">
        <div id="recently">
          <div id="newsgall">
            <NewsList area={'recently'}/>          
          </div>
        </div>
        <div id="interview">
          <div id="newsgall">
            <NewsList area={'interview'}/>  
          </div>        
        </div>
        <div id="award">
          <div id="newsgall">
            <NewsList area={'award'}/>
          </div>          
        </div>
      </div>
      <div id="newsside">
            <NewsList area={'count'}/>
      </div>
    </div>
    
   </article>
  )
}

export default News