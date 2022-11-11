import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import requestQuestionsApi from '../services/requestQuestionsApi';
import './Game.css';

class Game extends Component {
  state = {
    questions: [],
    index: 0,
    color: false,
    timer: 31,
  };

  componentDidMount() {
    this.validToken();
    const second = 1000;
    // const interval = setInterval(this.handleTimer, second);
    this.interval = window.setInterval(() => {
      const { timer } = this.state;
      const zero = 1;
      if (timer === zero) {
        this.setState({ color: true });
      }
      this.setState((prev) => ({ timer: prev.timer - 1 }));
    }, second);
  }

  componentDidUpdate() {
    const { timer } = this.state;
    const zero = 0;
    if (timer === zero) {
      clearInterval(this.interval);
    }
  }

  // timerStop = () => {
  //   const { timer } = this.state;
  //   const second = 1000;
  //   const interval = setInterval(() => {
  //     this.setState((prev) => ({
  //       timer: prev.timer - 1,
  //     }), () => {
  //       if (timer === 0) {
  //         clearInterval(interval);
  //       }
  //     });
  //   }, second);
  // };

  validToken = async () => {
    const { history } = this.props;
    const result = await requestQuestionsApi();
    if (result.results.length === 0) {
      history.push('/');
      localStorage.removeItem('token');
    }
    this.setState({
      questions: result.results,
    });
  };

  questionRender = (array) => {
    const number = 0.5;
    const sortIndex = array.sort(() => number - Math.random());
    return sortIndex;
  };

  render() {
    const { questions, index, color, timer } = this.state;
    const zero = 0;
    return (
      <div>
        <Header />
        {timer === zero ? (<h3>0</h3>) : (<h3>{ timer }</h3>)}
        { questions.map((element, i) => {
          if (i === index) {
            return (
              <div key={ element.type }>
                <h4 data-testid="question-category">{element.category}</h4>
                <h3 data-testid="question-text">{element.question}</h3>
                <div data-testid="answer-options">
                  {this.questionRender(
                    [...element.incorrect_answers, element.correct_answer],
                  ).map((e, indexBtn) => {
                    const btnColor = (e === element.correct_answer ? 'green' : 'red');
                    return (
                      <button
                        type="button"
                        key={ e.type }
                        disabled={ color }
                        className={ color === true
                          ? btnColor : '' }
                        data-testid={ e === element.correct_answer
                          ? 'correct-answer' : `wrong-answer-${indexBtn}` }
                        onClick={ () => {
                          this.setState({
                          // index: index + 1,
                            color: true,
                          });
                        } }
                      >
                        { e }
                      </button>
                    );
                  })}
                </div>
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
};

export default Game;
