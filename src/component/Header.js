

function Header(){
  return(
    <header>
      <div id="headwrap">
      <h1><img src="" alt="logo"/><span>Logois here</span></h1>
      <form>
        <fieldset>
          <legend>
            <label htmlFor="msearch">아이콘</label>
            <input name = "msearch" id="msearch"/>
          </legend>
        </fieldset>
      </form>
      <nav>
        <ul>
          <li>wrtieicon</li>
          <li>newsicon</li>
          <li>accounticon</li>
        </ul>
      </nav>
      </div>
    </header>
  )
}

export default Header