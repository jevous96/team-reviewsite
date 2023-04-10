import './Reviewm.css'

function ReviewDetail({Rdata}){
  return Rdata.map((item,index) => {
    return (
      <figure key={index}>
        <img src="" alt="" />
        <figcaption>
          <h3>{item.name}</h3>
          <p className="score">{item.score}점</p>
          <p className='reviewing'>{item.reveiw}</p>
        </figcaption>
      </figure>
    )
  })
}

function ReviewM({Rdata, Mdata, clue}){
  let FiltData = Mdata.filter((item) => {
    return item.name === clue
  })
  return (
    <div id="reviewmodal" className="modalbase">
      <div id="modalbox">
      <h2>Logoishere</h2>
      <p id="mclose" onClick={() => {document.querySelector('div#reviewmodal').style.display = "none"}}>close</p>
        <div id="moviedata">
          <p className="video">
            {FiltData[0].name}
          </p>
          <div className="videoinfo">
            <p className="avgscore">{Math.floor(FiltData[0].score)}</p>
            <ul>
              <li className='director'>{FiltData[0].director}</li>
              <li className='actor'>{FiltData[0].actor}</li>
            </ul>
            <p className="story">
              {FiltData[0].story}
            </p>
          </div>
        </div>
        <div id="reviewdata">
          <ReviewDetail Rdata = {Rdata}/>
        </div>
      </div>
    </div>
  )
}

export default ReviewM