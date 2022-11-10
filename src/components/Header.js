import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { gravatarEmail, name, score } = this.props;
    console.log(gravatarEmail);
    const hashGerada = md5(gravatarEmail).toString();
    console.log(hashGerada);
    return (
      <div>
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
        <h3
          data-testid="header-score"
        >
          {score}
        </h3>
      </div>
    );
  }
}

Header.propTypes = {
  gravatarEmail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  gravatarEmail: state.player.gravatarEmail,
  name: state.player.name,
  score: state.player.score,
});

export default connect(mapStateToProps)(Header);

