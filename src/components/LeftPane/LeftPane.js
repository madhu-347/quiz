import React, {Component} from 'react';
import Questions from '../Questions/Questions';
import "./left-pane.scss";
class LeftPane extends Component{
    render(){

        return (
        <div>
            <div className = "left-pane-topic">Select your questions</div>
            <div><Questions  /> </div>
        <button>ADD {this.selectedQuestion}</button>
            <button>DELETE</button>
        </div>
        )
    }
}
export default LeftPane;