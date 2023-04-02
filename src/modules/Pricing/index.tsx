import { FontVariants } from 'src/enums'
import { StyledImageText } from 'src/styles'
import Button from 'src/ui/Button'
import Flex from 'src/ui/Flex'
import HR from 'src/ui/HR'
import Section from 'src/ui/Section'
import Text from 'src/ui/Text'
import { Li, Ul, PricingBoxes, PricingWrapper } from 'src/modules/Pricing/style'
import Box from 'src/ui/Box'

const Pricing = (): JSX.Element => {
  return (
    <Section id="pricing">
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
            Pricing
          </Text>
          <Text variant={FontVariants.subTextSmaller}>
            Upgrade to enable new features.
          </Text>
        </Flex>
        <PricingWrapper
          style={{
            maxWidth: '700px',
            width: '100%',
            gap: '32px',
          }}
        >
          <PricingBoxes>
            <Box
              style={{
                backgroundColor: 'transparent',
                gap: '5px',
              }}
            >
              <Text variant={FontVariants.medium} isUppercase>
                Smart
              </Text>
              <Text variant={FontVariants.subText}>Simple plan</Text>
            </Box>
            <Text fontSize="48px">
              <Text as="span" fontSize="32px">
                $
              </Text>
              29.00
            </Text>
            <Button variant="dark">Check the offer</Button>
            <Text variant={FontVariants.smallest}>Renewal: $147.99 / year</Text>
            <HR />
            <Ul>
              <Li active>10 devices</Li>
              <Li>Test speed</Li>
              <Li>Statistics</Li>
            </Ul>
          </PricingBoxes>
          <PricingBoxes>
            <Box
              style={{
                backgroundColor: 'transparent',
                gap: '5px',
              }}
            >
              <Text variant={FontVariants.medium} isUppercase>
                Komfort
              </Text>
              <Text variant={FontVariants.subText}>Expanded plan</Text>
            </Box>
            <Text fontSize="48px">
              <Text as="span" fontSize="32px">
                $
              </Text>
              59.00
            </Text>
            <Button>Check the offer</Button>
            <Text variant={FontVariants.smallest}>Renewal: $307.99 / year</Text>
            <HR />
            <Ul>
              <Li active>Unlimited devices</Li>
              <Li active>Test speed</Li>
              <Li>Statistics</Li>
            </Ul>
          </PricingBoxes>
          <PricingBoxes>
            <Box
              style={{
                backgroundColor: 'transparent',
                gap: '5px',
              }}
            >
              <Text variant={FontVariants.medium} isUppercase>
                Pro
              </Text>
              <Text variant={FontVariants.subText}>Enterprise plan</Text>
            </Box>
            <Text fontSize="48px">
              <Text as="span" fontSize="32px">
                $
              </Text>
              69.00
            </Text>
            <Button variant="dark">Check the offer</Button>
            <Text variant={FontVariants.smallest}>Renewal: $738.00 / year</Text>
            <HR />
            <Ul>
              <Li active>Unlimited devices</Li>
              <Li active>Test speed</Li>
              <Li active>Statistics</Li>
            </Ul>
          </PricingBoxes>
        </PricingWrapper>
      </Flex>
    </Section>
  )
}

export default Pricing
