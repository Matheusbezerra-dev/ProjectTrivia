import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { totalScore } from '../redux/actions/index';

class Ranking extends Component {
  resetScore = () => {
    const { history, player } = this.props;
    player(0, 0);
    history.push('/');
  };

  render() {
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ this.resetScore }
        >
          Início
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  player: (score, assertions) => dispatch(totalScore(score, assertions)),
});

Ranking.propTypes = {
  player: func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Ranking);
