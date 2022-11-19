import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import { func, shape } from 'prop-types';
import { connect } from 'react-redux';
import { DivImgTrivia, DivImgName } from '../style/style';
import imgTrivia from '../images/logoTrivia.png';

class Header extends Component {
  // pushSetting = () => {
  //   const { history } = this.props;
  //   history.push('/settings');
  // };

  render() {
    const { history } = this.props;
    const { gravatarEmail, name, score } = this.props;
    const hashGerada = md5(gravatarEmail).toString();
    return (
      <header>
        <div>
          <DivImgTrivia>
            <div>
              <img
                src={ imgTrivia }
                alt="logo trivia"
              />
            </div>
          </DivImgTrivia>
          <div>
            <DivImgName>
              <img
                src={ `https://www.gravatar.com/avatar/${hashGerada}` }
                alt="Gravatar Img"
                data-testid="header-profile-picture"
              />
              <h2
                data-testid="header-player-name"
              >
                {name}
              </h2>
            </DivImgName>
            <h3
              data-testid="header-score"
            >
              { `Pontos: ${score}`}
            </h3>
            <button
              type="button"
              data-testid="btn-settings"
              onClick={ () => history.push('/settings') }
            >
              Configurações
            </button>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  // gravatarEmail: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
  // score: PropTypes.number.isRequired,
  history: shape({ push: func }),
}.isRequired;

const mapStateToProps = (state) => ({
  gravatarEmail: state.player.gravatarEmail,
  name: state.player.name,
  score: state.player.score,
});

export default connect(mapStateToProps)(Header);
