import styled from '@emotion/styled'
import { ReactNode } from 'react'

type StyledPropsTypes = {
  color?: string
  fontSize?: string
}

const StyledBase = styled('p')<StyledPropsTypes>(
  ({ theme, color, fontSize }) => `
      color: ${color || theme.colors.light};
      font-size: ${fontSize || theme.fontSizes.medium};
  `,
)

const SubText = styled(StyledBase)(
  ({ theme }) => `
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.subText};
`,
)

const BannersSmallText = styled(StyledBase)(
  ({ theme }) => `
      font-size: ${theme.fontSizes.bannerSmall};
  `,
)

const BannersBigText = styled(StyledBase)(
  ({ theme }) => `
        font-size: ${theme.fontSizes.bannerLarge};
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

type TextTypes = StyledPropsTypes & {
  children: ReactNode
  variant?: 'subText' | 'banner' | 'text' | 'base' | 'logo'
  isLarge?: boolean
}

const Text = ({
  children,
  variant = 'base',
  isLarge = false,
  ...props
}: TextTypes) => {
  const variants = {
    text: PlainText,
    subText: SubText,
    banner: isLarge ? BannersBigText : BannersSmallText,
    base: StyledBase,
    logo: LogoText,
  }

  const VariantText = variants[variant]

  return <VariantText {...props}>{children}</VariantText>
}
export default Text
