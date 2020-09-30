import React from 'react';
import LeftPane from '../LeftPane/LeftPane';
import RightPane from '../RightPane/RightPane';
class Pane extends React.Component{

            state = {
                question : []
            }
        
    
    render(){
        return (
            <div className="App">
              <div className = 'left-pane'>
                <LeftPane/>
              </div>
              <div  className = 'right-pane'>
                <RightPane  question = {this.state.question} />
              </div>
            
            </div>
          );
    }
}  
  
  export default Pane;

