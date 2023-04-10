import Contact from './Contact'
import './Write.css'

function Write(){
  return(
    <div id="writmodal" className="modalbase">
      <div id="writbox">
        <h2>나의 평점/리뷰</h2>
        <form>
          <fieldset>
            <legend  className='writeform'>
              <ul>
                <li>
                  <label></label>
                  <input></input>
                </li>
                <li>

                </li>
                <li>
                  <label></label>
                  <input></input>
                </li>
                {/* <button onClick={(e) => {Checkcont(e)}}>작성하기</button> */}
              </ul>
            </legend>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Contact