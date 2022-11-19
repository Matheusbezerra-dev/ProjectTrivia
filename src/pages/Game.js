import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import requestQuestionsApi from '../services/requestQuestionsApi';
import './Game.css';
import logoTrybe from '../images/iconeTrybe.png';
import { totalScore, scoreAssertions } from '../redux/actions';
import { getStorage, playerStorage } from '../services/handleLocalStorage';
import {
  DivHeader,
  DivCategory,
  DivQuestion,
  DivFooter,
  ButtonQuestion,
  ButtonGame,
  ButtonContainer,
  ConatinerQuestion,
  Ptext,
  Timer,
} from '../style/style';

const four = 4;

class Game extends Component {
  state = {
    questions: [],
    index: 0,
    color: false,
    timer: 30,
    corrects: 0,
    scoreLocal: 0,
    nextBtn: false,
    players: [],
  };

  componentDidMount() {
    this.validToken();
    this.getPlayer();
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

  nextQuestion = () => {
    const { history } = this.props;
    const { index } = this.state;
    // const four = 4;
    this.setState({
      index: index + 1,
      color: false,
      nextBtn: false,
      timer: 30,
    });
    if (index === four) {
      this.addPlayer();
      history.push('/feedback');
    }
  };

  buttonColor = (el) => {
    this.setState({ color: true, nextBtn: true });
    this.sumScore(el);
  };

  indexTeste = () => {
    const { index } = this.state;
    // const four = 4;
    return (
      index === four ? 'End Game' : 'Next'
    );
  };

  addPlayer = () => {
    const { name, email, score } = this.props;
    const { players, index } = this.state;
    const objPlayer = { name, email, score };
    if (index >= four) playerStorage([...players, objPlayer]);
  };

  getPlayer = () => {
    const players = getStorage();
    if (players) this.setState({ players });
  };

  render() {
    const { questions, index, color, timer, nextBtn } = this.state;
    return (
      <div>
        <div>
          <DivHeader>
            <Header />
          </DivHeader>
        </div>
        { questions.map((element, i) => {
          if (i === index) {
            return (
              <ConatinerQuestion key={ element.type }>
                <DivQuestion>
                  <DivCategory
                    data-testid="question-category"
                  >
                    {element.category}
                  </DivCategory>
                  <Ptext data-testid="question-text">{element.question}</Ptext>
                  <Timer>{ `Tempo: ${timer}` }</Timer>
                </DivQuestion>
                <ButtonContainer data-testid="answer-options">
                  {element.respostas.map((e, indexBtn) => {
                    const btnColor = (e === element.correct_answer ? 'green' : 'red');
                    return (
                      <ButtonQuestion
                        type="button"
                        key={ e.type }
                        disabled={ color }
                        name={ e === element.correct_answer ? 1 : 0 }
                        className={ color === true ? btnColor : '' }
                        data-testid={ e === element.correct_answer
                          ? 'correct-answer' : `wrong-answer-${indexBtn}` }
                        onClick={ this.buttonColor }
                      >
                        { e }
                      </ButtonQuestion>
                    );
                  })}
                </ButtonContainer>
              </ConatinerQuestion>
            );
          }
          return null;
        })}
        <DivFooter>
          <div>
            <img
              src={ logoTrybe }
              alt="logo da Trybe"
            />
          </div>
          <div>
            {nextBtn && (
              <ButtonGame
                data-testid="btn-next"
                type="button"
                onClick={ this.nextQuestion }
              >
                {this.indexTeste()}
              </ButtonGame>
            )}
          </div>
        </DivFooter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.player.score,
  email: state.player.gravatarEmail,
  name: state.player.name,
});

Game.propTypes = {
  dispatch: func,
}.isRequired;

export default connect(mapStateToProps)(Game);
