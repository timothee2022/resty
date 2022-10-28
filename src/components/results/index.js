// import React from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css'

import './result.scss';

export default function Results (props) {
  let {data} = props;
    return (
      <section>
        {data ?
        (<>
        <span data-testid="banana">          
        <JSONPretty data={data}/>          
        </span>        
        </>) :
        (<span>Processing................</span>)
      }
      </section>
    );
  }


  {/* <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}<JSONPretty/></pre> */}
