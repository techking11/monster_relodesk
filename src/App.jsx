import { Component } from 'react'
import './App.css'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((user) => this.setState({ users: user }))
            .catch((error) => console.error(error));
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState({ searchField });
    }

    render() {
        const { searchField, users } = this.state;
        const { onSearchChange } = this;

        const filteredUsers = users.filter(user => {
            return user.name.toLocaleLowerCase().includes(searchField);
        });

        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox onChangeHandler={onSearchChange} />
                <CardList monsters={filteredUsers} />
            </div>
        );
    }
}

export default App
