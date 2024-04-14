'use client'
import React, { useState } from 'react'

const Todo = () => {

    const [todoList, settodoList] = useState([
        { task : 'Do homework', completed: false },
        { task : 'Eat Food', completed: false },
        { task : 'Play Games', completed: false },
        { task : 'Sleep', completed: false },
    ]);

    const addTask = (e) => {

        if(e.code == 'Enter'){
            console.log(e.target.value);
        }

        
    }

  return (
    <div className='container py-5'>

        <h2 className='text-center'>Todo App</h2>
        <hr />

        <div className='card'>
            <div className='card-header'>
                <input onKeyDown={addTask} type="text" className='form-control border-primary border-2' />
            </div>
            <div className="card-body">
                {
                    todoList.map( (item) => {
                        return <div className='d-flex justify-content-between p-3'>
                                <p>{item.task}</p>
                                <button className='btn btn-danger'>Delete</button>
                        </div>
                    } )
                }
            </div>
        </div>
    </div>
  )
}

export default Todo;