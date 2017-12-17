import React,{Component} from 'react';
import {connect} from 'react-redux';
import {removeHeroById} from '../action';

class HeroesList extends Component{
  render(){
    console.log(this.props);

    return(
      <div>
        <h4>Squad List</h4>
        <ul className="list-group">
          {
            this.props.heroes.map(item=>{
              return(
                <li key={item.id} className="list-group-item">
                  <div className="list-item">
                    {item.name}
                  </div>
                  <div className="list-item right-button"
                    onClick={()=> this.props.removeHeroById(item.id)}>
                    -
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    heroes:state.heroes
  }
}

export default connect(mapStateToProps,{removeHeroById})(HeroesList);
