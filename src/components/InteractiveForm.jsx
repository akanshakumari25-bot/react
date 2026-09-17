 
 function InteractiveForm(){

    

let clickHandler = ()=>{
    console.log("Button was clicked!")
}

let changeHandler =(e)=>{
    console.log(e.target.value)
}


let submitHandler = (e)=>{
    e.preventDefault()
    console.log("Form Submit")

}



 return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text"  onChange={changeHandler}  />

                 <button onClick={clickHandler}>Click me </button>   



            </form>
            
        </div>
    )


}

export default InteractiveForm;