import React, {Component} from 'react';
import Questions from '../Questions/Questions';
class RightPane extends Component{
    render(){

        return (
        <div>
            <div className = "left-pane-topic">Select your questions</div>
            <div><Questions vari = {this.props.question} /> </div>
            <button>ADD</button>
            <button>DELETE</button>
        </div>
        )
    }
}
export default RightPane;