
import { useState } from "react"

export function NewToDoForm({onSubmit}){
    const  [newItem, setNewItem] = useState("")


    function handleSubmit(e) {
        // prevent page reload
        e.preventDefault()
        // check if empty string
        if (newItem === "") return
        // add new item
        onSubmit (newItem)
        // clear form
        setNewItem("")
      }



    return (
    <form onSubmit = {handleSubmit} className='new-item-form'>
    <div className='form-row'>
      <label htmlFor='item'>Add New Item</label>
      <input 
      value = {newItem}
      onChange = {e => setNewItem(e.target.value)}
      id='item' 
      />
      <button className ='btn'>Add</button>
    </div>
  </form>
    )
    
}