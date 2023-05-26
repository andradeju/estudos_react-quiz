//arquivo onde ficará a lógica mais pesada
import { createContext, useReducer } from "react";
import questions from "../data/questions";

//faz uso do useReducer para gerenciar estados mais complexos 

//const que determina os estagios do jogo
const STAGES = ["Start", "Playing", "End"]

//propriedade que gerencia os estagios (defino o gameStage e questions vem do arquivo questions.js)
const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
}

//possibilidade de alterar os estados, vai executar uma função baseada em 2 parâmetros 
const quizReducer = (state, action) => {

    switch (action.type) {
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1],
            };
        case "REORDER_QUESTIONS":
            const reorderQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            })
            return {
                ...state,
                questions: reorderQuestions,
            };
        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion + 1;
            let endGame = false

            if (!questions[nextQuestion]) {
                endGame = true;
            }
            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage,
                answerSelected: false,
            };
        case "NEW_GAME":
            return initialState;
        case "CHECK_ANSWER":
            if (state.answerSelected) return state;

            const answer = action.payload.answer
            const option = action.payload.option
            let correctAnswer = 0

            if (answer === option) correctAnswer = 1;

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
            };
        default:
            return state;
    }
};

//faz uso do createContext, exporta o Contexto. atribuindo contexto para a aplicação toda //context é onde eu consumo
export const QuizContext = createContext()

//tem que ter o provider, normalmente é alguma coisa context e alguma coisa provider
//children para encapsular um componente do outro
export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState) //fazer a mudança de estado e saber qual estado está atualmente

    return <QuizContext.Provider
        value={value}>{children}
    </QuizContext.Provider>
}