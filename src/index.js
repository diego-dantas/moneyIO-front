import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    render() {
        return (
            <h2>Money IO</h2>
        );
    };
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
