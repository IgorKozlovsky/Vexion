import { pathToAssets } from 'src/constants'
import { FontVariants } from 'src/enums'
import { StyledImageText } from 'src/styles'
import Button from 'src/ui/Button'
import Flex from 'src/ui/Flex'
import Section from 'src/ui/Section'
import Text from 'src/ui/Text'
import {
  Elipses,
  FlexBoxes,
  FlexTextBoxes,
  Logo,
  StyledGrid,
  StyledImages,
} from 'src/modules/AboutApp/styles'
import Box from 'src/ui/Box'

const AboutApp = (): JSX.Element => {
  return (
    <Section id="features">
      <Flex
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          margin: '150px 0',
          padding: '0 20px',
          gap: '80px',
        }}
      >
        <Flex
          style={{
            textAlign: 'center',
            flexDirection: 'column',
          }}
        >
          <StyledImageText
            isUppercase
            fontSize="24px"
            style={{
              fontWeight: '600',
            }}
          >
            Vexion app
          </StyledImageText>
          <Text
            variant={FontVariants.largest}
            isUppercase
            style={{
              padding: '16px 0 24px 0',
            }}
          >
            Universal Application
          </Text>
          <Text variant={FontVariants.subTextSmaller}>
            Our app makes your internet control smarter than you think.
          </Text>
        </Flex>
        <StyledGrid>
          <FlexBoxes
            style={{ gridArea: 'A', alignItems: 'center', textAlign: 'center' }}
          >
            <Box
              style={{
                height: '350px',
              }}
            >
              <Elipses
                src={`${pathToAssets}/backgrounds/backgroundElipses.png`}
                alt="elispses"
              />
              <Logo src={`${pathToAssets}vectorLogo.png`} alt="logo" />
            </Box>
            <FlexTextBoxes>
              <Text fontSize="32px">Universal Application</Text>
              <Text variant={FontVariants.smallest}>
                Control your internet. Check the latency (ms). Keep an eye on
                the transfer. Test the speed.
              </Text>
            </FlexTextBoxes>
            <Button
              style={{
                width: '150px',
                marginBottom: '28px',
                marginTop: '28px',
              }}
            >
              Get the app
            </Button>
          </FlexBoxes>
          <FlexBoxes style={{ gridArea: 'B' }}>
            <StyledImages
              src={`${pathToAssets}/AboutApp/controlInternet.png`}
              alt="logo"
            />
            <FlexTextBoxes>
              <Text variant={FontVariants.large}>Control your internet</Text>
              <Text variant={FontVariants.smallest}>
                Control the connection status of all connected devices with the
                app.
              </Text>
            </FlexTextBoxes>
          </FlexBoxes>
          <FlexBoxes style={{ gridArea: 'C' }}>
            <StyledImages
              src={`${pathToAssets}/AboutApp/keepEye.png`}
              alt="logo"
            />
            <FlexTextBoxes>
              <Text variant={FontVariants.large}>
                Keep an eye on the transfer
              </Text>
              <Text variant={FontVariants.smallest}>
                Monitor how much transfer you have used and the download and
                upload speeds.
              </Text>
            </FlexTextBoxes>
          </FlexBoxes>
          <FlexBoxes style={{ gridArea: 'D' }}>
            <StyledImages
              src={`${pathToAssets}/AboutApp/checkLatency.png`}
              alt="logo"
            />
            <FlexTextBoxes>
              <Text variant={FontVariants.large}>Check the latency</Text>
              <Text variant={FontVariants.smallest}>
                Test and graph your Internet latency across the world in
                seconds.
              </Text>
            </FlexTextBoxes>
          </FlexBoxes>
          <FlexBoxes style={{ gridArea: 'E' }}>
            <StyledImages
              src={`${pathToAssets}/AboutApp/testSpeed.png`}
              alt="logo"
            />
            <FlexTextBoxes>
              <Text variant={FontVariants.large}>Test the speed</Text>
              <Text variant={FontVariants.smallest}>
                Measure the speed and quality of your Internet connection using
                our app.
              </Text>
            </FlexTextBoxes>
          </FlexBoxes>
        </StyledGrid>
      </Flex>
    </Section>
  )
}

export default AboutApp
