import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import "./Welcome.css";
import Quiz from "../img/quiz.svg";

const Welcome = () => {
    //faz a variável e chama o useContext p/ consumir o "contexto" que deseja.
    //quizState pega os valores e dispacth muda
    const [quizState, dispatch] = useContext(QuizContext); //dispatch é como vuu entrar no reduce p/ dispara o switch

    return (
        <Container>
        <div id="welcome">
            <h2>Seja bem-vindo!</h2>
            <p>Clique no botão abaixo para começar:</p>
            <Button className='button' onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</Button>
            <img src={Quiz} alt="inicio do Quiz" />
        </div>
        </Container>
    )
}

export default Welcome;