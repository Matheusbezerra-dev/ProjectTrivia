import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { DivImgTrivia, DivImgName } from '../style/style';
import { LinkImg } from '../style/style2';
import imgTrivia from '../images/logoTrivia.png';
import settings from '../images/configuração.png';

class Header extends Component {
  render() {
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
              { `Pontos: ${score || 0}`}
            </h3>
            <Link
              to="/settings"
            >
              <LinkImg
                src={ settings }
                alt="configuração"
              />
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {}.isRequired;

const mapStateToProps = (state) => ({
  gravatarEmail: state.player.gravatarEmail,
  name: state.player.name,
  score: state.player.score,
});

export default connect(mapStateToProps)(Header);
