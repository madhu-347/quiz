import React ,{Component} from 'react';
import Options from '../Options/Options'
import "./right-pane.scss";
class RightPane extends Component{
    
  
    formSubmit = (event) => {
        event.preventDefault();
        
    }

    handleChange = (event) => {
        this.setState({[this.props.question] : event.target.value}, () => {
            localStorage.setItem('questions',JSON.stringify(this.props.QuestionArray));
        })
           console.log(this.props.question) 
    }

    
 
    componentDidMount(){
        var data = JSON.parse(localStorage.getItem('questions'));
        
        if (localStorage.getItem('questions')) {
          this.setState({QuestionArray: data}, () => 
          {
            localStorage.setItem('questions',JSON.stringify(this.props.QuestionArray)) 
          });
         
  } 
}
submit = (event) => {
    this.props.callBackToRightPane()
}

    render(){
        
         return(
           /*<form onSubmit = {this.formSubmit} >
                <label>Question</label>
                <input type = 'text' onBlur = {this.handleChange} placeholder= 'Type your Question here...' />
                
                <button>ADD IMAGE</button>
                <br />
                <label>Options</label>
                <input type = 'text' placeholder = 'Options...' />
                <button onClick = {this.submit} name = 'submit' value = 'button'>Submit</button>
            </form>*/
            <div>
                <input />
                <button onClick = {this.props.handle}></button>
                <li>{this.props.data.selectedvalue}</li>
            </div>
        )
    }   

}
export default RightPane;

