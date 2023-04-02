import { pathToAssets } from 'src/constants'
import { FontVariants } from 'src/enums'
import Button from 'src/ui/Button'
import Flex from 'src/ui/Flex'
import Image from 'src/ui/Image'
import Section from 'src/ui/Section'
import Text from 'src/ui/Text'
import {
  BackgroundConnections,
  JoinBox,
  StyledText,
} from 'src/modules/Join/style'

const Join = (): JSX.Element => {
  return (
    <Section>
      <Flex
        style={{
          width: '100%',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <JoinBox>
          <StyledText isUppercase>Join to our community</StyledText>
          <Button variant="dark">Learn more</Button>
        </JoinBox>
        <BackgroundConnections
          src={`${pathToAssets}/Join/connections.png`}
          alt="connections"
        />
      </Flex>
    </Section>
  )
}

export default Join
