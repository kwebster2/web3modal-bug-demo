import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || '100%'};
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  right: ${({ $right }) => $right};
  bottom: ${({ $bottom }) => $bottom};
  z-index: -1;
`;

export const TopContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const StatsInfoContainer = styled.div`
  position: relative;
  width: 100vw;
`;

export const Container = styled.div``;

export const WalletConnectContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const BottomSectionsContaienr = styled.div`
  width: 100%;
  position: relative;
`;
