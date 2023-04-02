import { css } from '@emotion/react'
import styled from '@emotion/styled'

import Box from 'src/ui/Box'

type BurgerButtonPropsType = {
  open: boolean
}

export const BurgerButtonStyles = styled(Box)<BurgerButtonPropsType>`
  ${({ theme, open }) => css`
    position: fixed;
    top: 50px;
    right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 40px;
    width: 40px;
    z-index: 1000;
    transform: translateY(-50%);
    cursor: pointer;
    background-color: transparent;

    @media (min-width: ${theme.breakpoints.sm}) {
      right: 50px;
    }

    @media (min-width: ${theme.breakpoints.lg}) {
      display: none;
    }

    span {
      display: block;
      width: 90%;
      height: 2px;
      transition: 0.2s;
    }

    span:nth-of-type(1) {
      transform: ${!open
        ? 'translateY(0px) rotate(0deg)'
        : 'translateY(13px) rotate(45deg)'};
    }
    span:nth-of-type(2) {
      opacity: ${!open ? '1' : '0'};
      transform: ${!open ? 'translateY(0px)' : 'translateY(50%px)'};
    }

    span:nth-of-type(3) {
      transform: ${!open
        ? 'translateY(0px) rotate(0deg)'
        : 'translateY(-13px) rotate(-45deg)'};
    }
  `}
`
