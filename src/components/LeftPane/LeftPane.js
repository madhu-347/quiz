import React, {Component} from 'react';
import "./left-pane.scss";
export default class LeftPane extends Component{
    
    render(){
        var questionNumber = 0
        return (
        <div>
            <div className = "left-pane-topic">Select your questions</div>
            <div>
                {this.props.QuestionArrayleft.map(question => {
                     questionNumber = question.qNumber
                    return( 
                        <div key = {Math.random()}>
                        <button className = 'invisible-button' key = {Math.random()} onClick ={() =>
                        {
                            this.props.questionSelector(question.qNumber)
                        }
                        }  >
                        {question.qNumber}.
                        {question.Question}
                        </button>
                       
                       </div>
                    )
                })}
            </div>
            <div className = 'btn-group'>
            <button className = 'btn btn-success button' onClick = {this.props.addSpace}>Add</button>
            <button className = 'btn btn-danger button' onClick = {() =>  {this.props.deleteSpace(questionNumber) }}>Delete</button>
            </div>
            
        </div>
        )
    }
}

