import React, { useState } from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import axios from 'axios';

export default function App() {

  const initialState = {
    data: null,
    requestParams: {},
  };

  const [data, setData] = useState(initialState);
  const [requestParams, setRequestParams] = useState({});


  const callApi = async (requestParams) => {
    // const newData = await axios.get('https://swapi.dev/api/people/?page=2');

    setData(newData.data.results[0]);
    setRequestParams(requestParams);
  }

  return(
      <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} />
        <Footer />
      </React.Fragment >
    );
};


