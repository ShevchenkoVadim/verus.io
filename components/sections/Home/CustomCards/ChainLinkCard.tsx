import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { Img } from '@/components/elements'
import { bgColor } from '@/styles/helpers'
import Cards from '@/components/elements/Cards/Cards'

const StyledChainLinkCards = styled.div`
  ${bgColor('white')}
  border-radius: 20px;
  padding: 40px 50px 100px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 275px;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  background-image: url('/svg/chains.svg');
  background-repeat: no-repeat;
  background-position: 100% 100%;

  ${media.tablet`
    min-height: 480px;
  `}
`

const ChainLinkCard: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <StyledChainLinkCards>{children}</StyledChainLinkCards>
}

export default ChainLinkCard
