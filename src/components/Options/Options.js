import React,{Component} from 'react';
 export default class Options extends Component{
     state = {
         optionNumber : 0
     }

     // Sending the option values to the parent component
    handleOptionChange = (event,optionID) => {
        
       const option = event.target.value
       const OptionID = optionID
       this.props.callBackForOptions(option,OptionID)
    }
    optionSelector = (value) => {
this.setState({
    optionNumber : value
})    }
    // Adding the options
    addOption = (value)=> {
        this.props.addOption(value)
    }

    // Deleting the options
    deleteOption = (value) => {
        this.props.deleteOption(value)
    }

    render(){
        return(
        <div>{this.props.options.map((option,index) => {
           
            return(
                <div key = {index}>
                    <div onClick ={() =>
                        {
                            this.optionSelector(option.optionID)
                        }
                        }  className = 'input-group mb-3'>
                        <div className = 'input-group-prepend'>
                        <span className = 'input-group-text'>Option {option.optionID}</span>
                        </div>
                        <input type = 'text' className = 'form-control' value = {option.optionValue} onChange = { (e) => {this.handleOptionChange(e,option.optionID)}}/>
                    </div>
                    
                                   
                </div>
            )
        })}
        <div className = 'btn-group'>
        <button
          className = 'btn btn-success button'
          onClick = {() => {this.addOption()}}>Add option
        </button>
         <button
          className = 'btn btn-danger button'
          onClick = {() =>  {this.deleteOption(this.state.optionNumber)}}>Delete
        </button> 
        </div>
             
           
        </div>

        )
    }
}
