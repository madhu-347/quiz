import React from 'react';
import LeftPane from '../LeftPane/LeftPane';
import RightPane from '../RightPane/RightPane';
class Pane extends React.Component{
   state = {
      que : '',
      questions : ''
    }
    render(){
        return (
            <div className="App">
              <div className = 'left-pane'>
                <LeftPane/>
              </div>
              <div  className = 'right-pane'>
                <RightPane  questions = {this.questions}  que ={this.que} />
              </div>
            
            </div>
          );
    }
}  
  
  export default Pane;

