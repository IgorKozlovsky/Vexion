import styled from '@emotion/styled'

type ImageTypes = {
  alt: string
  src: string
  width?: string
  height?: string
}

const StyledImage = styled('img')``

const Image = ({
  width,
  height = width,
  ...props
}: ImageTypes): JSX.Element => {
  return <StyledImage width={width} height={height} {...props} />
}

export default Image
