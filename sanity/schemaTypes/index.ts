import { type SchemaTypeDefinition } from 'sanity'
import { authorType } from './authorType'
import { technologiesType } from './technologiesType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authorType, technologiesType],
}
