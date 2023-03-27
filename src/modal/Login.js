


function Login(){
  return(
    <div id="logmodal">
      <div id="logbox">
        <h2>Login</h2>
        <form>
          <fieldset>
            <legend>
              <ul>
                <li>
                  <label htmlFor="login">로그인</label>
                  <input type="text" name="login" id="login"/>
                </li>
                <li>
                  <label htmlFor="pass">패스워드</label>
                  <input type="password" name="pass" id="pass"/>
                </li>
              </ul>
              <button>로그인</button>
            </legend>
          </fieldset>
          <ul id="logset">
            <li>회원가입</li>
            <li>비밀번호/아이디찾기</li>
          </ul>
        </form>
      </div>
    </div>
  )
}

export default Login