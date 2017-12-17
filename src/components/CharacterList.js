import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addCharacterById} from '../action';

class CharacterList extends Component{
  render(){
    console.log('this.props',this.props);
    return (
      <div>
        <h4>Characters</h4>
        <ul>
          {
            this.props.characters.map((item)=>{
              return (
                <li key={item.id}>
                  <div>{item.name}</div>
                  <div onClick={()=> this.props.addCharacterById(item.id)}>
                    +
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    characters:state.characters
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addCharacterById},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(CharacterList);
