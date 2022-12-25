
import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi';
import React from 'react';
import { useWeb3Modal } from '@web3modal/react';
import { useTranslation } from 'next-i18next';

import { ConnectedAddress } from './styles';
import { Button } from '@mui/material';


export const getTruncatedAddress = (address) => {
  const addressLength = address && address.length;
  return address && `${address.slice(0, 4)}...${address.slice(addressLength - 4, addressLength)}`;
}; 

const ConnectButton = () => {
  const { isConnected, address } = useAccount();
  const [t] = useTranslation();
  const { chain } = useNetwork();

  const { switchNetwork } = useSwitchNetwork({
    chainId: parseInt(process.env.NEXT_PUBLIC_POLYGON_NETWORK_ID),
  });
  const { open } = useWeb3Modal();
  const wrongNetwork = ![process.env.NEXT_PUBLIC_POLYGON_NETWORK_ID, process.env.NEXT_PUBLIC_ETH_NETWORK_ID].includes(chain?.id?.toString());

  const handleButtonClick = () => {
    if(wrongNetwork){
      switchNetwork();
    } else {
      open();
    }
  };

  return isConnected ? (
    <div onClick={handleButtonClick}>
      {wrongNetwork ? (
        <div style={{ background: 'red', width: '220px' }}>
          <p>{t('wrongNetwork')}</p>
        </div>
      ) : (
        <ConnectedAddress>
          {getTruncatedAddress(address)}
        </ConnectedAddress>
      )}
    </div>

  ) : (
    <Button onClick={open}>
      Connect Wallet
    </Button>
  );
};

const TokenWalletConnect = () => { 
  return (
    <div>
      <ConnectButton />
    </div>
  );
};

export default TokenWalletConnect;
