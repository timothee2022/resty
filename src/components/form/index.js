import React, { useState } from 'react';

import './form.scss';


export default function Form (props) {

  const [method, setMethod] = useState('');
  const [url, setUrl] = useState('');
  
  // const formData = {
  //   method:'GET',
  //   url: 'https://swapi.dev/api/people/?page=2',
  // };
  
  const handleSubmit = e => {
    e.preventDefault();

    props.handleApiCall({method, url});
  }


    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input onChange={(e) => setUrl(e.target.value)} name='url' type='text' />
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span id="get" onClick={(e) => setMethod('get')}>GET</span>
            <span id="post">POST</span>
            <span id="put">PUT</span>
            <span id="delete">DELETE</span>
          </label>
        </form>
      </>
    );
  }