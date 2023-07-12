import { useState } from "react"
import "./styles.css"
export default function App(){
  const [newItem,setNewItem]=useState("")
  const [todo,settodo]=useState([]) 
  function handle(e)
  {
    e.preventDefault()
    settodo((currenttodo) => {return [...currenttodo,{id:crypto.randomUUID(),title:newItem,completed:false},]})
  setNewItem("") //Reset the textbox empty after an item is added
  }
  function toggle(id,completed)
  {
   settodo(currenttodo=> {
    return currenttodo.map(todo=>{
      if(todo.id ==id)
      {
        return {...todo,completed}
      }
      return todo
    })
   })  
  }
  function deletetodo(id)
  {
    settodo(currenttodo =>{
      return currenttodo.filter(todo=> todo.id!==id)//keeps all the items except the the idem with this id
    })
  }
    return (
    <>
      <form onSubmit={handle} className="newitem">
        <div className="formrow">
          <label htmlFor="item">
            You can add new item here   </label>
            <input value={newItem} 
          onChange={e => setNewItem(e.target.value)}//
          type="text" id="item"/>
          
        </div>
        <p><button className="btn">ADD ITEM</button></p>
        
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todo.length==0 && " Currently No Todos "}
        {todo.map(todo => {          //main func that creates the list
          return( <li key={todo.id}>
          <label>
            <input type="checkbox" checked={todo.completed}
            onChange={e=> toggle(todo.id,e.target.checked)}/>
            {todo.title}
          </label>
          <button onClick={()=>deletetodo(todo.id)} className="btnd">DELETE</button>
        </li>
          )
        } )}
        
      </ul>
      <label></label>
    </>
    )
}
