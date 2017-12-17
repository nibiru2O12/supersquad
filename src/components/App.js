import React,{Component} from 'react';
import CharacterList from './CharacterList.js';
import HeroesList from './HeroesList.js';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h2>Super Squad</h2>
        <CharacterList />
        <HeroesList />
      </div>

    )
  }
}

export default App;
