import React from 'react';
import Hello from './components/Hello.jsx';

ReactDOM.render(Hello, document.getElementById('app'));

class Hello extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            " Hello world "
        );
    }
}

export default Hello;
