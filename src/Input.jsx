import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import TodoCard from './TodoCard';

const Input = ({ allTodos, setallTodos }) => {
    const [title, setTitle] = useState("");
    const [description, setNewDescription] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [filterStatus, setFilterStatus] = useState('All');
  
    const handleAddTodo = () => {
      const todoData = {
        title: title,
        description: description,
        status: 'Not Completed', // Default status when adding a new allTodos
      };
  
      const addTodos = [...allTodos, todoData];
  
      setallTodos(addTodos);
      localStorage.setItem("todolist", JSON.stringify(addTodos));
  
  
  
      if (editIndex !== null) {
        // Edit existing allTodos
        const updatedUsers = [...allTodos];
        updatedUsers[editIndex] = todoData;
        setallTodos(updatedUsers);
        setEditIndex(null); // Exit edit mode
      } else {

        // Add new allTodos
        const update = [...allTodos, todoData];
        setallTodos(update);
  
      }
  
      localStorage.setItem('todolist', JSON.stringify(allTodos));
  

      setTitle("");
      setNewDescription("");
    };
  
  
    useEffect(() => {
        let savedTodo = JSON.parse(localStorage.getItem("todolist"));
        if (Array.isArray(savedTodo)) {
          setallTodos(savedTodo);
        } else {
          setallTodos([]);
        }
      }, [setallTodos]);
      
  
  
  
  
    const handleToDoDelete = (index) => {
      let reducedTodos = [...allTodos];
      reducedTodos.splice(index, 1);
      setallTodos(reducedTodos);
  
      localStorage.setItem("todolist", JSON.stringify(reducedTodos));
      setallTodos(reducedTodos);
    };
  
  
    const handleEdit = (index) => {
      const editUser = allTodos[index];
      setTitle(editUser.title);
      setNewDescription(editUser.description);
      setEditIndex(index);
    };
  
  
  
    const handleFilterChange = (status) => {
      setFilterStatus(status);
    };
  
    const handleStatusChange = (index, status) => {
        const updatedUser = { ...allTodos[index], status: status };
        const updatedUserList = [...allTodos.slice(0, index), updatedUser, ...allTodos.slice(index + 1)];
      
        setallTodos(updatedUserList);
      
        localStorage.setItem("todolist", JSON.stringify(updatedUserList));
      };
      
  

  return (
    <>
    <form action='' method='get'>
      <fieldset className='row justify-content-center my-5'>
        <div className='col-lg-4 mt-3 col-sm-6'>
          <input
            type='text'
            className='form-control'
            placeholder='Todo Name'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className='col-lg-4 mt-3 col-sm-6'>
          <input
            type='text'
            className='form-control'
            placeholder='Todo Description'
            value={description}
            onChange={(event) => setNewDescription(event.target.value)}
          />
        </div>
        <div className='col-lg-4 col-sm-6 mt-3 text-center text-lg-start'>
          <button
            className={`px-lg-5 px-sm-3 ${
              title.trim() === '' && description.trim() === ''
                ? 'btn btn-danger'
                : 'btn btn-light-green'
            }`}
            onClick={handleAddTodo}
            disabled={title.trim() === '' && description.trim() === ''}
          >
            {editIndex? 'Save Edit' : 'Add Todo'}
          </button>
        </div>
      </fieldset>
    </form>



    <article className="row">
          <section className="col-sm-6 ">
            <h3>My todos</h3>
          </section>
          <section className="col-sm-6 ">
            
          <Filter onFilterChange={handleFilterChange}
            setFilterStatus={setFilterStatus}
            filterStatus={filterStatus}
          />
          </section>
        </article>


    <article className="row">
    {allTodos.map((item, index) => {
            if (filterStatus === 'All' || filterStatus === item.status) {
              return (
                <TodoCard
                  allTodos={item}
                  handleToDoDelete={() => handleToDoDelete(index)}
                  handleStatusChange={(status) => handleStatusChange(index, status)}
                  handleEdit={() => handleEdit(index)}
                  key={index}
                />

              );
            }
            return null;
          })}
  </article>
  </>

  );
};

export default Input;