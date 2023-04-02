import styled from '@emotion/styled'

import { StyledImageText } from 'src/styles'
import { ActiveType } from 'src/types'
import Box from 'src/ui/Box'
import Flex from 'src/ui/Flex'
import Image from 'src/ui/Image'
import Text from 'src/ui/Text'

export const InternetWrapper = styled(Flex)`
  ${({ theme }) => `
    justify-content: space-between;
    align-items: center;       
    margin: 0 20px;
    gap: 40px;
    flex-direction: column;
    @media (min-width: ${theme.breakpoints.xxl}) {
        flex-direction: row;
        align-items: stretch;
    }
  `}
`

export const StyledImageTextInternet = styled(StyledImageText)`
  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    text-align: left;
  }
  text-align: center;
  fontweight: 600;
`

export const StyledText = styled(Text)`
  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    text-align: left;
  }
  text-align: center;
  padding: 16px 0 24px 0;
`

export const StyledHeader = styled(Text)<ActiveType>`
  ${({ theme, active }) => `
    @media (min-width: ${theme.breakpoints.sm}) {
        font-size: ${theme.fontSizes.medium};
    }
    font-size: inherit;
    color: ${active ? theme.colors.light : theme.colors.subText}
  `}
`

export const StyledLines = styled(Box)<ActiveType>`
  ${({ theme, active }) => `
    width: 100%;
    height: 6px;
    @media (min-width: ${theme.breakpoints.xxl}) {
        width: 12px;
        height: 100%;
    }
    ${active && 'box-shadow: 0px 0px 25px #A097B4'};
    ${active || 'opacity: 0.35'};
    background: ${active ? theme.colors.light : '#3b3b44'};
    border-radius: ${theme.borderRadius.button};
  `}
`

export const Elipse = styled(Box)<ActiveType>`
  ${({ theme, active }) => `
    width: 8px;
    height: 8px;
    ${
      active
        ? 'background: #EBDDF3;'
        : `background: linear-gradient(
        360deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.1) 100%
    );
    box-shadow: inset 0px 10px 25px rgba(230, 221, 254, 0.1);`
    } 
    border-radius: ${theme.borderRadius.button};
    cursor: pointer;
  `}
`

export const GalleryImage = styled(Image)`
  width: 100%;
  margin-top: 100px;
`

export const TextWrapper = styled(Flex)`
  ${({ theme }) => `
    flex-direction: row;
    width: 100%;
    justify-content: right;
    gap: 40px;
    margin-bottom: 20px;
    @media (min-width: ${theme.breakpoints.xxl}) {
        flex-direction: column;
        max-width: 250px;
    }
`}
`

export const BoxText = styled(Flex)`
  gap: 24px;
  width: 33%;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    width: 100%;
    flex-direction: row;
  }
`
