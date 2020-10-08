import React from 'react';
import LeftPane from '../LeftPane/LeftPane';
import RightPane from '../RightPane/RightPane';
class Pane extends React.Component{
  constructor(){
    super();
    this.state = {
      QuestionArray : [
        {
          qNumber : 1,
          Question : 'asdfghjk',
          options : []
        
        }],
        selectedQNumber : ''
    }
    
}
handle = () => {
  this.setState ((prevState) => ({
      selectedQNumber : prevState.selectedQNumber + 1
  }))
  console.log(this.state.selectedQNumber)

}
callBackFunction = (dataFromRightPane) => {
  this.setState({
    selectedQNumber : dataFromRightPane
  })
}
QNumberSelector = () => {
  
}
 
    render(){
      
    
        return (
            <div className="App">
              <div className = 'left-pane'>
                <LeftPane
                QuestionArray = {this.state.QuestionArray}
                selectedQNumber = {this.selectedQuestion}
                />
              </div>
              

              <div  className = 'right-pane'>
                <RightPane data = {
                  {selectedvalue : this.state.selectedQNumber,
                    QuestionArray : this.state.QuestionArray}
                }
                handle = {this.handle}
                />

              </div>
             
            
            </div>
          );
    }
}  
  
  export default Pane;