import React,{Component} from 'react';
import {connect} from 'react-redux';

import {addCharacterById,removeHeroById,clearHeroList} from '../action';

import CharacterList from './CharacterList.js';
import HeroesList from './HeroesList.js';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h2>Super Squad</h2>
        <div className="col-md-6">
          <CharacterList characters={this.props.characters}
            onAddClick={this.props.addCharacterById} />
        </div>
        <div className="col-md-6">
          <HeroesList heroes={this.props.heroes}
            onRemoveClick={this.props.removeHeroById}
            onClearClick={this.props.clearHeroList}
           />
        </div>
      </div>

    )
  }
}

function myStateToProps(state){
  return {
    heroes:state.heroes,
    characters:state.characters
  }
}

export default connect(myStateToProps,{removeHeroById,addCharacterById,clearHeroList})(App);
