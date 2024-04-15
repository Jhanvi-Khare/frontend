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

            settodoList( [ ...todoList, { task : e.target.value, completed : false } ] );
            e.target.value = '';
        }

        
    }

    const deleteTask = (index) => {
        console.log(index);
        const temp = todoList;
        temp.splice(index, 1);
        settodoList([...temp]);
    }

    const finishTask = (index) => {
        const temp = todoList;
        temp[index].completed = !temp[index].completed;
        console.log(temp);
        settodoList( [...temp]);
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
                    todoList.map( (item, index) => {
                        return <div className='d-flex justify-content-between p-3'>
                                <p>{item.task}</p>

                                {item.completed ?
                                    <span className='badge bg-success'>Completed</span>
                                    :
                                    <span className='badge bg-warning'>Pending</span>
                                }
                                <div>
                                    <button onClick={ () => { finishTask(index) } } className='btn btn-primary me-3'>Finish</button>
                                    <button onClick={ () => { deleteTask(index) } } className='btn btn-danger'>Delete</button>
                                </div>
                    
                        </div>
                    } )
                }
            </div>
        </div>
    </div>
  )
}

export default Todo;