import { gql } from 'apollo-boost'

export const GET_EXCLUDED_CHARACTERS_IDS = gql`
  query GetExcludedCharactersIds {
    excludedCharactersIds @client
  }
`

export const GET_PARTY_CHARACTERS = gql`
  query GetPartyCharacters {
    mortyImage @client
    rickImage @client
  }
`

export const GET_CHARACTERS = gql`
  query GetCharacters($name: String) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
      }
    }
  }
`