import { type SchemaTypeDefinition } from 'sanity'
import { authorType } from './authorType'
import { technologiesType } from './technologiesType'
import { experienceType } from './experienceType'
import { socialLinkSchema } from './socialLinkTypes'
import { projectsSchema } from './projectsType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authorType, technologiesType, experienceType, socialLinkSchema, projectsSchema],
}
