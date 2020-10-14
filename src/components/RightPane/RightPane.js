import React ,{Component} from 'react';
import Options from '../Options/Options';
import "./right-pane.scss";
export default class RightPane extends Component{
    
valueQuestion = (event) => {
    const que = event.target.value ;
    this.props.callBackforQuestion(que, this.props.selectedvalue)
}
picFileUpload = (event) => {
    const file = event.target.files[0];
    this.props.picFile(file,this.props.selectedvalue)
}
callBackForOptions = (option,index,selectedValue) => {
  this.props.callBackOptionForpane(option,index,selectedValue)
}
addOption = (value) => {
    this.props.callbackForaddOption(value)
}

    render(){
         return(
             <div>
                 <span>Frame the Question {this.props.selectedvalue}</span>
                 <br />
                 <br />
                 <label>Question</label>
                 <textarea onChange = {this.valueQuestion}
                 value = {this.props.Question}
                 type = 'text'
                 />
                 <input className = 'picture-input' 
                 type = 'file'
                 onChange = {this.picFileUpload}
                 />
                 <img alt = 'reference for the question'  src = {this.props.picture}/>
                 <Options
                 options = {this.props.options} 
                 addOption = {(e) => {this.addOption(this.props.selectedvalue)}}
                 callBackForOptions = {(e,index) => {this.callBackForOptions(e,index,this.props.selectedvalue)}}
                 />

             </div>
               
        )
    }   

}


