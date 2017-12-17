import React,{Component} from 'react';
import {connect} from 'react-redux';

class HeroesList extends Component{
  render(){
    console.log(this.props);

    return(
      <div>
        <h2>Heroes</h2>
        <ul className="list-group">
          {
            this.props.heroes.map(item=>{
              return(
                <li key={item.id} className="list-group-item">
                  <div className="list-item">
                    {item.name}
                  </div>
                  <div className="list-item right-button">
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

export default connect(mapStateToProps,null)(HeroesList);
