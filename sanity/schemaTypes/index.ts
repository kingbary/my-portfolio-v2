import { type SchemaTypeDefinition } from 'sanity'
import { authorType } from './authorType'
import { technologiesType } from './technologiesType'
import { experienceType } from './experienceType'
import { socialLinkSchma } from './socialLinkTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authorType, technologiesType, experienceType, socialLinkSchma],
}
