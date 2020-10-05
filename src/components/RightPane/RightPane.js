import React ,{Component} from 'react';
import Form from '../Form/Form';
import "./right-pane.scss";
class RightPane extends Component{
    
    render(){
        return (
            <div>
                <div>New Question 1</div>
                <div><Form questions = {this.props.questions}  que = {this.props.que} /></div>
               
            </div>
        
        
        )
    }
}
export default RightPane;