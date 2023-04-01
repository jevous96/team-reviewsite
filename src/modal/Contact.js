import './Contact.css'

let contname = document.querySelector('input#uname')
let contmail = document.querySelector('input#umail')
let contmsg = document.querySelector('textarea#umessage')

function Contact(){

  let newmessage = {
    name : "",
    mail : "",
    message : ""
  }

  function Checkcont(e){
    e.preventDefault();
    let errorw = []
    if (contname.value.length === 0 || /^[가-힣|a-z|A-Z]+$/.test(contname.value) !== true){
      errorw.push("이름")
    }
    if (contmail.value.length === 0 || /(^[-_.]?[0-9a-zA-Z]{4,13})+\@([0-9a-z]+)\.([a-z]{2,3})$/i.test(contmail.value) !== true){
      errorw.push("이메일")
    }
    if (contmsg.value.length === 0 ){
      errorw.push("메세지")
    }
    return (errorw.length > 0) ? window.alert(`잘못된 ${errorw.join(',')} 입니다.`) : 
    (newmessage.name = contname.value,
    newmessage.mail = contmail.value,
    newmessage.message = contmsg.value,
    console.log(newmessage),
    ResetContact())
  }

  function ResetContact(){
    document.querySelector('div#contmodal').style.display = "none"
    contname.value = ""
    contname.previousElementSibling.style.opacity = "1"
    contmail.value = ""
    contmail.previousElementSibling.style.opacity = "1"
    contmsg.value = ""
    contmsg.previousElementSibling.style.opacity = "1"
  }


  return(
    <div id="contmodal" className="modalbase">
      <div id="contbox">
        <p id="cclose" onClick={() => {ResetContact()}}>close</p>
        <h2>Contact</h2>
        <form>
          <fieldset>
            <legend className='contactform'>
              <ul>
                <li>
                  <label htmlFor="uname">name</label>
                  <input id="uname" name="uname" 
                  onFocus={(e) => {e.target.previousElementSibling.style.opacity ="0"}} onBlur = {(e) => {
                    return (e.target.value.length > 0) ? false : (e.target.previousElementSibling.style.opacity ="1")
                    }} />
                </li>
                <li>
                  <label htmlFor="umail">email</label>
                  <input id="umail" name="umail" onFocus={(e) => {e.target.previousElementSibling.style.opacity ="0"}} onBlur = {(e) => {return (e.target.value.length > 0) ? false : (e.target.previousElementSibling.style.opacity ="1")}} />
                </li>
                <li>
                  <label htmlFor="umessage">message</label>
                  <textarea name='umessage' id='umessage' cols="30" rows="10" onFocus={(e) => {e.target.previousElementSibling.style.opacity ="0"}} onBlur = {(e) => {return (e.target.value.length > 0) ? false : (e.target.previousElementSibling.style.opacity ="1")}} />
                </li>
              </ul>
              <button onClick={(e) => {Checkcont(e)}}>보내기</button>
            </legend>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Contact