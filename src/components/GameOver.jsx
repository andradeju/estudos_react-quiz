import React from 'react';
import { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { QuizContext } from '../context/quiz';
import WellDone from "../img/welldone.svg";
import "./GameOver.css";

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <Container>
        <div id='gameover'>
            <h2>Fim de Jogo!</h2>
            <p>Pontuação: {quizState.score}</p>
            <p>Você acertou {quizState.score} de {quizState.questions.length} {" "}perguntas</p>
            <img src={WellDone} alt="Fim do Quiz" />
            <Button className='button' onClick={() => dispatch({ type: "NEW_GAME"})}>Reiniciar</Button>
        </div>
        </Container>
    )
}

export default GameOver;