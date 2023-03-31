import { nanoid } from 'nanoid'

import { Link } from 'src/modules/Header/types'

export const links: Link[] = [
  {
    id: nanoid(),
    url: '',
    text: 'Pricing',
  },
  {
    id: nanoid(),
    url: '',
    text: 'Features',
  },
  {
    id: nanoid(),
    url: '',
    text: 'Integrations',
  },
  {
    id: nanoid(),
    url: '',
    text: 'Company',
  },
]
