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

export const ImageText = styled(Text)`
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
  width: calc(100vw + 200px);
  height: 720px;
  right: -100px;
  top: 720px;
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
  right: -100px;
  top: 800px;
  width: calc(100vw + 700px);
  height: 800px;
  z-index: 0;
  display: none;
  @media (min-width: ${theme.breakpoints.lg}) {
    display: block;
  }
`}
`
