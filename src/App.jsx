import { useEffect, useState } from 'react';
import './App.css'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

    const [monsters, setMonsters] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [filterMonsters, setFilterMonsters] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => setMonsters(users));
    }, []);
    
    useEffect(() => {
        const filteredUsers = monsters.filter(user => {
            return user.name.toLocaleLowerCase().includes(searchField);
        });
        setFilterMonsters(filteredUsers);
    }, [monsters, searchField]);

    const onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        setSearchField(searchField);
    }

    return (
        <div className="app">
            <h1>Monsters Rolodex</h1>
            <SearchBox onChangeHandler={onSearchChange} />
            <CardList monsters={filterMonsters} />
        </div>
    );
}

export default App;