import React, { Component } from 'react';
import { number } from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { totalScore } from '../redux/actions';

class Feedback extends Component {
  resetScore = () => {
    const { history, player } = this.props;
    player(0, 0);
    history.push('/');
  };

  message = () => {
    const { assertions } = this.props;
    const magic = 3;
    const wellDone = <p data-testid="feedback-text">Well Done!</p>;
    const couldBeBetter = <p data-testid="feedback-text">Could be better...</p>;
    const paragraph = assertions >= magic ? wellDone : couldBeBetter;
    return paragraph;
  };

  render() {
    const { assertions, score, history } = this.props;
    return (
      <div>
        <Header />
        <div>
          {this.message()}
        </div>
        <div>
          <h3>Final score</h3>
          <div>
            <p>Total question:</p>
            <p data-testid="feedback-total-question">{ assertions }</p>
          </div>
          <div>
            <p>Total score:</p>
            <p data-testid="feedback-total-score">{ score }</p>
          </div>
        </div>
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ this.resetScore }
        >
          Play Again
        </button>

        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ () => history.push('/ranking') }
        >
          View Ranking
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

const mapDispatchToProps = (dispatch) => ({
  player: (score, assertions) => dispatch(totalScore(score, assertions)),
});

Feedback.propTypes = {
  score: number,
}.isRequered;

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
