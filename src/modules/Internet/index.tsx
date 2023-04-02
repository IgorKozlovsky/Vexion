import { FontVariants } from 'src/enums'
import Flex from 'src/ui/Flex'
import Section from 'src/ui/Section'
import Text from 'src/ui/Text'
import {
  Elipse,
  GalleryImage,
  InternetWrapper,
  StyledText,
  StyledHeader,
  StyledImageTextInternet,
  StyledLines,
  TextWrapper,
  BoxText,
} from 'src/modules/Internet/style'
import { pathToAssets } from 'src/constants'

const Internet = () => {
  return (
    <Section>
      <InternetWrapper>
        <Flex
          style={{
            flexDirection: 'column',
            maxWidth: '530px',
          }}
        >
          <StyledImageTextInternet isUppercase fontSize="24px">
            Vexion app
          </StyledImageTextInternet>
          <StyledText variant={FontVariants.largest} isUppercase>
            Internet made effortless
          </StyledText>
          <StyledText variant={FontVariants.subTextSmaller}>
            Our app makes your internet control smarter than you think.
          </StyledText>
        </Flex>
        <Flex
          style={{
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '0 20px',
          }}
        >
          <GalleryImage
            src={`${pathToAssets}/gallery/phone2.png`}
            alt="phone"
          />
          <Flex
            style={{
              gap: '20px',
              marginTop: '80px',
            }}
          >
            <Elipse />
            <Elipse active />
            <Elipse />
          </Flex>
        </Flex>
        <TextWrapper>
          <BoxText>
            <StyledLines></StyledLines>
            <Flex
              style={{
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <StyledHeader variant={FontVariants.large}>
                Check the latency
              </StyledHeader>
              <Text
                variant={FontVariants.smallest}
                style={{
                  lineHeight: '21px',
                }}
              >
                Test and graph your Internet latency across the world in
                seconds.
              </Text>
            </Flex>
          </BoxText>
          <BoxText>
            <StyledLines active></StyledLines>
            <Flex
              style={{
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <StyledHeader variant={FontVariants.large} active>
                Test the speed
              </StyledHeader>
              <Text
                variant={FontVariants.smallest}
                style={{
                  lineHeight: '21px',
                }}
              >
                Measure the speed and quality of your Internet connection using
                our app and the world&apos;s most reliable test.
              </Text>
            </Flex>
          </BoxText>
          <BoxText>
            <StyledLines></StyledLines>
            <Flex
              style={{
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <StyledHeader variant={FontVariants.large}>
                Control your transfer
              </StyledHeader>
              <Text
                variant={FontVariants.smallest}
                style={{
                  lineHeight: '21px',
                }}
              >
                Monitor how much transfer you have used and the download and
                upload speeds.
              </Text>
            </Flex>
          </BoxText>
        </TextWrapper>
      </InternetWrapper>
    </Section>
  )
}

export default Internet
