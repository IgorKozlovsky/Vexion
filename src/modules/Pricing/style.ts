import styled from '@emotion/styled'

import Flex from 'src/ui/Flex'
import { ActiveType } from 'src/types'

export const PricingWrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`

export const PricingBoxes = styled(Flex)`
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  width: 220px;
  &:nth-child(2) {
    background: linear-gradient(
      360deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    box-shadow: 0px 10px 25px 0px #e6ddfe1a inset;
    border-radius: ${({ theme }) => theme.borderRadius.box};
  }
`

export const Ul = styled('ul')`
  margin: 0;
  padding-inline-start: 12px;
`
export const Li = styled('li')<ActiveType>`
  ${({ theme, active }) => `
  font-size: ${theme.fontSizes.smallest};
  color: ${active ? theme.colors.light : theme.colors.subText};
  padding-left: 10px;
  margin-bottom: 15px;
  &::marker {
    content: '✓';
  }
  `}
`
