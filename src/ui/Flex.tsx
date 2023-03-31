import styled from '@emotion/styled'
import Box from 'src/ui/Box'

type FlexTypes = {
  justifyContent?: string
  alignItems?: string
  flexDirection?: string
}

const Flex = styled(Box)<FlexTypes>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ flexDirection }) => flexDirection};
`

export default Flex
