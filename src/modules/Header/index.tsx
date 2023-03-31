import BurgerButton from 'src/components/BurgerButton'
import Logo from 'src/components/Logo'
import {
  StyledLinks,
  ButtonContainer,
  HeaderWrapper,
  TextContainer,
} from 'src/modules/Header/styles'
import Button from 'src/ui/Button'
import useHeader from 'src/modules/Header/useHeader'
import { links } from 'src/modules/Header/constants'

const Header = (): JSX.Element => {
  const { openNavigation, handleMenu } = useHeader()

  return (
    <HeaderWrapper
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Logo />
      <TextContainer open={openNavigation} as="nav">
        {links.map(({ id, url, text }) => (
          <StyledLinks key={id} variant="subText">
            {text}
          </StyledLinks>
        ))}
      </TextContainer>
      <ButtonContainer
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Button variant="dark">Sign in</Button>
        <Button>Sing up</Button>
      </ButtonContainer>
      <BurgerButton open={openNavigation} onClick={() => handleMenu(true)} />
    </HeaderWrapper>
  )
}

export default Header
