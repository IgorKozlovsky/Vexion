import Flex from 'src/ui/Flex'
import Section from 'src/ui/Section'
import Text from 'src/ui/Text'
import {
  BackgroundLayer,
  ShadowText,
  StyledA,
  StyledGradient,
} from 'src/modules/Banner/styles'
import Button from 'src/ui/Button'
import Image from 'src/ui/Image'
import { StyledImageText } from 'src/styles'
import { FontVariants } from 'src/enums'

const Banner = (): JSX.Element => {
  return (
    <Section>
      <Flex
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          padding: '0 20px',
          margin: '120px auto',
        }}
      >
        <Text
          variant={FontVariants.banner}
          isLarge
          isUppercase
          style={{
            textAlign: 'center',
          }}
        >
          <StyledA variant={FontVariants.banner} as="span">
            A{' '}
          </StyledA>
          Universal Application
        </Text>
        <Text variant={FontVariants.banner} isUppercase>
          To Manage Your
        </Text>
        <StyledImageText variant={FontVariants.banner} isLarge isUppercase>
          Satellite Internet
          <ShadowText variant={FontVariants.banner} isLarge isUppercase>
            Satellite Internet
          </ShadowText>
        </StyledImageText>
        <Text
          variant={FontVariants.subText}
          style={{
            textAlign: 'center',
          }}
        >
          Control your internet. Check the latency (ms). Keep an eye on the
          transfer. Test the speed.
        </Text>
        <Flex
          style={{
            margin: '40px 0',
            gap: '20px',
          }}
        >
          <Button variant="dark">Learn more</Button>
          <Button>Get the app</Button>
        </Flex>
        <Flex>
          <Image
            src="src/assets/Phones.png"
            alt="phones"
            style={{ width: '100%', zIndex: '2' }}
          />
        </Flex>
        <StyledGradient />
        <BackgroundLayer
          src="src/assets/backgrounds/backgroundLayer.png"
          alt="backgroundLayer"
        />
      </Flex>
    </Section>
  )
}

export default Banner
