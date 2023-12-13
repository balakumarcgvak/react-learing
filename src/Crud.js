import React from 'react';
import { useState } from 'react';
import './Crud.css';

const Crud = () => {
    const [items, setItems] = useState([]);
    const [text, setText] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const addItem = () => {
        if (text.trim() !== '') {
        if (editIndex !== null) {
            // Edit existing item
            const updatedItems = [...items];
            updatedItems[editIndex] = text;
            setItems(updatedItems);
            setEditIndex(null);
        } else {
            // Add new item
            setItems([...items, text]);
        }
        setText('');
        }
    };

    const editItem = (index) => {
        setText(items[index]);
        setEditIndex(index);
    };

    const deleteItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    return (
        <main>
            <div className='container crud_form'>
            <h1>CRUD Task</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter item"
                className="input-field"
            />
            <button onClick={addItem} className="button">
                {editIndex !== null ? 'Update' : 'Add'}
            </button>
            <ul className="item-list">
                {items.map((item, index) => (
                <li className="item" key={index}>
                    {item}{' '}
                    <button onClick={() => editItem(index)} className="edit-button">
                    Edit
                    </button>
                    <button onClick={() => deleteItem(index)} className="delete-button">
                    Delete
                    </button>
                </li>
                ))}
            </ul>
            </div>
        </main>
    )
}

export default Crud