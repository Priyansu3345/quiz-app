import "./index.css"
import Quiz from "./component/quiz"
import React, { useEffect, useState } from "react"
import Results from "./component/result"

function App(){

  const questionBank = [
    {
      question: "What is the capital of France?",
      options: ["Berlin","London","Tokyo","Paris"],
      answer: "Paris"
    },
    {
      question: "Which language is used for web dev?",
      options: ["JavaScript","PHP","Python","All"],
      answer: "All"
    },
    {
      question: "What does JSX stand for?",
      options: ["JavaScript XML","Java Syntax extenstion","Just a Simple example","None of the above"],
      answer: "JavaScript XML"
    },

  ]

  const initialAnswers = [null, null, null]

  const [userAnswers, setUserAnswers] = useState(initialAnswers)

  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [isQuizFinished, setIsQuizFinished] = useState(false)

  const selectedAnswer = userAnswers[currentQuestion]


  const handleClickOption = (option) =>{
    const newUserAnswers = [...userAnswers]
    newUserAnswers[currentQuestion] = option

    setUserAnswers(newUserAnswers)

  }

  function goToNext(){
    if(currentQuestion === questionBank.length - 1){
      setIsQuizFinished(true)
    }
    else{
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  function goToPrev(){
    if(currentQuestion > 0){
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  console.log(userAnswers)

  function restartQuiz(){
    setUserAnswers(initialAnswers)
    setCurrentQuestion(0)
    setIsQuizFinished(false)
  }

  if(isQuizFinished){
    return < Results userAnswers = {userAnswers} questionBank = {questionBank} restartQuiz = {restartQuiz}/>
  }
  else{
    return <div>
    <h2>Question {currentQuestion + 1}</h2>
    <p>{questionBank[currentQuestion].question}</p>
    {questionBank[currentQuestion].options.map((option) => (<button onClick={()  => handleClickOption(option)}>{option}</button>))}
    <div>
      <button onClick = {goToPrev}  disabled = {currentQuestion === 0}> Previous</button>
      <button onClick = {goToNext} disabled = {!selectedAnswer}> {currentQuestion === questionBank.length - 1 ? "Finish Quiz": "Next" }</button>
    </div>

     </div>
}
  }

export default App