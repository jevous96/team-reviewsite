
import Contact from "../modal/Contact"


function Footer(){
  return(
    <footer>
      <div id="footerwrap">
        <p id="flogo">icons</p>
        <div id="fcontact" onClick={() => {
          document.querySelector('div#contmodal').style.display = "flex"
        }}>
            <p className="fcicon">icons</p>
            <p className="fccont">
              서비스를 이용하시는데
              불편 사항은 이메일로 접수 부탁드립니다.
            </p>
        </div>
        <ul id="devloper">
          <li><span><img src="./images/icon/users.png" alt="users"/></span><span>github.com/jevous96</span></li>
          <li><span><img src="./images/icon/users.png" alt="users"/></span><span>github.com/Eundoe</span></li>
        </ul>
      </div>
      <small>
          copyright&copy;2023 teamproject
        </small>
      <Contact/>
    </footer>
  )
}

export default Footer