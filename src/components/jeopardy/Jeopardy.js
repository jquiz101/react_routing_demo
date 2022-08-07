import React, { Component } from 'react';

class Jeopardy extends Component {

  state = {
    data: {},
    dataCategory: {},
    score: 0,
    userAnswer: ''
  }

  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    //use fetch to make an API call and get a random Jeopardy question (returns a promise)
    fetch(`https://jservice.io/api/random`)
        //on success of the fetch request, turn the response that came back into JSON
        .then((response) => response.json())
        //on success of turnig the response into JSON (data we can work with), lets add that data to state
        .then((data) => {
            
            //put the data in the console just so we can see it
            console.log("data from the api", data);
            console.log(data[0].answer)
            console.log(data[0].category)

            //update state with the data from the API causing the page to re-render
            this.setState({
                // ...this.state.data,
                data: data[0], //grab the first question from the array returned
                dataCategory: data[0].category

            });

            // console.log(this.state.data)
        })
        //handle any errors/failures with getting data from the API
        .catch((error) => {
            console.log(error)
        });
  }

  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  
  handleChange = event => {
    this.setState({
        userAnswer: event.target.value
    })

    // console.log('value is:', event.target.value);
  };

  checkAnswer = (event) => {
    // console.log('checkAnswer')
    event.preventDefault();

    // 👇️ value of input field
    console.log('handleClick 👉️', this.state.userAnswer);
    console.log('actualAnswer: ' + this.state.data.answer)

    if(this.state.userAnswer.toLowerCase() === this.state.data.answer.toLowerCase()) {
        this.setState((state, props) => (
            {
                score: state.score + state.data.value
            }
        ))
    } else {
        this.setState((state, props) => (
            {
                score: state.score - state.data.value
            }
        ))
    }

    document.getElementById('txtAnswer').value = ''

    this.getNewQuestion();
    
  }

  //display the results on the screen
  render() {
    return (
      <div>
        <div>
            Category: {this.state.dataCategory.title}
            {/* Category: {this.state.data.category.title} */}
        </div>
        <div>
            {/* Displaying the question to help you get started */}
            Question: {this.state.data.question}
        </div>
        
        <div>
            Point value: {this.state.data.value}
        </div>

        

        <div>
            <input type='textbox' id='txtAnswer' onChange={this.handleChange}></input>
            <button onClick={this.checkAnswer}>Submit Answer</button>
        </div>

        <div>
            Score: {this.state.score}
        </div>
      </div>
    );
  }
}

export default Jeopardy;