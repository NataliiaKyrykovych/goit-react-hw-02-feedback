import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section"
import { Statistics } from "./Statistics/Statistics";

export class App extends Component{
  state = {
    good: 0,
    neurtal: 0,
    bad: 0,
}
chooseFeedback=({name})=>{
    this.setState((prevState) => {
        if(name === 'good'){
            return {
                [name]: prevState.good +1,
            }    
        }
        if(name === 'neurtal'){
            return {
                [name]: prevState.neurtal +1,
            }    
        }
        if(name === 'bad'){
            return {
                [name]: prevState.bad +1,
            }    
        }
    })
}
render(){
  return(
    <>
      <Section title="Please leave feedback">
          <FeedbackOptions chooseFeedback={this.chooseFeedback} options={this.state}/>
      </Section>      
      <Section title="Statistics">
          <Statistics 
            good={this.state.good}
            neurtal={this.state.neurtal}
            bad={this.state.bad}
          />
      </Section>
</>
  )
}
};