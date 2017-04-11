import React from 'react';

const Hello = (options, op2) => (
  <pre><code>
    { JSON.stringify(options, null, 4)}
    { JSON.stringify(op2, null, 4)}
  </code></pre>
);

// Hello.propTypes = {
//  name: PropTypes.object.isRequired,
// };

export default Hello;
