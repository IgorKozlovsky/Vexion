import { css } from '@emotion/react'
import styled from '@emotion/styled'

import Flex from 'src/ui/Flex'
import Text from 'src/ui/Text'
import { LinkMenuType } from 'src/modules/Header/types'

export const ButtonContainer = styled(Flex)`
  gap: 16px;
`

export const HeaderWrapper = styled(Flex)`
  padding: 15px 20px 0px 20px;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 15px 50px 0px 50px;
    flex-direction: row;
  }
`
export const StyledLinks = styled(Text)`
  ${({ theme }) => css`
    transition: 0.2s;
    &:hover {
      color: ${theme.colors.activeSubText};
    }
    font-size: ${theme.fontSizes.medium};
    @media (min-width: ${theme.breakpoints.lg}) {
      font-size: ${theme.fontSizes.small};
    }
    cursor: pointer;
  `}
`

export const TextContainer = styled(Flex)<LinkMenuType>`
  ${({ open, theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: fixed;
    top: 0;
    right: 0;
    flex-direction: column;
    height: 100vh;
    width: ${open ? '100vw' : '0px'};
    background-color: ${theme.colors.background};
    overflow: hidden;
    transition: 0.2s;

    @media (min-width: ${theme.breakpoints.lg}) {
      position: static;
      flex-direction: row;
      height: 100%;
      width: fit-content;
      padding: 0;
      background-color: transparent;
      transition: none;
      gap: 40px;
    }
  `}
`
