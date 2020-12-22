import React from 'react';

const AddMovie = ({handleAdd}) => (
  <div className="movie-add-bar">
  <input type="text" id="movie-add" placeholder="Add movie title here"></input>
  <button onClick={handleAdd}>
    <span>Add</span>
  </button>
</div>
)

export default AddMovie;