import React, { Component } from 'react';
import { number } from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import logoTrybe from '../images/logoTrivia.png';
import {
  ContainerFeedback,
  DivImgFeed,
  DivImgGravatar,
  DivMessage,
} from '../style/style';
import {
  PMessage,
  PScore,
  ButtonRanking,
  ButtonPlayGain,
  DivContainer,
} from '../style/style2';
import { totalScore } from '../redux/actions';

class Feedback extends Component {
  resetScore = () => {
    const { history, player } = this.props;
    player(0, 0);
    history.push('/');
  };

  message = () => {
    const { assertions } = this.props;
    const THREE = 3;
    const wellDone = <p data-testid="feedback-text">Well Done!</p>;
    const couldBeBetter = <p data-testid="feedback-text">Could be better...</p>;
    const paragraph = assertions >= THREE ? wellDone : couldBeBetter;
    return paragraph;
  };

  render() {
    const { gravatarEmail, assertions, score, history } = this.props;
    const hashGerada = md5(gravatarEmail).toString();
    return (
      <ContainerFeedback>
        <DivImgFeed>
          <img
            src={ logoTrybe }
            alt="Logo Trybe"
          />
        </DivImgFeed>
        <DivImgGravatar>
          <img
            src={ `https://www.gravatar.com/avatar/${hashGerada}` }
            alt="Gravatar Img"
            data-testid="header-profile-picture"
          />
        </DivImgGravatar>
        <DivMessage>
          <PMessage>
            {this.message()}
          </PMessage>
          <PScore>
            <p
              data-testid="feedback-total-question"
            >
              { `Você acertou ${assertions} questões!` }
            </p>
            <p
              data-testid="feedback-total-score"
            >
              {`Um total ${score} pontos`}
            </p>
          </PScore>
        </DivMessage>
        <DivContainer>
          <ButtonRanking
            type="button"
            data-testid="btn-ranking"
            onClick={ () => history.push('/ranking') }
          >
            View Ranking
          </ButtonRanking>
          <ButtonPlayGain
            type="button"
            data-testid="btn-play-again"
            onClick={ this.resetScore }
          >
            Play Again
          </ButtonPlayGain>
        </DivContainer>
      </ContainerFeedback>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
  gravatarEmail: state.player.gravatarEmail,
});

const mapDispatchToProps = (dispatch) => ({
  player: (score, assertions) => dispatch(totalScore(score, assertions)),
});

Feedback.propTypes = {
  score: number,
}.isRequered;

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
