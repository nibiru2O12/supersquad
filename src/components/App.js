import React,{Component} from 'react';
import CharacterList from './CharacterList.js';

class App extends Component{
  render(){
    return(
      <div>
        <h2>Super Squad</h2>
        <CharacterList />
      </div>

    )
  }
}

export default App;
