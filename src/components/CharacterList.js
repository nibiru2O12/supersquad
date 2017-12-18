import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CharacterList extends Component{
  render(){
    console.log('this.props',this.props);
    return (
      <div>
        <h4>Characters</h4>
        <ul className="list-group">
          {
            this.props.characters.map((item)=>{
              return (
                <li key={item.id} className="list-group-item">
                  <div className="list-item">{item.name}</div>
                  <div className="list-item right-button"
                    onClick={()=> this.props.onAddClick(item.id)}>
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

CharacterList.propTypes={
  characters:PropTypes.array,
  onAddClick: PropTypes.func
}

export default CharacterList;
