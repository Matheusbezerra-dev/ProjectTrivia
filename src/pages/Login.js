import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { playerInfo } from '../redux/actions';
import requestTokenApi from '../services/requestTokenApi';
import { tokenStorage } from '../services/handleLocalStorage';
import { Divlogin, ImgLogin, FooterImg, LoginContainer } from '../style/style';

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
    // const { history } = this.props;
    const { email, name } = this.state;
    const magicNumber = 2;
    const validName = name.length >= magicNumber;
    const validEmail = /\S+@\S+\.\S+/.test(email);
    const valid = validEmail && validName;
    return (
      <LoginContainer>
        <ImgLogin>
          <div>     </div>
        </ImgLogin>
        <Divlogin>
          <div>
            <label htmlFor="email">
              <input
                id="email"
                type="email"
                data-testid="input-gravatar-email"
                name="email"
                value={ email }
                placeholder="Qual é o seu e-mail do gravatar?"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="name">
              <input
                id="name"
                type="text"
                data-testid="input-player-name"
                name="name"
                value={ name }
                placeholder="Qual é o seu nome?"
                onChange={ this.handleChange }
              />
            </label>
            <button
              type="button"
              data-testid="btn-play"
              disabled={ !valid }
              onClick={ this.handleClick }
            >
              Jogar
            </button>
            {/* <button
              type="button"
              data-testid="btn-settings"
              onClick={ () => history.push('/settings') }
            >
              Configurações
            </button> */}
          </div>
        </Divlogin>
        <footer>
          <FooterImg>
            <div> </div>
          </FooterImg>
        </footer>
      </LoginContainer>
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
