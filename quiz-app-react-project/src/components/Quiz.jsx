import React from 'react'
import { useState } from 'react'
import Results from './Results'


// A component is just a function which returns some javascript code 
function Quiz() {

  const questionBank = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "London", "Paris","Rome"],
      answer: "Paris"
    }, 
    {
      question: "Which language is used for web apps?",
      options: ["PHP", "Python", "Javascript", "All"],
      answer: "All"
    },
    {
      question: "What does JSX stand for?",
      options: ["Javascript XML", "Java syntax extension", "Just a simple extenstion", "None of the above"],
      answer: "Javascript XML"
    }

  ];

  const initialAnswers=[null, null, null];

  const [userAnswers, setUserAnswers] = useState(initialAnswers)

  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [isQuizFinished, setIsQuizFinished] = useState(false)

  const selectedAnswer = userAnswers[currentQuestion];


 /* If any variable is changing value, we need to tell react to re-render it to the UI using useState*/
  function handleSelectOption(option){
    const newUserAnswers = [...userAnswers]
    newUserAnswers[currentQuestion] = option 

    setUserAnswers(newUserAnswers)

  }

  function goToNext(){
    if(currentQuestion === questionBank.length-1) {
      setIsQuizFinished(true)
    } else {
    setCurrentQuestion(currentQuestion+1)
    }
  }

  function goToPrev(){

    if(currentQuestion>0) {
      setCurrentQuestion(currentQuestion-1)
    }
  }


  function restartQuiz(){
    setUserAnswers(initialAnswers)
    setCurrentQuestion(0)
    setIsQuizFinished(false)

  }


  if(isQuizFinished){
    return <Results  userAnswers={userAnswers} questionBank={questionBank} restartQuiz={restartQuiz}/> /*Passing Props from the quiz component to the Result component */
  }

  return (
    <div> 
      <h2>Question {currentQuestion+1}</h2>
      <p className="question"> {questionBank[currentQuestion].question}</p>

      {questionBank[currentQuestion].options.map((option) => (
        <button className={"option" + (selectedAnswer === option ? " selected" : "")} onClick={() => handleSelectOption(option)}> {option} </button> /* Map function is used to loop through an entire list*/

      ))} 

      

      <div className="nav-buttons">
        <button onClick={goToPrev} disabled={currentQuestion==0}>Previous</button>
        <button onClick={goToNext} disabled={!selectedAnswer}>

          {currentQuestion  !== questionBank.length-1?"Next":"Finish Quiz"}
          
        </button>
      </div>
      
    </div>
  )
}

export default Quiz // Export so that it can be accessed from anywhere