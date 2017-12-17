import React,{Component} from 'react';
import CharacterList from './CharacterList.js';
import HeroesList from './HeroesList.js';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h2>Super Squad</h2>
        <div className="col-md-6">
          <CharacterList />
        </div>
        <div className="col-md-6">
          <HeroesList />
        </div>
      </div>

    )
  }
}

export default App;
