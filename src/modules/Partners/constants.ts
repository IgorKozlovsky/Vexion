import { nanoid } from 'nanoid'

import { PartnerLogos } from 'src/enums'

export const patners = [
  { id: nanoid(), url: `partners/${PartnerLogos.ipsum1}` },
  { id: nanoid(), url: `partners/${PartnerLogos.ipsum2}` },
  { id: nanoid(), url: `partners/${PartnerLogos.ipsum3}` },
  { id: nanoid(), url: `partners/${PartnerLogos.ipsum4}` },
  { id: nanoid(), url: `partners/${PartnerLogos.ipsum5}` },
]
