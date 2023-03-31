
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
            <p className="fccont">고객센터</p>
        </div>
        <ul id="devloper">
          <li><span>icon</span><span>개발자명</span></li>
          <li><span>icon</span><span>개발자명</span></li>
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