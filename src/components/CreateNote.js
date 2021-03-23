import React, {useState} from "react"; 
import axios from "axios"; 

function CreateNote(){

    const [input,setInput] = useState({
        title : "",     // the name from the form below
        content : ""
    }); 

        function handleChange(event){
           event.preventDefault(); 
           
           const {name,value} = event.target; //event.target is an object
           
        
        setInput(prevInput => {
            console.log("prevInput", prevInput);
        return {
           
            ...prevInput, // in the next line we are overwriting the input state
            [name]: value // trying to access the values "name" and "value here"
        }
    } )
 }

    function handleClick(event){
        event.preventDefault();
        const newNot = {
            title : input.title,
            content: input.content
        }
        axios.post("http://localhost:3000/create", newNot) // 3001 from server port and add proxy in the json package as well
        
    }
    return(
       
        <div className="container">
        <h1>Create Note Page</h1>
        
        <form onSubmit = {handleChange}>

            <div className = "form-group">

                <input onChange={handleChange} value ={input.title} name = "title" placeholder="time" className = "form-control"></input>

            </div>

            <div className = "form-group">
                <textarea onChange = {handleChange} value = {input.content} name = "content" placeholder = "task name" className = "form-control"></textarea>

            </div>
        <button onClick = {handleClick}>ADD NOTE</button>
        </form>
        </div>
    )
}

export default CreateNote; 