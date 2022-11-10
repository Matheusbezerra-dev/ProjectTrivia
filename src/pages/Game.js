import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import requestQuestionsApi from '../services/requestQuestionsApi';

class Game extends Component {
  state = {
    questions: [],
    index: 0,
  };

  componentDidMount() {
    this.validToken();
  }

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
    const { questions, index } = this.state;
    return (
      <div>
        <Header />
        { questions.map((element, i) => {
          if (i === index) {
            return (
              <div key={ element.type }>
                <h2 data-testid="question-category">{element.category}</h2>
                <h2 data-testid="question-text">{element.question}</h2>
                <div data-testid="answer-options">
                  {this.questionRender(
                    [...element.incorrect_answers, element.correct_answer],
                  ).map((e, indexBtn) => (
                    <button
                      type="button"
                      key={ e.type }
                      data-testid={ e === element.correct_answer
                        ? 'correct-answer' : `wrong-answer-${indexBtn}` }
                      onClick={ () => {
                        this.setState({
                          index: index + 1,
                        });
                      } }
                    >
                      { e }
                    </button>
                  ))}
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
