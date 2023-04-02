import { nanoid } from 'nanoid'

import { Link } from 'src/modules/Header/types'

export const links: Link[] = [
  {
    id: nanoid(),
    href: '#features',
    text: 'Features',
  },
  {
    id: nanoid(),
    href: '#integrations',
    text: 'Integrations',
  },
  {
    id: nanoid(),
    href: '#pricing',
    text: 'Pricing',
  },
  {
    id: nanoid(),
    href: '#company',
    text: 'Company',
  },
]
