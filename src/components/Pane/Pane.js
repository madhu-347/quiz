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
          Question : '',
          options : []
        }],
        selectedQNumber : ''
    }
    
}

 
    render(){
        return (
            <div className="App">
              <div className = 'left-pane'>
                <LeftPane
                QuestionArray = {this.state.QuestionArray}
                selectedQNumber = {this.state.selectedQNumber}
                
                />
              </div>
              <div  className = 'right-pane'>
                <RightPane
                selectedQNumber = {this.state.selectedQNumber}
                
                />

              </div>
             
            
            </div>
          );
    }
}  
  
  export default Pane;