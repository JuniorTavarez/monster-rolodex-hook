import { useState, useEffect } from 'react';
import './App.css';
import CardList from "./component/card-list/card-list.component";
import SearchBox from "./component/search-box/search-box.component";

const App = () => {
    console.log('render')
    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState([]);
    console.log(searchField)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setMonsters(users)); 
    }, [])


    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLowerCase(); 
        setSearchField(searchFieldString)
        }
        const filteredMonsters = monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(searchField)
        });
        return(
            <div className="App">
            <h1 className='app-title'>Monsters Rolodex</h1>
            <SearchBox
                className='monster-search-box'
                onChangeHandler={onSearchChange} 
                placeholder='search monsters' 
                />
            <CardList monsters={filteredMonsters}/>
            </div>
        )
    }
    export default App;

// class App extends Component {
//   constructor(props){
//     super(props);
   
//     this.state = {
//         monsters: [],
//         searchField: '',
//     }
// }
// componentDidMount(){
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(users => 
//     this.setState( 
//         () => {
//             return {monsters: users};
//         },
//         () => {

//     }
// ) )
// }

// onSearchChange = 
// render(){
// const {monsters, searchField} = this.state;
// const {onSearchChange} = this;
// const filteredMonsters = monsters.filter((monster) => {
//     return monster.name.toLowerCase().includes(searchField)
// });
// }
// }

