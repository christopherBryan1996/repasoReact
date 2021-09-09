import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Nav from './components/nav/Nav';
import Cards from './components/cards/Cards';
import CharacterDatail from './components/characterDe/characterD';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      characters:[],
      searchCharacter:[]
    }
  }
  searchByName =(name)=> {
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
    .then(response=> response.json())
    .then(searchCharactersResponse=>{
      this.setState({searchCharacter:searchCharactersResponse.results})
    })
  }
  componentDidMount(){
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(charactersResponse=> this.setState({characters:charactersResponse.results}))
  }
  render(){
    
    return (
    <div className="App">
      <BrowserRouter>
      <Route  path='/'
        render={(props)=><Nav 
          searchByName={this.searchByName} 
          history={props.history}/>}
          />
        <Route exact path='/'>
          <Cards characters={this.state.characters}/>
        </Route>

        <Route exact path='/search/'>
          <Cards characters={this.state.searchCharacter}/>
        </Route>
          
        <Route exact path='/character/:id'
          render={({match})=><CharacterDatail characterId={match.params.id}/>}//match nos ayuda a traer por query
        />

        <Route exact path='/about'>
          soy el about 
        </Route>
      </BrowserRouter>
    </div>
  );
  }
}

export default App;
