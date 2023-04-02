/* eslint-disable @emotion/jsx-import */
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { CSSProperties, ElementType, ReactNode } from 'react'

import { FontVariants } from 'src/enums'

type StyledPropsTypes = {
  color?: string
  fontSize?: string
}

const StyledBase = styled('p')<StyledPropsTypes>(
  ({ theme, color, fontSize }) => `
      color: ${color || theme.colors.light};
      font-size: ${fontSize || theme.fontSizes.medium};
      margin: 0px;
      padding: 0px;
  `,
)

const SubText = styled(StyledBase)(
  ({ theme }) => `
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.subText};
`,
)

const SubTextSmaller = styled(SubText)(
  ({ theme }) => `
      font-size: ${theme.fontSizes.smaller};
  `,
)

const BannersSmallText = styled(StyledBase)(
  ({ theme }) => `
      font-size: ${theme.fontSizes.large};
      @media (min-width: ${theme.breakpoints.lg}) {
        font-size: ${theme.fontSizes.larger};
      }
      @media (min-width: ${theme.breakpoints.xl}) {
        font-size: ${theme.fontSizes.largest};
      }
  `,
)

const BannersBigText = styled(StyledBase)(
  ({ theme }) => `
        font-size: ${theme.fontSizes.largest};
        position: relative;
        @media (min-width: ${theme.breakpoints.lg}) {
          font-size: ${theme.fontSizes.bannerSmall};
        }
        @media (min-width: ${theme.breakpoints.xl}) {
          font-size: ${theme.fontSizes.bannerLarge};
        }
    `,
)

const PlainText = styled(StyledBase)(
  ({ theme }) => `
      font-size: ${theme.fontSizes.smallest};
      color: ${theme.colors.subText};
  `,
)

const LogoText = styled(StyledBase)(
  ({ theme }) => `
        font-size: ${theme.fontSizes.larger};
        color: ${theme.colors.light};
        font-weight: 600;
    `,
)

const LargestText = styled(StyledBase)(
  ({ theme }) => `
      @media (min-width: ${theme.breakpoints.lg}) {
        font-size: ${theme.fontSizes.bannerSmall};
      }
        font-size: ${theme.fontSizes.largest};
        color: ${theme.colors.light};
    `,
)

const LargeText = styled(StyledBase)(
  ({ theme }) => `
        font-size: ${theme.fontSizes.large};
        color: ${theme.colors.light};
    `,
)

const SmallestText = styled(StyledBase)(
  ({ theme }) => `
        font-size: ${theme.fontSizes.smallest};
        color: ${theme.colors.subText};
    `,
)

const MediumText = styled(StyledBase)(
  ({ theme }) => `
        font-size: ${theme.fontSizes.medium};
    `,
)

type TextTypes = StyledPropsTypes & {
  children: ReactNode
  variant?: FontVariants
  isLarge?: boolean
  isUppercase?: boolean
  as?: ElementType<any> | undefined
  style?: CSSProperties
}

const Text = ({
  children,
  variant = FontVariants.base,
  isLarge = false,
  isUppercase = false,
  as = 'p',
  ...props
}: TextTypes) => {
  const variants = {
    text: PlainText,
    subText: SubText,
    subTextSmaller: SubTextSmaller,
    banner: isLarge ? BannersBigText : BannersSmallText,
    base: StyledBase,
    logo: LogoText,
    largest: LargestText,
    large: LargeText,
    smallest: SmallestText,
    medium: MediumText,
  }

  const VariantText = variants[variant]

  return (
    <VariantText
      {...props}
      as={as}
      css={css`
        ${isUppercase ? { textTransform: 'uppercase' } : ''}
      `}
    >
      {children}
    </VariantText>
  )
}
export default Text
