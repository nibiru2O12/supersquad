import React, {Component} from 'react';
import {connect} from 'react-redux';

class CharacterList extends Component{
  render(){
    console.log('this.props',this.props);
    return (
      <div>
        <h4>Characters</h4>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    characters:state.characters
  };
}

export default connect(mapStateToProps,null)(CharacterList);
