import React, {Component} from 'react';
import Options from '../Options/Options';
class Form extends Component {

    state = {
        question : [],
    };

formSubmit = (e) => {
    e.preventDefault();
    
}


handleChange = (event) => {
      this.setState({question :event.target.value }, () => {
        localStorage.setItem('question',JSON.stringify(this.state.question));
      })
        
}

submit = () => {
   
    console.log(this.state.question)
}

    render(){
         return(
            <form onSubmit = {this.formSubmit} >
                <label>Question</label>
                <input value = {this.state.question} onChange = {this.handleChange} placeholder= 'Type your Question here...' />
                
                <button>ADD IMAGE</button>
                <button onClick = {this.submit} name = 'submit' value = 'button'>Submit</button>
                <Options />
            </form>
        )
    }
}
export default Form;