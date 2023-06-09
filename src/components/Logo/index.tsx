import Flex from 'src/ui/Flex'
import Image from 'src/ui/Image'
import { pathToLogo } from 'src/constants'
import Text from 'src/ui/Text'
import { FontVariants } from 'src/enums'

const Logo = (): JSX.Element => (
  <Flex
    alignItems="center"
    style={{
      cursor: 'pointer',
    }}
  >
    <Image alt="logo" src={pathToLogo} width="73px" />
    <Text variant={FontVariants.logo}>Vexion</Text>
  </Flex>
)

export default Logo
