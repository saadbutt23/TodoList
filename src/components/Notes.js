import React, {useEffect,useState} from "react"; 


function Notes(){

const [notes,setNotes] = useState([{
    title: "",
    content : ""
}])

useEffect(()=>{
    fetch("/notes").then(res=>{
        if(res.ok){
            console.log("this is",res); 
            return res.json();
        }
        
    }).then(jsonRes=>{
        console.log(jsonRes); 
        return setNotes(jsonRes); 
    })
}, [])


    return(
<div className="container">
        <h1>Notes</h1>
        {notes.map(note=>
        <div>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            </div>
            )}
        </div>
    )
}

export default Notes; 