import './Write.css'



function ScoreRadio(){
  let score  = [1,2,3,4,5]
  return score.map(item => {
    return (
      <span className='wscorebox' key={item}>
        <input type='radio' name='score' value={1}/>
        <label htmlFor='score'><img src={`./images/rating/rating0${item}.png`} alt={'rating' + {item}}/><span>{item}점</span></label>
      </span>
    )
  })
}

function ResetWrite(){
  document.querySelector('input#wsearch').value = ""
  document.querySelector('input#wsearch').previousElementSibling.style.opacity = "1"
  document.querySelector('textarea#wreview').value = ""
  document.querySelector('textarea#wreview').previousElementSibling.style.opacity = "1"
  document.querySelector('div#writemodal').style.display = "none"
}



function WriteReview(){
  return(
    <div id="writemodal" className="modalbase">
      <div id="writebox">
        <p id="wclose" onClick={() => {ResetWrite()}}>
          <img src="./images/icon/x.png" alt="x"/> 
        </p>
        <h2><img src="./images/icon/modallogo.png" alt="logo"/> <span>나의 평점 리뷰</span></h2>
        <form>
          <fieldset>
            <legend className="writeform">
              <ul>
                <li>
                  <label htmlFor="wsearch">영화검색</label>
                  <input id="wsearch" name="wsearch"
                    onFocus={(e) => {e.target.previousElementSibling.style.opacity="0"}} onBlur = {(e) => {
                      return (e.target.value.length > 0) ? false : (e.target.previousElementSibling.style.opacity ="1")
                    }}
                  />
                </li>
                <li id='scorev'>
                <ScoreRadio/>
                  </li>
                <li>
                  <label htmlFor="wreview">리뷰작성</label>
                  <textarea id="wreview" cols="30" rows="10" onFocus={(e) => {e.target.previousElementSibling.style.opacity="0"}} onBlur = {(e) => {
                      return (e.target.value.length > 0) ? false : (e.target.previousElementSibling.style.opacity ="1")
                    }}/>
                  <span id='maxword'>180/180</span>
                </li>
              </ul>
              <button>제출하기</button>
            </legend>
          </fieldset>
        </form>
      </div>
    </div>
  )
}


export default WriteReview