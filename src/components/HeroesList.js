import React,{Component} from 'react';
import PropTypes from 'prop-types';
import CharacterStats from './CharacterStats';

class HeroesList extends Component{
  render(){
    console.log(this.props);

    return(
      <div>
        <h4>Squad List</h4>

        <small>
          <a className="clear-squad" onClick={this.props.onClearClick}>clear squad</a>
        </small>

        <ul className="list-group">
          {
            this.props.heroes.map(item=>{
              return(
                <li key={item.id} className="list-group-item">
                  <div className="list-item">
                    {item.name}
                  </div>
                  <div className="list-item right-button"
                    onClick={()=> this.props.onRemoveClick(item.id)}>
                    -
                  </div>
                  <CharacterStats
                    stats={{str:item.strength,int:item.intelligence,spd:item.speed}}
                  />
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

HeroesList.propTypes={
  heroes:PropTypes.array,
  onRemoveClick: PropTypes.func
}

export default HeroesList;
