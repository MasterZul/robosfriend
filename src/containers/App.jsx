import CardList from '../components/CardList.jsx';
import {robots} from "./robots";
import SearchBox from "../components/SearchBox";
import {Component} from "react";
import './App.css'
import Scroll from "../components/Scroll"
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')//just fetch array of users
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) => {
        const {value} = event.target
        this.setState({searchfield: value})
    }

    render() {
        const {robots, searchfield} = this.state
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        return !robots.length ? <h1>Loading....</h1> :
            (
                <div className="tc">
                    <h1 className="f2">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList name="cardList" robots={filterRobots}/>
                            <h2>Menjadi</h2>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
    }
}

export default App