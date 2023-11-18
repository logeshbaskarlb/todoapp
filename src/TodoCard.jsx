import React from "react";

const TodoCard = ({ allTodos, handleToDoDelete, handleEdit, handleStatusChange }) => {


    const handleEditClick = (e) => {
        e.preventDefault()
        handleEdit()
      }
    
    

  return (
    <div className="col-xl-4 col-md-6 col-sm-6 px-5 px-sm-1 px-lg-4 py-3">
      <div
        className="card p-3"
        style={{ backgroundColor: "#ccf5d3", border: "0" }}
      >
        <div className="card-body">
          <div>
            <span>Name : </span> <span>{allTodos.title}</span>
          </div>
          <div>
            <span>Description : </span> <span>{allTodos.description}</span>
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <select
              className={`select ms-2 color-white ${allTodos.status === 'Completed' ? 'light-green-sts' : allTodos.status === 'Not Completed' ? 'light-danger' : ''}`}
              id="status"
              aria-label="Default select example"
              value={allTodos.status} onChange={(e) => handleStatusChange(e.target.value)}>
            
              <option value="Not Completed">Not Completed</option>
              <option value="Completed" >Completed</option>
            </select>
          </div>
          <div className="text-end mt-4">
            <button
              className="btn btn-primary btn-light-green me-4 px-4"
              onClick={handleEditClick}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-delete px-3"
              onClick={handleToDoDelete}

            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;