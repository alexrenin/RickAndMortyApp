export interface Character {
  __typename: 'Character'
  id: string
  name: string
  image: string
}

export interface GetCharactersResults {
  __typename: 'Characters'
  results: Character[] | null
}

export interface GetCharactersData {
  characters: GetCharactersResults | null
}

export interface GetCharactersVariables {
  name?: string | null
}
