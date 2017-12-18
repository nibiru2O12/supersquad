import React,{Component} from 'react';

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
                    onClick={()=> this.props.onRemoveClick(item.id)}>
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

export default HeroesList;
