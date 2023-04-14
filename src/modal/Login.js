import { prepareshow, reset } from '../api/api'
import './Login.css'



function Login(){
  return(
    <div id="logmodal" className="modalbase">
      <div id="logbox">
        <h2>
          <img src="./images/icon/modallogo.png" alt="logo"/>
          <span>로그인</span>
        </h2>
        <p id="lclose" onClick={() => {reset('#logmodal',false)}}>
          <img src="./images/icon/x.png" alt="x"/> 
        </p>
        <form>
          <fieldset>
            <legend>
              <ul>
                <li>
                  <label htmlFor="login">로그인</label>
                  <input type="text" name="login" id="login" onFocus={(e)=>{e.target.previousElementSibling.style.opacity="0"}} onBlur={(e)=>{
                    return(e.target.value.length > 0) ? false : (e.target.previousElementSibling.style.opacity ="1")
                  }}/>
                </li>
                <li>
                  <label htmlFor="pass">패스워드</label>
                  <input type="password" name="pass" id="pass" onFocus={(e) => {e.target.previousElementSibling.style.opacity="0"}} onBlur={(e)=>{
                    return(e.target.value.length > 0) ? false : (e.target.previousElementSibling.style.opacity = "1")
                  }}/>
                </li>
                <li>
                  <span onClick={()=> {
                    prepareshow('flex')}}>아이디/</span>
                  <span onClick={()=> {
                    prepareshow('flex')}}>비밀번호 찾기</span>
                </li>
              </ul>
              <button onClick={(e)=>{
                return(e.preventDefault(),
                prepareshow('flex'))}}>로그인</button>
            </legend>
          </fieldset>
          <ul id="logset">
            <li>회원이 아니신가요?</li>
            <li onClick={()=> {
              prepareshow('flex')}}>회원가입</li>
          </ul>
        </form>
      </div>
    </div>
  )
}

export default Login