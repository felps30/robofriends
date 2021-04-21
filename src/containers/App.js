import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import { Component } from 'react'
import Scroll from '../components/scroll'
import { robots } from '../robots'


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    };
    

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json())
        .then(users =>this.setState({robots: users}))

    }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    };

    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return !robots.length ?
            <h1>Loading!</h1> :
            <div className="tc">
                <h1>RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
                
            </div>
    }  
};

export default App;