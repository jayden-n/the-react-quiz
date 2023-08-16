import { useEffect, useReducer } from 'react';
import Header from './Header';
import StartScreen from './StartScreen';
import Error from './Error';
import Loader from './Loader';
import Questions from './Questions';
import Main from './Main';

const initialState = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
};

const reducer = (state, action) => {
  // console.log(state, action);
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };

    case 'startGame':
      return {
        ...state,
        status: 'active',
      };

    case 'newAnswer':
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    default:
      throw new Error('Action unknown');
  }
};

const App = () => {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;
  useEffect(() => {
    fetch('http://localhost:9000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((err) => dispatch({ type: 'dataFailed' }));
  }, []);

  return (
    <div className='App'>
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen length={numQuestions} dispatch={dispatch} />
        )}
        {status === 'active' && (
          <Questions
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
        )}
      </Main>
    </div>
  );
};

export default App;
