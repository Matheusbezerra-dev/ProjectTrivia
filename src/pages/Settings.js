import React, { Component } from 'react';
import logoTrivia from '../images/logoTrivia.png';
import {
  ContainerSettings,
  ContainerItem,
  ImgSettings,
  H1Settings,
  DivSettings,
  ButtonSettings,
} from '../style/style2';

export default class Settings extends Component {
  render() {
    const { history } = this.props;
    return (
      <ContainerSettings>
        <ImgSettings
          src={ logoTrivia }
          alt="Logo Trivia"
        />
        <ContainerItem>
          <H1Settings>CONFIGURAÇÕES</H1Settings>
          <DivSettings>
            <select placeholder="Categoria">
              <option>Categoria </option>
              <option>Politica</option>
              <option>Entretenimento </option>
            </select>
            <select>
              <option>Dificuldade</option>
            </select>
            <select>
              <option>Tipo</option>
            </select>
            <ButtonSettings
              type="button"
              onClick={ () => history.push('/game') }
            >
              Jogar
            </ButtonSettings>
          </DivSettings>
        </ContainerItem>
      </ContainerSettings>
    );
  }
}

Settings.propTypes = {}.isRequired;
