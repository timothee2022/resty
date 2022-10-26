import React, { useState } from 'react';

import './form.scss';


export default function Form (props) {
  
  const formData = {
    method:'GET',
    url: 'https://pokeapi.co/api/v2/pokemon',
  };

  // const [todo, setTodo] = useState(formData);
  

  const handleSubmit = e => {
    e.preventDefault();
    props.handleApiCall(formData);
  }


    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' />
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span id="get">GET</span>
            <span id="post">POST</span>
            <span id="put">PUT</span>
            <span id="delete">DELETE</span>
          </label>
        </form>
      </>
    );
  }