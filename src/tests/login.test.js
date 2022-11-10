import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';
import { hydrate } from 'react-dom';

describe('Testa a pagina Login.', () => {
  test('Verifica o pathname', () => {
    const { history } = renderWithRouterAndRedux(<App  />);

    expect(history.location.pathname).toBe('/');
  })

  test('Verifica se existe os inputs para login.', () => {
    renderWithRouterAndRedux(<App />);

    const inputName = screen.getByTestId('input-player-name')
    const inputEmail = screen.getByTestId('input-gravatar-email')

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
  })

  test('Verifica se existe o botão Play.', () => {
    renderWithRouterAndRedux(<App />);

    const buttonPlay = screen.getByTestId('btn-play');

    expect(buttonPlay).toBeInTheDocument();
  })

  test('Verifica se o botão ativa somente com os dois inputs preenchidos.', () => {
    renderWithRouterAndRedux(<App />);

    const buttonPlay = screen.getByTestId('btn-play');
    expect(buttonPlay).toBeDisabled();

    const inputName = screen.getByTestId('input-player-name')
    userEvent.type(inputName, 'Chuck Norris')

    const inputEmail = screen.getByTestId('input-gravatar-email')
    userEvent.type(inputEmail, 'chucknorris@lenda.com')

    expect(buttonPlay).toBeEnabled();
  })

  test('Verifica se ao clicar no botão redireciona para a pagina Game.', async () => {
    const { history } = renderWithRouterAndRedux(<App />);

      const tokenResponse = {
      "response_code":0,
      "response_message":"Token Generated Successfully!",
      "token":"f00cb469ce38726ee00a7c6836761b0a4fb808181a125dcde6d50a9f3c9127b6"
    };

    jest.spyOn(Storage.prototype, 'setItem');

    const inputName = screen.getByTestId('input-player-name');
    await userEvent.type(inputName, 'Chuck Norris');

    const inputEmail = screen.getByTestId('input-gravatar-email');
    await userEvent.type(inputEmail, 'chucknorris@lenda.com');

    const buttonPlay = screen.getByTestId('btn-play');
    await expect(buttonPlay).toBeEnabled();

    await userEvent.click(buttonPlay);
    await waitFor(() => expect(history.location.pathname).toBe('/game'));
  })

  test('Verifica se existe o botão configuração .', () => {
    renderWithRouterAndRedux(<App />);

    const buttonConfig = screen.getByTestId('btn-settings');
    expect(buttonConfig).toBeInTheDocument();
  })
  
  test('Verifica so ao clicar no botão a pagina e redirecionada.', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const buttonConfig = screen.getByTestId('btn-settings');
    userEvent.click(buttonConfig);

    expect(history.location.pathname).toBe('/settings') ;
  })

  test('Verifica se a pagina Settings.', () => {
    renderWithRouterAndRedux(<App />);

    const buttonConfig = screen.getByTestId('btn-settings');
    userEvent.click(buttonConfig);

    const titlelConfg = screen.getByTestId('settings-title');
    expect(titlelConfg).toBeInTheDocument();
  })
})