function Child({title,description}){
  return(
    <div>
      <h2>{title}</h2>
      <p>{description.toUpperCase()}</p>
    </div>

  )
}

  function Parent(){

    return(
      <div>
        <Child title="Hello World" description="This is a description " />
      </div>
    )
  }



export default Parent;


// 


