

function Contact(){
  return(
    <div id="contmodal">
      <div id="contbox">
        <h2>Contact</h2>
        <form>
          <fieldset>
            <legend>
              <ul>
                <li>
                  <label htmlFor="uname">name</label>
                  <input id="uname" name="uname" />
                </li>
                <li>
                  <label htmlFor="umail">email</label>
                  <input id="umail" name="umail" />
                </li>
                <li>
                  <label htmlFor="uname">message</label>
                  <textarea cols="10" rows="30"/>
                </li>
              </ul>
              <button>보내기</button>
            </legend>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Contact