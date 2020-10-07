import React, {Component} from 'react';
class Options extends Component{
    
    render(){
        return(
            <div>
               {this.props.qNumber}. {this.props.Questions}
               <button onClick = {this.props.delete}>Delete </button>
            </div>
        )
    }
}
export default Options;