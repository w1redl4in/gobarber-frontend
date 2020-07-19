import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  color: #666360;

  border-radius: 10px;
  border: 2px solid #232129;

  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    background: transparent;
    flex: 1;
    border: 0;

    color: white;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
