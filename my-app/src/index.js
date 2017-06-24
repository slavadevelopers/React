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

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

function RenderReservation() {
    ReactDOM.render(
        <Reservation />,
        document.getElementById('Reservation')
    )
}

RenderReservation();

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>Вода кипит</p>
    }
     return <p>Вода не кипит</p>
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

function RenderCalculator() {
    ReactDOM.render(
        <Calculator />,
        document.getElementById('Calculator')
    );
}

RenderCalculator();

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog() {
    return (
        <FancyBorder color="yellow">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    );
}

function renderWelcomeDialog() {
    ReactDOM.render(
        <WelcomeDialog />,
        document.getElementById('WelcomeDialog')
    )
}

renderWelcomeDialog();

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function Contacts() {
    return <div className="Contacts">Contacts</div>
}

function Chat() {
    return <div className="Chat">Chat</div>
}

function AppSplitPane() {
    return (
        <SplitPane
            left={
                <Contacts />
            }
            right={
                <Chat />
            } />
    );
}

function renderAppSplitPane() {
    ReactDOM.render(
        <AppSplitPane />,
        document.getElementById('AppSplitPane')
    )
}

renderAppSplitPane();

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
    }

    render() {
        return (
            <Dialog title="Mars Exploration Program"
                    message="How should we refer to you?">
                <input value={this.state.login}
                       onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>
                    Sign Me Up!
                </button>
            </Dialog>
        );
    }

    handleChange(e) {
        this.setState({login: e.target.value});
    }

    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }
}

function rebderSignUpDialog() {
    ReactDOM.render(
        <SignUpDialog />,
        document.getElementById('SignUpDialog')
    )
}

rebderSignUpDialog();










class ProductCategoryRow extends React.Component {
    render() {
        return <tr><th colSpan="2">{this.props.category}</th></tr>;
    }
}

class ProductRow extends React.Component {
    render() {
        var name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
}

class ProductTable extends React.Component {
    render() {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach((product) => {
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}


class SearchBar extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." value={this.props.filterText} />
                <p>
                    <label>
                        <input type="checkbox" checked={this.props.inStockOnly} />
                        {' '}
                        Only show products in stock
                    </label>
                </p>
            </form>
        );
    }
}

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            filterText: '',
            inStockOnly: false
        }
    }
    render() {
        return (
            <div>
                <SearchBar
                    filterText={ this.state.filterText }
                    inStockOnly={ this.state.inStockOnly }
                />
                <ProductTable
                    products={this.props.products}
                    filterText={ this.state.filterText }
                    inStockOnly={ this.state.inStockOnly }
                />
            </div>
        );
    }
}


var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

function renderFilterableProductTable() {
    ReactDOM.render(
        <FilterableProductTable products={PRODUCTS} />,
        document.getElementById('FilterableProductTable')
    );
}

renderFilterableProductTable();
