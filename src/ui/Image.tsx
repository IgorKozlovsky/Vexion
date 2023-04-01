import styled from '@emotion/styled'
import { CSSProperties } from 'react'

type ImageTypes = {
  alt: string
  src: string
  width?: string
  height?: string
  style?: CSSProperties
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
