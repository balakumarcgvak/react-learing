import React, { useState } from 'react';
import Header from "./Header";
import Content from "./Content";
import Crud from "./Crud";
import Footer from "./Footer";
import AddItem from './AddItem';
import Searchitem from './Searchitem';

function App() {
  const[items, SetItems] = useState(JSON.parse(localStorage.getItem("todolist")));
  
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const addNewItem = {id, checked:false, item}
    const listItems = [...items, addNewItem]
    SetItems(listItems)
    localStorage.setItem("todolist", JSON.stringify(listItems))
  }
  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked:!item.checked} : item)
    SetItems(listItems)
    localStorage.setItem("todolist", JSON.stringify(listItems))
  }
  const handleDelete = (id) =>{
    const listItems = items.filter((item) => item.id!==id)
    SetItems(listItems)
    localStorage.setItem("todolist", JSON.stringify(listItems))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!newItem) return;
    console.log(newItem)
    addItem(newItem)
    setNewItem('')
  }
  
  return (
    <div>
      <Header />
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit ={handleSubmit}
      />
      <Searchitem 
        search = {search}
        setSearch = {setSearch}
      />
      <Content 
        items = {items.filter( item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Crud />
      <Footer 
        length = {items.length}
      />
    </div>
  );
}

export default App;