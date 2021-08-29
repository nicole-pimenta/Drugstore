import styled, { keyframes } from "styled-components";
import SignUpImage from "../../assets/signup.svg";

const apppearFromRight = keyframes`
from {
  opacity : 0 ;
  transform: translateX(50px)
} 

to{
  opacity: 1;
  transform: translateX(0px)
}
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: stretch;
  padding: 20px;
`;

export const Background = styled.div`
  @media (min-width: 1100px) {
    width: 50vw;
    margin: 0 auto;
    background-size: contain;
  }

  section {
    height: 90vh;
    width: 100%;
    background: url(${SignUpImage}) no-repeat;
  }
`;

export const Content = styled.div`
  @media (min-width: 1100px) {
    background-color: var(--bkgdColor);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 720px;

    .MuiSvgIcon-root {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 1100px) {
    background-color: var(--bkgdColor);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${apppearFromRight} 2s;
  h1 {
    margin-bottom: 25px;
    color: #5965e0;
    font-size: 50px;
    text-align: center;
  }

  h3 {
    color: var(--darkBlue);
    font-size: 24px;
    text-align: center;
  }

  form {
    margin: 20px 0;
    max-width: 360px;
    text-align: center;

    .MuiInputBase-input {
      color: var(--darkBlue);
      background-color: transparent;
      animation-duration: 14ms;
    }

    h1 {
      margin-bottom: 20px;
      color: #5965e0;
      font-size: 40px;
    }

    h3 {
      color: var(--darkBlue);
      font-size: 20px;
      margin-bottom: 30px;
      text-align: center;
    }

    p {
      margin: 25px auto;
      color: #2e384d;
      font-size: 20px;
    }

    a {
      font-weight: bolder;
      color: var(--violetCore);
      font-size: 25px;
    }

    .error {
      text-align: left;
      color: #c1292e;
      padding-left: 45px;
      font-size: 12px;
      margin-top: 5px;
    }
  }

  @media (max-width: 1100px) {
    form {
      text-align: center;
      height: 100%;
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #5965e0;
  color: white;
  border: none;
  border-radius: 15px;
  box-sizing: border-box;
  margin: 2em;

  padding: 5px;
  width: 220px;
  height: 40px;

  button:hover {
    transition: all 250ms linear;
    opacity: 0.6;
  }

  button:active {
    transition: all 150ms linear;
    opacity: 0.75;
  }

  @media (max-width: 1100px) {
    margin-top: 20px;
    height: 34px;
    width: 210px;
  }
`;
