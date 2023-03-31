import styled from '@emotion/styled'
import Flex from 'src/ui/Flex'
import Text from 'src/ui/Text'

export const TextContainer = styled(Flex)`
  gap: 40px;
`
export const ButtonContainer = styled(Flex)`
  gap: 16px;
`

export const HeaderWrapper = styled(Flex)`
  padding: 15px 50px 0px 50px;
`
export const StyledLinks = styled(Text)`
  transition: 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.activeSubText};
  }
  cursor: pointer;
`
