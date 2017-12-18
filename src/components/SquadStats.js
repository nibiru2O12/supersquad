import React,{Component} from 'react';

class SquadStats extends Component{

  strength(){
    let strength=0;
    this.props.heroes.forEach(h=> strength += h.strength );
    return strength;
  }

  intelligence(){
    let intelligence=0;
    this.props.heroes.forEach(h => intelligence += h.intelligence);
    return intelligence;
  }

  speed(){
    let speed=0;
    this.props.heroes.forEach(h => speed += h.speed);
    return speed;
  }

  render(){
    return(
      <div>
        <h4>Squad Stats</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Overall Strength : </b> {this.strength()}
          </li>
          <li className="list-group-item">
            <b>Overall Intelligence : </b> {this.intelligence()}
          </li>
          <li className="list-group-item">
            <b>Overall Speed : </b> {this.speed()}
          </li>
        </ul>
      </div>
    )
  }
}

export default SquadStats
