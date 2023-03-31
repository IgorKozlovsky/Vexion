import Box from 'src/ui/Box'
import { BurgerButtonStyles } from 'src/components/BurgerButton/styles'

type BurgerButtonProps = {
  onClick: () => void
  open: boolean
}

const BurgerButton = ({ onClick, open }: BurgerButtonProps) => {
  return (
    <BurgerButtonStyles onClick={onClick} open={open}>
      <Box as="span" style={{ backgroundColor: 'white' }} />
      <Box as="span" style={{ backgroundColor: 'white' }} />
      <Box as="span" style={{ backgroundColor: 'white' }} />
    </BurgerButtonStyles>
  )
}

export default BurgerButton
