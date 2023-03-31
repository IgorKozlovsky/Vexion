import Logo from 'src/components/Logo'
import {
  StyledLinks,
  ButtonContainer,
  HeaderWrapper,
  TextContainer,
} from 'src/modules/Header/styles'
import Button from 'src/ui/Button'

const Header = (): JSX.Element => {
  return (
    <HeaderWrapper flexDirection="row" justifyContent="space-between">
      <Logo />
      <TextContainer
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <StyledLinks variant="subText">Pricing</StyledLinks>
        <StyledLinks variant="subText">Features</StyledLinks>
        <StyledLinks variant="subText">Integrations</StyledLinks>
        <StyledLinks variant="subText">Company</StyledLinks>
      </TextContainer>
      <ButtonContainer
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Button variant="dark">Sign in</Button>
        <Button>Sing up</Button>
      </ButtonContainer>
    </HeaderWrapper>
  )
}

export default Header
