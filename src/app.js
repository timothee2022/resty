import React, { useState, useEffect } from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import axios from 'axios';


export default function App() {
  
  // const initialState = {
    //   data: null,
    //   requestParams: {},
    // };
    
    const [data, setData] = useState(null);
    const [requestParams, setRequestParams] = useState({});
    const [header, setHeader] = useState(null);
    
    useEffect(() => {
      console.log('useEffect has been called');
    })

  const callApi = async (url, method) => {
    const newData = await axios({
      method: method,
      url: url,
    })

    const requestParams = {
      url,
      method,
    }

    setData(newData.data.results);
    setRequestParams(requestParams);
    setHeader(newData.header);
  }

  return(
      <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} header={header} />
        <Footer />
      </React.Fragment >
    );
};


