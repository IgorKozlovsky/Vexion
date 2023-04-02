import styled from '@emotion/styled'

import Flex from 'src/ui/Flex'
import Grid from 'src/ui/Grid'
import Image from 'src/ui/Image'

export const StyledGrid = styled(Grid)`
  ${({ theme }) => `
  min-height: 700px;
  max-width: 1200px;
  gap: 16px;
  grid-template-areas:
    'A'
    'A'
    'B'
    'C'
    'D'
    'E';
  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-areas:
    'A A A A'
    'A A A A'
    'B B D D'
    'C C E E';
  }
  @media (min-width: ${theme.breakpoints.xl}) {
    grid-template-areas:
    'A B D'
    'A C D'
    'A C D'
    'A C E';
  }
  `}
`

// @media (min-width: ${theme.breakpoints.xl}) {
//   top: 0px;
//   left: 0px;
// }
export const FlexBoxes = styled(Flex)`
  position: relative;
  box-sizing: border-box;
  max-height: 700px;
  height: 100%;
  gap: 25px;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid;
  background: linear-gradient(
    360deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  border-image-source: linear-gradient(
    180deg,
    rgba(230, 221, 254, 0.25) -4.86%,
    rgba(230, 221, 254, 0) 100%
  );
  box-shadow: 0px 10px 25px 0px #e6ddfe1a inset;
  border-radius: ${({ theme }) => theme.borderRadius.box};
  padding: 25px;
`

export const FlexTextBoxes = styled(Flex)`
  flex-direction: column;
  gap: 16px;
  background: transparent;
`

export const StyledImages = styled(Image)`
  width: 225px;
`

export const Elipses = styled(Image)`
  position: absolute;
  mix-blend-mode: overlay;
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    display: block;
    top: 0%;
    left: 40%;
    margin-right: -40%;
    transform: translate(-40%, -0%);
  }
`

export const Logo = styled(Image)`
  position: absolute;
  top: 25%;
  left: 50%;
  margin-right: -25%;
  transform: translate(-50%, -25%);
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    top: 35%;
    left: 60%;
    margin-right: -60%;
    transform: translate(-60%, -35%);
  }
`
