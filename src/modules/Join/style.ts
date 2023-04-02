import styled from '@emotion/styled'

import { pathToAssets } from 'src/constants'
import Flex from 'src/ui/Flex'
import Image from 'src/ui/Image'
import Text from 'src/ui/Text'

export const JoinBox = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  padding: 48px;
  margin: 0 20px;
  gap: 20px;
  max-width: 1000px;
  width: 100%;
  max-height: 200px;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.box};
  background: url(${pathToAssets}/backgrounds/backgroundBlurLong.png);
  background-size: cover;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`

export const BackgroundConnections = styled(Image)`
  position: absolute;
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
    left: 62%;
    margin-right: -62%;
    transform: translate(-62%, 0);
  }
`

export const StyledText = styled(Text)`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 48px;
    text-align: left;
  }
  font-size: 32px;
  max-width: 448px;
  text-align: center;
`
