import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { playerInfo } from '../redux/actions';
import requestTokenApi from '../services/requestTokenApi';
import { tokenStorage } from '../services/handleLocalStorage';

class Login extends React.Component {
  state = {
    name: '',
    email: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = async () => {
    const { name, email } = this.state;
    const { player, history } = this.props;
    tokenStorage(await requestTokenApi());
    player(name, email);
    history.push('/game');
  };

  render() {
    const { history } = this.props;
    const { email, name } = this.state;
    const magicNumber = 2;
    const validName = name.length >= magicNumber;
    const validEmail = /\S+@\S+\.\S+/.test(email);
    const valid = validEmail && validName;
    return (
      <div>
        <h2>Login</h2>
        <label htmlFor="name">
          <input
            id="name"
            type="text"
            data-testid="input-player-name"
            name="name"
            value={ name }
            placeholder="Insira seu nome"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="email">
          <input
            id="email"
            type="email"
            data-testid="input-gravatar-email"
            name="email"
            value={ email }
            placeholder="Insira seu e-mail"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          data-testid="btn-play"
          disabled={ !valid }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
        <button
          type="button"
          data-testid="btn-settings"
          onClick={ () => history.push('/settings') }
        >
          Configurações
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  player: (name, gravatarEmail) => dispatch(playerInfo(name, gravatarEmail)),
});

Login.propTypes = {
  player: func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
