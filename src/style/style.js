import styled from 'styled-components';
import imglogo from '../images/logoTrivia.png';
import logoTrybe from '../images/iconeTrybe.png';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;   
`;

export const ImgLogin = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 10px;
  background-image: url(${imglogo});
  background-repeat: no-repeat;
  object-fit: cover;
  width: 260px;
  height: 265px;
`;

export const Divlogin = styled.div`
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: rgb(255 255 255);
    max-width: 615px;
    min-width: 100%;
    height: 266px;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 1px 4px 13px 2px rgba(0 0 0 20%);
  };
  
  label input {
    margin: auto;
    display: flex;    
    justify-content: center;
    padding: 12px, 16px, 12px, 16px;
    width: 520px;
    height: 45px;
    gap: 15px;
    border: 1px solid rgb(225 229 235)
  }

  button {
    width: 520px;
    height: 45px;
    margin-top: 20px;
    border-radius: 4px;
    background-color: rgb(47 193 140);
    font-size: 16px;
    color: rgb(255 255 255);
    border: 1px solid rgb(47 193 140);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 25%);
    font-family: Epilogue;
    font-weight: 700;
    line-height: 24px;
  }
`;

export const FooterImg = styled.div`
  background-image: url(${logoTrybe});
  width: 45px;
  height: 51px;
  margin-top: 40px;
  margin-bottom: 15px;
`;

export const DivHeader = styled.header`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(255 255 255);
    width: 100vw;
    height: 113px;
  }

  div img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  div div {
    width: 50%;
  }

  div div button {
    margin-right: 40px;
  }

`;

export const DivImgTrivia = styled.div`
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div img {
    margin-top: 26px;
    margin-left: 215px;
    width: 260px;
    height: 260px;
  }    
`;

export const DivImgName = styled.div`
  max-width: 150px;
`;

export const DivCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 413px;
  height: 45px;
  box-shadow: 0px 4px 4px 0px rgba(0 0 0 25%);
  border-radius: 100px;
  background-color: rgb(249 186 24);
  font-family: Epilogue;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.12em;
  text-align: center;
`;

export const DivQuestion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 439px;
  height: 286px;
  border-radius: 10px;
  box-shadow: 1px 4px 13px 2px rgba(0 0 0 20%);
  background-color: rgb(255 255 255);
  margin-top: 180px;
`;

export const ConatinerQuestion = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
  margin-left: -100px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
`;

export const DivFooter = styled.div`
  background: rgba(60, 27, 122, 1);
  width: 100vw;
  height: 166px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 175px;
`;

export const Ptext = styled.p`
  font-family: Epilogue;
  margin-top: 50px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
`;

export const Timer = styled.p`
  margin-top: 100px;
  color: rgb(234 93 93);
  font-family: Verdana;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.12em;
  text-align: center;

`;

export const ButtonQuestion = styled.button`
  width: 519px;
  height: 64px;
  margin-top: 10px;
  background-color: rgb(255 255 255);
  border-radius: 100px;
  `;

export const ButtonGame = styled.button`  
  width: 520px;
  height: 45px;
  margin-top: 20px;
  border-radius: 4px;
  background-color: rgb(47 193 140);
  font-size: 16px;
  color: rgb(255 255 255);
  border: 1px solid rgb(47 193 140);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 25%);
  font-family: Epilogue;
  font-weight: 700;
  line-height: 24px;  
`;

export const ContainerFeedback = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

export const DivImgFeed = styled.div`
  img {
    height: 137px;
    width: 137px;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

export const DivImgGravatar = styled.div`
  img {
    height: 213px;
    width: 213px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const DivMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(255 255 255);
  height: 278px;
  width: 439px;
  border-radius: 10px;
`;
