import { pathToLogo } from 'src/constants'
import { FontVariants } from 'src/enums'
import {
  FooterTextBox,
  FooterTextWrapper,
  FooterWrapper,
  HRBox,
  BoxLogo,
} from 'src/modules/Footer/styles'
import Button from 'src/ui/Button'
import Flex from 'src/ui/Flex'
import HR from 'src/ui/HR'
import Image from 'src/ui/Image'
import Text from 'src/ui/Text'

const Footer = (): JSX.Element => {
  return (
    <FooterWrapper flexDirection="column" id="company">
      <BoxLogo
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <HRBox>
          <HR />
        </HRBox>
        <Image alt="logo" src={pathToLogo} width="125px" />
        <HRBox>
          <HR />
        </HRBox>
      </BoxLogo>
      <FooterTextWrapper justifyContent="space-between">
        <FooterTextBox justifyContent="space-evenly">
          <Text variant={FontVariants.subTextSmaller}>Terms of Use</Text>
          <Text variant={FontVariants.subTextSmaller}>Privacy Policy</Text>
          <Text variant={FontVariants.subTextSmaller}>Contact</Text>
          <Text variant={FontVariants.subTextSmaller}>Blog</Text>
        </FooterTextBox>
        <Flex justifyContent="center">
          <Button>Get the app</Button>
        </Flex>
        <FooterTextBox justifyContent="space-evenly">
          <Text variant={FontVariants.subTextSmaller}>Pricign</Text>
          <Text variant={FontVariants.subTextSmaller}>Features</Text>
          <Text variant={FontVariants.subTextSmaller}>Integrations</Text>
          <Text variant={FontVariants.subTextSmaller}>Company</Text>
        </FooterTextBox>
      </FooterTextWrapper>
      <Flex
        justifyContent="center"
        style={{
          width: '100%',
        }}
      >
        <Text variant={FontVariants.subTextSmaller}>Copyright © 2023</Text>
      </Flex>
    </FooterWrapper>
  )
}

export default Footer
