import React from 'react';

import {
  HeaderContainer,
  WalletConnectContainer,
} from './styles';
import TokenWalletConnect from './WalletConnect';

const TokenLandingHeader = () => {
  return ( 
    <>
      <HeaderContainer>
        <WalletConnectContainer>
          <TokenWalletConnect />
        </WalletConnectContainer>
      </HeaderContainer> 
    </>
  );
};

export default TokenLandingHeader;
