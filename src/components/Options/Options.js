import React, {Component} from 'react';
class Options extends Component{
    
    render(){
        return(
            <div>
               {this.props.qNumber}. {this.props.Questions}
            </div>
        )
    }
}
export default Options;