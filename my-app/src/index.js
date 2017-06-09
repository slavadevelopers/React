import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('Rendering-Elements')
    );
}

setInterval(tick, 1000);

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tickTack(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tickTack() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h1>Hello, world! The data flows down</h1>
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}

function App2() {
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    );
}

function tick2() {
    ReactDOM.render(
        <App2 />,
        document.getElementById('State-page')
    );
}

tick2();
