import { pathToLogo } from 'src/constants'
import { FooterWrapper } from 'src/modules/Footer/styles'
import Box from 'src/ui/Box'
import Button from 'src/ui/Button'
import Flex from 'src/ui/Flex'
import HR from 'src/ui/HR'
import Image from 'src/ui/Image'
import Text from 'src/ui/Text'

const Footer = (): JSX.Element => {
  return (
    <FooterWrapper
      flexDirection="column"
      style={{ gap: '40px', marginBottom: '50px' }}
    >
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          style={{
            width: '42%',
          }}
        >
          <HR />
        </Box>
        <Image alt="logo" src={pathToLogo} width="125px" />
        <Box
          style={{
            width: '42%',
          }}
        >
          <HR />
        </Box>
      </Flex>
      <Flex
        justifyContent="space-between"
        style={{ width: '1500px', margin: '0 auto' }}
      >
        <Flex
          justifyContent="space-between"
          style={{
            width: '32%',
          }}
        >
          <Text variant="subTextSmaller">Terms of Use</Text>
          <Text variant="subTextSmaller">Privacy Policy</Text>
          <Text variant="subTextSmaller">Contact</Text>
          <Text variant="subTextSmaller">Blog</Text>
        </Flex>
        <Button>Get the app</Button>
        <Flex
          justifyContent="space-between"
          style={{
            width: '32%',
          }}
        >
          <Text variant="subTextSmaller">Pricign</Text>
          <Text variant="subTextSmaller">Features</Text>
          <Text variant="subTextSmaller">Integrations</Text>
          <Text variant="subTextSmaller">Company</Text>
        </Flex>
      </Flex>
      <Flex
        justifyContent="center"
        style={{
          width: '100%',
        }}
      >
        <Text variant="subTextSmaller">Copyright © 2023</Text>
      </Flex>
    </FooterWrapper>
  )
}

export default Footer
