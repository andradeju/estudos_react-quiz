import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { QuizContext } from '../context/quiz';
import "./Option.css";


const Option = ({ option, selectOption, answer }) => {
    const [quizState, dispatch] = useContext(QuizContext)

    return (
        <Container>
        <div className={`option ${
            quizState.answerSelected && option === answer ? 'correct' : " "
        } ${
            quizState.answerSelected && option !== answer ? 'wrong' : " "}`} 
            onClick={() => selectOption()}>
            <p>{option}</p>
        </div>
        </Container>
    );
};

export default Option;