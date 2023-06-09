import styled from '@emotion/styled'

import { pathToBlur } from 'src/constants'
import Box from 'src/ui/Box'
import Image from 'src/ui/Image'
import Text from 'src/ui/Text'

export const ShadowText = styled(Text)`
  position: absolute;
  top: 0;
  filter: blur(50px);
  background-image: url(${pathToBlur});
  background-size: 200%;
  background-position: 50% 50%;
  background-clip: text;
  color: transparent;
  text-align: center;
`

export const StyledA = styled(Text)`
  ${({ theme }) => `
    position: absolute;
    display: none;
    @media (min-width: ${theme.breakpoints.md}) {
      top: 3px;
      left: -20px;
      display: block;
    }
    @media (min-width: ${theme.breakpoints.lg}) {
        top: 10px;
        left: -30px;
      }
    @media (min-width: ${theme.breakpoints.xl}) {
        left: -50px;
    }
  `}
`

export const StyledGradient = styled(Box)`
  ${({ theme }) => `
  position: absolute;
  width: calc(100vw);
  height: 800px;
  right: 0px;
  top: 700px;
  z-index: 1;
  background: #05050a;
  opacity: 0.7;
  display: none;
  @media (min-width: ${theme.breakpoints.lg}) {
    display: block;
  }`}
`

export const BackgroundLayer = styled(Image)`
  ${({ theme }) => `
  position: absolute;
  right: 0px;
  top: 700px;
  max-width: 100vw;
  width: 100%;
  height: 800px;
  z-index: 0;
  object-fit: cover;
  display: none;
  @media (min-width: ${theme.breakpoints.lg}) {
    display: block;
  }
`}
`
