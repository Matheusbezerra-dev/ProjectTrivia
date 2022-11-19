import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import {
  DivCont,
  ImgRanking,
  PRanking,
  ContainerRanking,
  ButtonPlayGainRanking,
  ImgRank,
  H1Ranking,
  ContRank,
} from '../style/style2';
import { totalScore } from '../redux/actions/index';
import { getStorage } from '../services/handleLocalStorage';
import imgTrivia from '../images/logoTrivia.png';

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
        <DivCont key={ index }>
          <ImgRanking src={ `https://www.gravatar.com/avatar/${gravatarEmail}` } alt={ name } />
          <PRanking data-testid={ `player-name-${index}` }>{name}</PRanking>
          <p data-testid={ `player-score-${index}` }>{`${score} pontos`}</p>
        </DivCont>
      );
    });
    return List;
  };

  render() {
    return (
      <ContRank>
        <ImgRank
          src={ imgTrivia }
          alt="Logo"
        />
        <ContainerRanking>
          <H1Ranking data-testid="ranking-title">Ranking</H1Ranking>
          <div>
            {this.listPlayer()}
          </div>
          <ButtonPlayGainRanking
            type="button"
            data-testid="btn-go-home"
            onClick={ this.resetScore }
          >
            Jogar novamente
          </ButtonPlayGainRanking>
        </ContainerRanking>
      </ContRank>
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
