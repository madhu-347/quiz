import React ,{Component} from 'react';
import "./right-pane.scss";
class RightPane extends Component{
    
  
    formSubmit = (event) => {
        event.preventDefault();
        
    }

    handleChange = (event) => {
        this.setState({[this.props.question] : event.target.value}, () => {
            localStorage.setItem('questions',JSON.stringify(this.props.QuestionArray));
        })
            
    }

    submit = () => {
        
        this.setState({
            [this.props.qNumber] : this.props.qNumber + 1
        })
        
        const copyQuestionsArray = Object.assign( [],this.props.QuestionArray);
       
        console.log(this.props.QuestionArray)
    } 
    deleteFunction = (index) => {
        const copyQuestionsArray = Object.assign( [],this.props.QuestionArray);
        copyQuestionsArray.splice(index, 1);
        this.setState({
            QuestionArray : copyQuestionsArray
        })
        
    }
    componentDidMount(){
        var data = JSON.parse(localStorage.getItem('questions'));
        
        if (localStorage.getItem('questions')) {
          this.setState({QuestionArray: data}, () => 
          {
            localStorage.setItem('questions',JSON.stringify(this.state.QuestionArray)) 
          });
         
  } 
}

    render(){
        
         return(
            <form onSubmit = {this.formSubmit} >
                <label>Question</label>
                <input type = 'text' onBlur = {this.handleChange} placeholder= 'Type your Question here...' />
                
                <button>ADD IMAGE</button>
                <br />
                <button onClick = {this.submit} name = 'submit' value = 'button'>Submit</button>
            </form>
        )
    }   

}
export default RightPane;