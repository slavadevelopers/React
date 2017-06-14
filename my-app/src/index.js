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


class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

class LoggingButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    handleClick = () => {
        console.log('this is:', this);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Click me
            </button>
        );
    }
}

function App3() {
    return (
        <div>
            <Toggle />
            <LoggingButton />
        </div>
    )
}

function HandlingEvents() {
    ReactDOM.render(
        <App3 />,
        document.getElementById('HandlingEvents')
    );
}

HandlingEvents()


function UserGreeting(props) {
    return <h1>Welcome back!</h1>
}

function GuestGretting(props) {
    return <h1>Please sing up.</h1>
}

function ToogetherUserGuest() {
    return (
        <div>
            <UserGreeting />
            <GuestGretting />
        </div>
    )
}

function RenderUserGuest() {
    ReactDOM.render(
        <ToogetherUserGuest />,
        document.getElementById('UserGuest')
    )
}

RenderUserGuest();

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return (
          <h1>Welcom back!</h1>
        );
    }
    return <h1>Please sing up.</h1>
}

function RenderGreeting() {
    ReactDOM.render(
      <Greeting isLoggedIn={true}/>,
        document.getElementById('UserGuest-2')
    );
}

RenderGreeting();

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

function RebderLoginControl() {
    ReactDOM.render(
        <LoginControl />,
        document.getElementById('LoginControl')
    )
}

RebderLoginControl();

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
                <h2>You have {unreadMessages.length} unread messages.</h2>
            }
        </div>
    );
}

function RenderMailbox() {
    const messages = ['React', 'Re: React', 'Re:Re: React'];

    ReactDOM.render(
        <Mailbox  unreadMessages={messages} />,
        document.getElementById('RenderMailbox')
    )
}

RenderMailbox();

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true}
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

function RenderClassPage() {
    ReactDOM.render(
        <Page />,
        document.getElementById('RenderClassPage')
    );
}

RenderClassPage();

const numbers = [1, 2, 3, 4, 5];

function ListItem(props) {
    return <li>{props.value}</li>
}

function NumberList(props) {
    const numbers = props.numbers;
    return (
        <ul>
            {numbers.map((number) =>
                <ListItem key={number.toString()} value={number} />
            )}
        </ul>
    );
}

function RenderMultipleComponents() {
    ReactDOM.render(
        <NumberList numbers={numbers} />,
        document.getElementById('RenderMultipleComponents')
    );
}

RenderMultipleComponents();

function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );

    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>

    );

    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

function RenderBlog() {
    ReactDOM.render(
        <Blog posts={posts} />,
        document.getElementById('RenderBlog')
    );
}

RenderBlog();

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value.toUpperCase()});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

function RenderNameForm() {
    ReactDOM.render(
        <NameForm />,
        document.getElementById('NameForm')
    );
}

RenderNameForm();

class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

function RenderEssayForm() {
    ReactDOM.render(
        <EssayForm />,
        document.getElementById('EssayForm')
    )
}

RenderEssayForm();

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite La Croix flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

function RenderFlavorForm() {
    ReactDOM.render(
        <FlavorForm />,
        document.getElementById('FlavorForm')
    )
}

RenderFlavorForm();