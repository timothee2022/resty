import React from 'react';

import './result.scss';

export default function Results (props) {
    return (
      <section>
        <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      </section>
    );
}


