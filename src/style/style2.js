import styled from 'styled-components';

export const PMessage = styled.div`
  p{
    font-family: Epilogue;
    font-size: 30px;
    font-weight: 700;
    color: rgba(234 93 93);
  }
`;

export const PScore = styled.div`
  margin-top: 40px;
  height: 48px;
  width: 353px;
  color: rgb(181 181 181);
  font-family: Epilogue;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
`;

export const ButtonRanking = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 214px;
  font-family: Epilogue;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.12em;
  text-align: center;
  background-color: rgb(0 213 226);
  color: rgb(255 255 255);
  border: 1px solid rgb(0 213 226);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 25%);
;
`;

export const ButtonPlayGain = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 14px;
  height: 45px;
  width: 214px;
  font-family: Epilogue;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.12em;
  text-align: center;
  background-color: rgb(47 193 140);
  color: rgb(255 255 255);
  border: 1px solid rgb(47 193 140);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 25%);
`;

export const ContainerRanking = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 488px;
  max-height: auto;
  width: 489px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 1);
  margin-bottom : 40px;
`;

export const H1Ranking = styled.h1`
  margin-top: 100px;
  font-family: Epilogue;
  font-size: 30px;
  font-weight: 700;
  line-height: 45px;
  color: rgb(60 27 122);
`;

export const DivContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`;

export const DivCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: rgba(235, 235, 235, 1);
  margin-bottom: 10px;
  width: 332px;
  border-radius: 100px;
  margin-top: 10px; 
`;

export const DivImgP = styled.div`
  display: flex;
  height: 55px;
  width: 332px;
  border-radius: 100px;
`;

export const ImgRanking = styled.img`
  height: 37px;
  width: 37px;
  border-radius: 50%;
`;

export const PRanking = styled.p`
  font-family: Epilogue;
  margin-right: 15px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  background-color: rgba(235, 235, 235, 1);
`;

export const ButtonPlayGainRanking = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 45px;
  width: 386px;
  font-family: Epilogue;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.12em;
  text-align: center;
  background-color: rgb(47 193 140);
  color: rgb(255 255 255);
  border: 1px solid rgb(47 193 140);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 25%);
  border-radius: 5px;
  
`;

export const ImgRank = styled.img`
  z-index: 0;
  margin-top: 40px;
  width: 178px;
  height: 179px;
  margin-bottom: -100px;
`;

export const ContRank = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LinkImg = styled.img`
  width: 33px;
  height: 33px;
  margin-right: 100px;
`;

export const ImgSettings = styled.img`
  z-index: 0;
  width: 178px;
  height: 178px;
  margin-bottom: -100px;
  margin-top: 40px;
`;

export const ContainerSettings = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;

export const ContainerItem = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  background-color: rgb(255 255 255);
  height: 488px;
  width: 489px;
  border-radius: 10px;
  margin-bottom: 40px;
`;

export const H1Settings = styled.h1`
  color: rgb(60 27 122);
  margin-top: 130px;
  margin-bottom: 16px;
`;

export const DivSettings = styled.div`
  display: flex;
  flex-direction: column;
  select {
    width: 446px;
    height: 45px;
    margin-top: 15px;    
    font-family: Verdana;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px; 
    color: gray;
  }
`;

export const ButtonSettings = styled.button`
    width: 446px;
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
