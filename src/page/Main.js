


function Listup({data}){
  return data.map((item,index) => {
    return (
      <li key={index}>{item.reveiw}</li>
    )
  })


}


function Home({data}){
  return(
    <article id="home">
      <div id="homewrap">
        <ul id="recent">
            <Listup data = {data}/>
        </ul>
        <ul id="best">
          <Listup data = {data}/>
        </ul>
        <div id="news">
          <p>뉴-스</p>
        </div>
      </div>
      
    </article>
  )
}

export default Home