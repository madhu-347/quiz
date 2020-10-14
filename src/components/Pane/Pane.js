import React ,{Component} from 'react';
import LeftPane from '../LeftPane/LeftPane';
import RightPane from '../RightPane/RightPane';
import './pane.scss';
export default class Pane extends Component{
  
  constructor(){
    super();
   
    this.state = {
      QuestionArray : [
        { 
          qNumber : 1,
          Question : '',
          clickCount : 0,
          picture : null,
          options : [{
            optionID : 1,
            optionValue :  ''
          },{
            optionID : 2,
            optionValue : ''
          }]
        }],
        selectedQNumber : '',
        
        
    }
    
}

callBackFunction = (dataFromRightPane) => {
  this.setState({
    selectedQNumber : dataFromRightPane
  })
}
questionSelector = (qNumber) => {
this.setState({
  selectedQNumber : qNumber
})

}
questionInput = (getValue) => {
  this.setState({
    Question : getValue
  })

}


deleteSpace = (index) => {
  alert("Sure, you wanna delete?")
const copyQuestionArray = Object.assign([], this.state.QuestionArray)
copyQuestionArray.splice(index - 1, 1);
this.setState({
  QuestionArray : copyQuestionArray
})

}

addSpace = () => {

this.setState((prevState) => ({
  QuestionArray : [...prevState.QuestionArray, 
    { qNumber : this.state.QuestionArray.length + 1,Question : '',clickCount : 0, pic : null,
    options : [ {optionID : 1,optionValue : ''} , {optionID : 2,optionValue : ''} ] }]
}))



}
callbackForaddOption = (value) => {
  const copyQuestionArray = Object.assign([], this.state.QuestionArray)
   copyQuestionArray.filter(click => click.qNumber === value).map(clickcount => {
  clickcount.clickCount = clickcount.clickCount + 1
  var tempclick = clickcount.clickCount
  this.setState({
    QuestionArray : copyQuestionArray
  })
  console.log(tempclick)
  console.log(this.state)
  })
   
  
  this.state.QuestionArray.filter(click => click.qNumber === value).map(clickcount => {
     var clickvariable = clickcount.clickCount
     console.log(clickvariable)
    if(clickvariable <= 4) {
      let temp = Object.assign([], this.state.QuestionArray)
      temp.map((option) => {
       return(
         <div>{
           option.options.push({optionID:  option.options.length + 1 ,optionValue: ''})
           }</div>
         )
           
       })
       this.setState({ QuestionArray:  temp })
    }
    else {
      return(
        alert('Oops! Exceeded Option Count')
      )
    }
  })  
     
}

callBackforQuestion = (value,index) => {
  let valuesOfQuestion = [...this.state.QuestionArray]; 
  valuesOfQuestion[index - 1] = {...valuesOfQuestion[index - 1], Question : value}
  this.setState({
     QuestionArray:valuesOfQuestion})
  
}

picFile = (value,index) => {
  let fileValue = [...this.state.QuestionArray];
  fileValue[index-1] = {...fileValue[index-1], picture : URL.createObjectURL(value)
  }
  this.setState ({
    QuestionArray : fileValue
  })

}
callBackOptionForpane = (value,index,selectedValue) => {
 let temp = Object.assign([], this.state.QuestionArray)
 temp.filter(oops => oops.qNumber === selectedValue).map(indce => {
     indce.options.filter( indice => indice.optionID === index).map( final => {
       final.optionValue = value
     })
 })
 this.setState({
   QuestionArray : temp
 })

}

  

    render(){
      return (
            <div className="App">
              <div className = 'left-pane'>
                <LeftPane
                QuestionArrayleft ={this.state.QuestionArray}
                selectedQNumber = {this.state.selectedQNumber}
                questionSelector ={this.questionSelector}
                deleteSpace ={ this.deleteSpace}
                addSpace = {this.addSpace}
              
                 />
              </div>
              

              <div  className = 'right-pane'>
                {this.state.QuestionArray.filter(specificQuestion => specificQuestion.qNumber === this.state.selectedQNumber).map(specificQno => {
                  return <RightPane key = {specificQno.qNumber}
                    
                      selectedvalue = {this.state.selectedQNumber}
                      qNumber = {specificQno.qNumber}
                      Question = {specificQno.Question}
                      picture = {specificQno.picture}
                      options = {specificQno.options}
                      questionInput = {this.questionInput}
                      callBackforQuestion = {this.callBackforQuestion}
                      callbackForaddOption = {this.callbackForaddOption}
                      picFile = {this.picFile}
                      callBackOptionForpane = {this.callBackOptionForpane}
                      
                      />
                })
                
                 }
              </div>
             
            
            </div>
          );
    }
}  
  
