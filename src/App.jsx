// react, componentes, estáticos
import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';
import Welcome from './components/Welcome';
import Question from './components/Question';
import GameOver from './components/GameOver';

import './App.css'

function App() {
  //para ter acesso ao estágios do quiz
  const [quizState, dispacth] = useContext(QuizContext);

  useEffect(() => {
    dispacth({ type: "REORDER_QUESTIONS"})
  },[])

  return (
    <div className='App'>
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  )
}
export default App;
