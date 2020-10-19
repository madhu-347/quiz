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
          picture : null,
          options : [{
            optionID : 1,
            optionValue :  ''
          },{
            optionID : 2,
            optionValue : ''
          }]
        }],
        selectedQNumber : 0,
        screenWidth : true
       
    }
}


// Saving the selected question number into the state 
questionSelector = (qNumber) => {
this.setState({
  selectedQNumber : qNumber
})

}
// Saving the question input into the array 
questionInput = (getValue) => {
  this.setState({
    Question : getValue
  })

}

// Deleting the selected question from the array
deleteSpace = () => {
  var increment = 1
  alert("Sure, you wanna delete?")
  const copyQuestionArray = Object.assign([], this.state.QuestionArray)
  copyQuestionArray.splice(this.state.selectedQNumber - 1 , 1);
  this.setState({
   QuestionArray : copyQuestionArray
  })
  copyQuestionArray.map(dete => {
    
    dete.qNumber = increment
    increment = increment + 1
  })
  
  this.setState({
    QuestionArray : copyQuestionArray
  })

}

// Adding the new question into the array 
addSpace = () => {
this.setState((prevState) => ({
  QuestionArray : [...prevState.QuestionArray, 
    { qNumber : this.state.QuestionArray.length + 1,Question : '', picture : null,
    options : [ {optionID : 1,optionValue : ''} , {optionID : 2,optionValue : ''} ] }]
}))



}

// Adding the option into the options array
callbackForaddOption = (value) => {
 this.state.QuestionArray.filter(click => click.qNumber === value).map(clickcount => {
    var clickvariable = clickcount.options.length
    if(clickvariable <= 5) {
      let temp = Object.assign([], this.state.QuestionArray)
      temp.filter(filteredValue => filteredValue.qNumber === value ).map(optionSelector => {
         return(
          <div>{
            optionSelector.options.push({optionID:  optionSelector.options.length + 1 ,optionValue: ''})
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

// Deleting the selected option
callbackFordeleteOption = (value,selectedQuestion) => {
  var increment = 1
  alert('Sure? You wanna delete the option?');
  const copyQuestionArray = Object.assign([], this.state.QuestionArray)
  copyQuestionArray.filter((deleteoption) => deleteoption.qNumber === selectedQuestion).map((deleteoption2) => {
    deleteoption2.options.splice(value - 1 ,1)
  })
   var ii = copyQuestionArray.filter((deleteoption) => deleteoption.qNumber === selectedQuestion).map((deleteoption2) => {
     deleteoption2.options.map(deleteoption3 => {
       deleteoption3.optionID = increment
       increment  = increment + 1
     })
   })
   this.setState({
    QuestionArray : copyQuestionArray
  })
}

// Saving the question in the array 
callBackforQuestion = (value,index) => {
  let valuesOfQuestion = [...this.state.QuestionArray]; 
  valuesOfQuestion[index - 1] = {...valuesOfQuestion[index - 1], Question : value}
  this.setState({
     QuestionArray:valuesOfQuestion})
  
}
// Saving the picture data in the array
picFile = (value,index) => {
  let fileValue = [...this.state.QuestionArray];
  fileValue[index-1] = {...fileValue[index-1], picture : URL.createObjectURL(value)
  }
  this.setState ({
    QuestionArray : fileValue
  })

}
// Saving the options inside the array
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

backButtonChange = () => {
  this.setState({
    selectedQNumber : 0
   
  })
}
componentDidMount(){
  window.addEventListener('resize',this.resize.bind(this))
  this.resize();
}
resize() {
  this.setState({screenWidth: window.innerWidth >= 425});
}
componentWillUnmount() {
  window.removeEventListener("resize", this.resize.bind(this));
}

    render(){
       
     
      return (
            <div onClick = {this.handleChange} className="App">
              <div className = {(this.state.screenWidth) ? ('left-pane desktop-left'): (
                (this.state.selectedQNumber === 0) ? ('left-pane mobile-left' ):('left-pane mobile-right')
              )} >
                <LeftPane
                QuestionArrayleft ={this.state.QuestionArray}
                selectedQNumber = {this.state.selectedQNumber}
                questionSelector ={this.questionSelector}
                deleteSpace ={this.deleteSpace}
                addSpace = {this.addSpace}
              
                 />
              </div>
              

              <div className = {(this.state.screenWidth) ? ('right-pane desktop-right'): (
                (this.state.selectedQNumber === 0) ? ('right-pane mobile-right' ):('right-pane mobile-left')
              )}>
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
                      callbackFordeleteOption = {this.callbackFordeleteOption}
                      picFile = {this.picFile}
                      callBackOptionForpane = {this.callBackOptionForpane}
                      backButtonChange = {this.backButtonChange}
                      />
                })
                
                 }
              </div>
             
            
            </div>
          );
    }
}  
  
