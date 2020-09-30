import React ,{Component} from 'react';
import Form from '../Form/Form';
import "./right-pane.scss";
class RightPane extends Component{
    callbackFunction = (question) => {
        this.setState({message: question})
        console.log(this.message)
  };
    render(){
        return (
            <div>
                <div>New Question 1</div>
                <div><Form  parentCallback = {this.callbackFunction} /></div>
               
            </div>
        
        
        )
    }
}
export default RightPane;