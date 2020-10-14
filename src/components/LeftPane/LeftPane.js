import React, {Component} from 'react';
import "./left-pane.scss";
export default class LeftPane extends Component{
    renderRightPane = () => {
        console.log('aa')
    }
    render(){

        return (
        <div>
            <div className = "left-pane-topic">Select your questions</div>
            <div>
                {this.props.QuestionArrayleft.map(question => {
                    return( 
                        <div key = {Math.random()}>
                        <button className = 'hidden-navi-button' onClick = {this.renderRightPane}>click</button>
                        <button key = {Math.random()} onClick ={() =>
                        {
                            this.props.questionSelector(question.qNumber)
                        }
                        }>
                        {question.qNumber}.
                        {question.Question}
                        </button>
                        <button className = 'question-button' onClick = {() =>  {
                            this.props.deleteSpace(question.qNumber)
                            }}>Delete</button>
                       </div>
                        
                    )
                                
                            
                })}
            </div>
            <button className = 'question-button' onClick = {this.props.addSpace}>Add</button>
        </div>
        )
    }
}

