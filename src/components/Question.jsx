import { useContext } from 'react'
import { Button, Container } from 'react-bootstrap';
import { QuizContext } from '../context/quiz';
import Option from './Option';
import "./Question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
  }

  return (
    <Container>
    <div id='question'>
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Option
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
          />
        ))}
      </div>
      {quizState.answerSelected && (
        <Button className='button' onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>Continuar</Button>
      )}
    </div>
    </Container>
  )
}

export default Question;