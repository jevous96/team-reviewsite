

function ReviewDetail({Rdata}){
  return Rdata.map((item,index) => {
    return (
      <figure key={index}>
        <img src="" alt="" />
        <figcaption>
          <h3>{item.name}</h3>
          <p className="score">{item.score}점</p>
          <p>{item.reveiw}</p>
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
    <div id="reviewmodal">
      <div id="modalbox">
        <div id="moviedata">
          <p className="video">
            {FiltData[0].name}
          </p>
          <div className="videoinfo">
            <p className="score">{Math.floor(FiltData[0].score)}</p>
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