import { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: ''
    };
    console.log("Constuctor....");
  }
  
  componentDidMount() {
    console.log("ComponentDidMount...")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState( { users: user }))
      .catch((error) => console.error(error));
  }
  
  onSearchChange = (event) => {
    console.log("onSearchChange...");
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState({ searchField });
  }
  
  render() {
    const { searchField, users} = this.state;
    const { onSearchChange } = this;
    console.log("Render...");    
    
    const filteredUsers = users.filter(user => {
      return user.name.toLocaleLowerCase().includes(searchField);
    });
    
    return (
      <>
        <input className='search-box' type="search" onChange={ onSearchChange } placeholder='search users' />
          { filteredUsers.map(( user ) => {
              return <h1 key={user.id}>{user.name}</h1>
            })}
      </>  
    )
  }
}

export default App
