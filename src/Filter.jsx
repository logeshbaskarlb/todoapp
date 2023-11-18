import React from 'react'

  const Filter = ({ onFilterChange,setFilterStatus,filterStatus }) => {


    const handleFilterChange = (status) => {
      setFilterStatus(status);
      onFilterChange(status);
    };
  
    return (
<div className='d-flex justify-content-end'>
     <h4 htmlFor="status">Status : </h4>
  <select 
  onChange={(e) => handleFilterChange(e.target.value)}
   aria-label="Default select example" className={`select ms-2 ${filterStatus === 'Completed' ? 'light-green-sts': filterStatus === 'All'? 'light-white' : 'bg-danger'}`}>
    <option value="All" >All</option>
    <option value="Completed">Completed</option>
    <option value="Not Completed">Not Completed</option>
  </select>
</div>

    )
}

export default Filter