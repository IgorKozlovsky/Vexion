import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { CSSProperties, ReactNode } from 'react'

import { pathToBlur } from 'src/constants'

type ButtonPropsTypes = {
  style?: CSSProperties
  children: ReactNode
  variant?: 'dark' | 'light'
}

const StyledBase = styled('button')`
  ${({ theme }) => css`
    border: none;
    outline: none;
    font-size: ${theme.fontSizes.smaller};
    border-radius: ${theme.borderRadius.button};
    padding: ${theme.spaces.sm} ${theme.spaces.xm};
    cursor: pointer;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: -0.02em;
  `}
`

const LightButton = styled(StyledBase)`
  ${({ theme }) => css`
    background-color: ${theme.colors.light};
    color: ${theme.colors.black};
    box-shadow: ${theme.shadows.buttonWhite};
    background: url(${pathToBlur}), #ffffff;
    background-repeat: no-repeat;
    background-position: 30% 50%;
  `}
`

const DarkButton = styled(StyledBase)`
  ${({ theme }) => css`
    color: ${theme.colors.light};
    box-shadow: ${theme.shadows.buttonBlack};
    background: linear-gradient(0deg, #000000, #000000),
      linear-gradient(
        180deg,
        rgba(230, 221, 254, 0.15) -4.86%,
        rgba(230, 221, 254, 0) 100%
      ),
      linear-gradient(
        360deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.05) 100%
      );
    border: 2px solid #e6ddfe23;
  `}
`

const Button = ({
  children,
  variant = 'light',
  ...props
}: ButtonPropsTypes): JSX.Element => {
  const variants = {
    light: LightButton,
    dark: DarkButton,
  }

  const VariantButton = variants[variant]

  return <VariantButton {...props}>{children}</VariantButton>
}

export default Button
