import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import requestQuestionsApi from '../services/requestQuestionsApi';
import './Game.css';
import { totalScore, scoreAssertions } from '../redux/actions';

class Game extends Component {
  state = {
    questions: [],
    index: 0,
    color: false,
    timer: 30,
    corrects: 0,
    scoreLocal: 0,
  };

  componentDidMount() {
    this.validToken();
    const second = 1000;
    // const interval = setInterval(this.handleTimer, second);
    const interval = window.setInterval(() => {
      const { timer } = this.state;
      const zero = 0;
      if (timer === zero) {
        this.setState({ color: true });
        return window.clearInterval(interval);
      }
      this.setState((prev) => ({ timer: prev.timer - 1 }));
    }, second);
  }

  validToken = async () => {
    const { history } = this.props;
    const result = await requestQuestionsApi();
    const questions = result.results.map((perguntas) => {
      const respostas = this
        .questionRender([...perguntas.incorrect_answers, perguntas.correct_answer]);
      const obj = { ...perguntas, respostas };
      return obj;
    });
    if (result.results.length === 0) {
      history.push('/');
      localStorage.removeItem('token');
    }
    this.setState({
      questions,
    });
  };

  questionRender = (array) => {
    const number = 0.5;
    const sortIndex = array.sort(() => number - Math.random());
    return sortIndex;
  };

  sumScore = (event) => {
    const { target: { name } } = event;
    const { dispatch } = this.props;
    const { timer, questions, index, corrects } = this.state;
    let scoreQuestion = 0;
    const TEN = 10;
    const rules = {
      hard: 3,
      medium: 2,
      easy: 1,
    };

    const { difficulty } = questions[index];
    if (difficulty === 'hard') {
      scoreQuestion = TEN + (timer * rules.hard);
    } else if (difficulty === 'medium') {
      scoreQuestion = TEN + (timer * rules.medium);
    } else {
      scoreQuestion = TEN + (timer * rules.easy);
    }
    const finalResult = scoreQuestion * name;
    this.setState((prev) => ({
      scoreLocal: prev.scoreLocal + finalResult,
      corrects: corrects + +name,
    }), () => {
      dispatch(totalScore(this.state));
      dispatch(scoreAssertions(this.state));
    });
  };

  render() {
    const { questions, index, color, timer } = this.state;
    return (
      <div>
        <Header />
        <h3>{ timer }</h3>
        { questions.map((element, i) => {
          if (i === index) {
            return (
              <div key={ element.type }>
                <h4 data-testid="question-category">{element.category}</h4>
                <h3 data-testid="question-text">{element.question}</h3>
                <div data-testid="answer-options">
                  {element.respostas.map((e, indexBtn) => {
                    const btnColor = (e === element.correct_answer ? 'green' : 'red');
                    return (
                      <button
                        type="button"
                        key={ e.type }
                        disabled={ color }
                        name={ e === element.correct_answer
                          ? 1 : 0 }
                        className={ color === true
                          ? btnColor : '' }
                        data-testid={ e === element.correct_answer
                          ? 'correct-answer' : `wrong-answer-${indexBtn}` }
                        onClick={ (el) => {
                          this.setState({ color: true });
                          this.sumScore(el);
                        } }
                      >
                        { e }
                      </button>
                    );
                  })}
                </div>
                <button
                  type="button"
                  onClick={ () => {
                    this.setState({
                      index: index + 1,
                      color: false,
                    });
                  } }
                >
                  Next
                </button>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  }
}

Game.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Game);
