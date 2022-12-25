import React, { useMemo } from 'react';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from '@web3modal/ethereum';
import { useWeb3ModalTheme, Web3Modal } from '@web3modal/react';
import { goerli, polygonMumbai } from 'wagmi/chains';

import {
  Container,
} from './styles';
import TokenLandingHeader from './Header';

const TokenLandingContext = React.createContext();

export const useTokenLandingContext = () => {
  return React.useContext(TokenLandingContext);
};

const TokenLanding = () => {
  const wcProjectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;
  const [wagmiClient, ethereumClient] = useMemo(() => {
    let chains = [goerli, polygonMumbai];
    const { provider } = configureChains(chains, [
      walletConnectProvider({ projectId: wcProjectId }),
    ]);
    const wagmiClient = createClient({
      autoConnect: true,
      connectors: modalConnectors({ appName: 'demo', chains }),
      provider,
    });
  
    const ethereumClient = new EthereumClient(wagmiClient, chains);
    return [wagmiClient, ethereumClient];
  }, [wcProjectId]);

  const { setTheme } = useWeb3ModalTheme();
  setTheme({ themeMode: 'dark'});

  return (
    <TokenLandingContext.Provider
      value={{ demo: 'test' }}
    >
      <Container>
        <WagmiConfig client={wagmiClient}>
            <TokenLandingHeader />
        </WagmiConfig>
        <Web3Modal
          projectId={wcProjectId}
          ethereumClient={ethereumClient}
        />
      </Container>
    </TokenLandingContext.Provider>
  );
};

export default TokenLanding;
