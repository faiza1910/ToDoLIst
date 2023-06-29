import { useState } from "react"
export function NewTodoFrom(props){
    
    const [newItem, setNewItem] = useState(" ") //anytype of data that we want to rerender our component when it changes we have to put them on state
    function handleSubmit(e){
        e.preventDefault()
        if (newItem==="") return
        props.onSubmit(newItem)//passing down props
    
        setNewItem("")   
    }
    return(
        <>
          <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
              <label htmlFor="item">New Item</label>
              <input 
                value={newItem} //at the beginning it's set to empty string and would always be the default value and we have to update it with onChange
                onChange={e=> setNewItem(e.target.value)}//it's just updating the new value that we input sending it to setNewtem.
                type='text' 
                id='item'
              />
            </div> 
            <button className="btn">Add</button>
          </form>
          </>
    )
}
