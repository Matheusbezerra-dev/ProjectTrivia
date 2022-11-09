import React from 'react';

class Login extends React.Component {
  state = {
    name: '',
    email: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
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
      </div>
    );
  }
}

export default Login;
