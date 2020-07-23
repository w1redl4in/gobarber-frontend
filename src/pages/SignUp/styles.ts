import styled from 'styled-components';
import { shade } from 'polished';
import SignUpBackground from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;

    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }

  > a {
    display: flex;
    align-items: center;

    text-decoration: none;
    color: #f4ede8;
    display: block;
    margin-top: 24px;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SignUpBackground}) no-repeat;
  background-size: cover;
`;
