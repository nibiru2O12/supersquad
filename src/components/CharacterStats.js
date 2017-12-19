import React,{Component} from 'react';
import PropTypes from 'prop-types';

class CharacterStats extends Component{

  render(){
    return(
      <ul className="hero-stats">
          <li className="flaticon-body-building">
            <span className="sr-only">STR</span>
            <span className="stat-value">
              {this.props.stats.str}
            </span>
          </li>
          <li className="flaticon-mortarboard">
            <span className="sr-only">INT</span>
            <span className="stat-value">
              {this.props.stats.int}
            </span>
          </li>
          <li className="flaticon-urgency">
            <span className="sr-only">SPD</span>
            <span className="stat-value">
              {this.props.stats.spd}
            </span>
          </li>
      </ul>
    );
  }
}

CharacterStats.propTypes={
    stats:PropTypes.object
}

export default CharacterStats;
