import React,{Component} from 'react';
import Options from '../Options/Options';
class Form extends Component {
    constructor(){
        super();
        this.questionNumber = 0;
        this.state = {
            QuestionArray : [],
            qNumber : '',
            Questions : '',
            options : ''
        }
    }
    formSubmit = (event) => {
        event.preventDefault();
        
    }

    handleChange = (event) => {
        this.setState({Questions : event.target.value}, () => {
            localStorage.setItem('questions',JSON.stringify(this.state.Questions));
        })
            
    }

    submit = () => {
        this.questionNumber = this.questionNumber + 1 ;
        const copyQuestionsArray = Object.assign([],this.state.QuestionArray)
        copyQuestionsArray.push({
            qNumber : this.questionNumber,
            Questions : this.state.Questions

        })
        console.log(this.state.Questions)
    } 

    render(){
        
         return(
            <form onSubmit = {this.formSubmit} >
                <label>Question</label>
                <input type = 'text' onBlur = {this.handleChange} placeholder= 'Type your Question here...' />
                
                <button>ADD IMAGE</button>
                <br />
                <button onClick = {this.submit} name = 'submit' value = 'button'>Submit</button>
               
                    {
                        this.state.QuestionArray.map((que,index) => {
                            return (
                                <Options qNumber= {que.qNumber}
                                Questions= {que.Questions}
                                options= {que.options}
                                />
                            )

                        })
                    }
               
               
            </form>
        )
    }   

}
export default Form;