import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import { totalScore } from '../redux/actions/index';
import { getStorage } from '../services/handleLocalStorage';

class Ranking extends Component {
  state = {
    players: [],
  };

  componentDidMount() {
    const players = getStorage();
    players.sort((player1, player2) => player2.score - player1.score);
    this.setState({ players });
  }

  resetScore = () => {
    const { history, player } = this.props;
    player(0, 0);
    history.push('/');
  };

  listPlayer = () => {
    const { players } = this.state;
    const List = players.map((player, index) => {
      const { email, name, score } = player;
      const gravatarEmail = md5(email).toString();
      return (
        <li key={ index }>
          <img src={ `https://www.gravatar.com/avatar/${gravatarEmail}` } alt={ name } />
          <p data-testid={ `player-name-${index}` }>{name}</p>
          <p data-testid={ `player-score-${index}` }>{score}</p>
        </li>
      );
    });
    return List;
  };

  render() {
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <ol>
          {this.listPlayer()}
        </ol>
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
