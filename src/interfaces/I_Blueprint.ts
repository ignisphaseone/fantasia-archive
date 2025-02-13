export interface I_ExtraFields {
  id: string
  name: string,
  icon?: string,
  sizing: number
  tooltip?: string
  type:
  "text" |
  "number" |
  "colorPicker" |
  "switch" |
  "list" |
  "wysiwyg" |
  "singleSelect" |
  "multiSelect" |
  "singleToNoneRelationship" |
  "manyToNoneRelationship" |
  "singleToSingleRelationship" |
  "singleToManyRelationship" |
  "manyToSingleRelationship" |
  "manyToManyRelationship" |
  "break" |
  "tags"

  predefinedListExtras?: {
    affix?: string
    extraSelectValueList?: string[]
  }
  predefinedSelectValues?: string[]
  relationshipSettings?: {
    connectedObjectType: string
    connectedField?: string
  }
}
export interface I_Blueprint{
  _id: string
  _rev?: string
  order: number | false,
  namePlural: string
  nameSingular: string,
  icon: string
  extraFields: I_ExtraFields[]
}
