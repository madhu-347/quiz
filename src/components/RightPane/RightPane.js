import React ,{Component} from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Options from '../Options/Options';
import "./right-pane.scss";
export default class RightPane extends Component{
//Sending the question to the parent component   
valueQuestion = (event) => {
    const que = event.target.value ;
    this.props.callBackforQuestion(que, this.props.selectedvalue)
}
// Sending the picture data to the parent component
picFileUpload = (event) => {
    const file = event.target.files[0];
    this.props.picFile(file,this.props.selectedvalue)
}
// Sending the option values to the parent component
callBackForOptions = (option,index,selectedValue) => {
  this.props.callBackOptionForpane(option,index,selectedValue)
}
// Adding the options
addOption = (value) => {
    this.props.callbackForaddOption(value)
}
// Deleting the options
deleteOption = (value,questionValue) => {
    
   this.props.callbackFordeleteOption(value,questionValue)
}


    render(){
         return(
             <div>
                 <div className = 'heading-container'>
                 <div onClick = {this.props.backButtonChange} className = 'btn btn-link back-button-for-mobile'><FaArrowLeft /></div>
                 <span className = 'frame-question'>Frame the Question {this.props.selectedvalue}</span>
                 </div>
                 
                 <br />
                 <br />
                 <div className = 'question-container'>
                 <div className = 'input-group'>
                    <div className = 'input-group-prepend'>
                    <span className = 'input-group-text'>Question</span>
                    </div>
                 
                    <textarea className = 'form-control' onChange = {this.valueQuestion}
                    value = {this.props.Question}
                    type = 'text'
                    />
                 </div>
                 <input className = 'form-control-file form-group' 
                 type = 'file'
                 onChange = {this.picFileUpload}
                 />
                 <img alt = ''  src = {this.props.picture}/>
                 <Options
                 options = {this.props.options} 
                 addOption = {(e) => {this.addOption(this.props.selectedvalue)}}
                 callBackForOptions = {(e,index) => {this.callBackForOptions(e,index,this.props.selectedvalue)}}
                 deleteOption = {(e) => {this.deleteOption(e,this.props.selectedvalue)}}
                 />
                 </div>
                 

             </div>
               
        )
    }   

}


