import React, {Component} from 'react';
import Options from '../Options/Options';
class Form extends Component {
    
formSubmit = (e) => {
    e.preventDefault();
    
}


handleChange = (event) => {
      this.setState({question :event.target.value }, () => {
        localStorage.setItem('question',JSON.stringify(question));
      })
        
}
sendData = () => {
    this.props.parentCallback(question);
}
submit = () => {
   
    console.log(question)
}

    render(){
        const question = this.props.question;
         return(
            <form onSubmit = {this.formSubmit} >
                <label>Question</label>
                <input value = {question} onChange = {this.handleChange} placeholder= 'Type your Question here...' />
                
                <button>ADD IMAGE</button>
                <br />
                <button onClick = {this.submit} name = 'submit' value = 'button'>Submit</button>
                <Options />
            </form>
        )
    }
}
export default Form;