import React,{Component} from 'react';
import PropTypes from 'prop-types';

class CharacterStats extends Component{

  render(){
    return(
      <ul className="hero-stats">
        {
          this.props.stats.map(h => {
            return <li>{h.stats}:{h.value}</li>
          })
        }
      </ul>
    );
  }
}

CharacterStats.propTypes={
    stats:PropTypes.array
}

export default CharacterStats;
