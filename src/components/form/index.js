import React, { useState } from 'react';

import './form.scss';


export default function Form (props) {

  const [method, setMethod] = useState('');
  const [url, setUrl] = useState('');
  const [data, setData] = useState('');
  
  // const formData = {
  //   method:'GET',
  //   url: 'https://swapi.dev/api/people/?page=2',
  // };
  
  const handleSubmit = e => {
    e.preventDefault();

    props.handleApiCall({method, url, data});
  }


    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input onChange={(e) => setUrl(e.target.value)} name='url' type='text' />
            <button type="submit">GO!</button>
          </label>
          <label id="testarea">
          Post / Put Input:
          <textarea onChange={(e) => setData(e.target.value)} rosw="5" cols="33"></textarea>
          </label>

          <label className="methods">
            <span id="get" onClick={(e) => setMethod('GET')}>GET</span>
            <span id="post" onClick={(e) => setMethod('POST')}>POST</span>
            <span id="put" onClick={(e) => setMethod('PUT')}>PUT</span>
            <span id="delete" onClick={(e) => setMethod('DELETE')}>DELETE</span>
          </label>
        </form>
      </>
    );
  }