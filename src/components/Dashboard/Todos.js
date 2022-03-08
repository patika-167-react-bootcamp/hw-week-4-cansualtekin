import React, { useState } from 'react';
import TodoList from './TodoList'

const Todos = () => {
    return (
        <div>
            <TodoList add={true}/>
            <TodoList />
            <TodoList />
        </div>
    )
}

export default Todos