import React,{Component} from 'react';
 export default class Options extends Component{
    handleOptionChange = (event,optionID) => {
        
       const option = event.target.value
       const OptionID = optionID
       this.props.callBackForOptions(option,OptionID)
    }
    addOption = ()=> {
        this.props.addOption()
    }

    render(){
        
        return(
        <div>{this.props.options.map((option,index) => {
            return(
                <div key = {index}>
                    <label>Option {option.optionID}</label>
                    <input value = {option.optionValue} onChange = { (e) => {this.handleOptionChange(e,option.optionID)}}/>
                   
                </div>
            )
        })}
         <button onClick = {() => {this.addOption()}}>Add option</button>
            
           
        </div>

        )
    }
}
