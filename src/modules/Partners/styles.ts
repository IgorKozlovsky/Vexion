import styled from '@emotion/styled'

import Flex from 'src/ui/Flex'

export const PartnersWrapper = styled(Flex)`
  margin-top: ${({ theme }) => theme.spaces.md};
  gap: 3vw;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`
