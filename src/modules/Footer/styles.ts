import styled from '@emotion/styled'

import Box from 'src/ui/Box'
import Flex from 'src/ui/Flex'

export const FooterWrapper = styled(Flex)`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 1820px;
    margin-top: 50px;
  }
`

export const BoxLogo = styled(Flex)`
  padding: 0 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 50px;
  }
`

export const HRBox = styled(Box)`
  width: 42%;
`
export const FooterTextWrapper = styled(Flex)`
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  gap: 32px;
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    flex-direction: row;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 90%;
  }
`
export const FooterTextBox = styled(Flex)`
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 35%;
  }
`
