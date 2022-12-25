import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 110px;
  justify-content: center;
  display: flex;
  padding: 0 3rem;
  position: relative;
`;

export const WalletConnectContainer = styled.div`
  gap: 2rem;

  & p {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
  }

  & svg {
    font-size: 20px;
    cursor: pointer;
  }
`;