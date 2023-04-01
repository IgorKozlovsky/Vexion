import Flex from 'src/ui/Flex'
import Section from 'src/ui/Section'
import Text from 'src/ui/Text'
import { patners } from 'src/modules/Partners/constants'
import Image from 'src/ui/Image'
import { pathToAssets } from 'src/constants'
import { PartnersWrapper } from 'src/modules/Partners/styles'

const Partners = () => {
  return (
    <Section>
      <Flex
        style={{
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text variant="subText">These companies work with us</Text>
        <PartnersWrapper>
          {patners.map(({ id, url }) => (
            <Image
              key={id}
              src={pathToAssets + url}
              alt="partner"
              style={{
                height: '34px',
              }}
            />
          ))}
        </PartnersWrapper>
      </Flex>
    </Section>
  )
}

export default Partners
