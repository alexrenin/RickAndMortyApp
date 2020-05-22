import ApolloClient, { InMemoryCache, NormalizedCacheObject } from 'apollo-boost'
import { gql } from 'apollo-boost'
import { GET_EXCLUDED_CHARACTERS_IDS, GET_PARTY_CHARACTERS } from './queries'

const typeDefs = gql`
  extend type Query {
    excludedCharactersIds: [String]!
    mortyImage: String!
    rickImage: String!
  }
`

const inMemoryCache = new InMemoryCache()

inMemoryCache.writeData({
  data: {
    excludedCharactersIds: [],
    mortyImage: null,
    rickImage: null,
  },
})

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: inMemoryCache,
  typeDefs,
  resolvers: {
    Mutation: {
      addExcludedCharacter: (_root, { id }, { cache }) => {
        const { excludedCharactersIds } = cache.readQuery({ query: GET_EXCLUDED_CHARACTERS_IDS })
        if (excludedCharactersIds.includes(id)) {
          return null
        }

        const data = {
          excludedCharactersIds: [...excludedCharactersIds, id],
        }
        cache.writeQuery({ query: GET_EXCLUDED_CHARACTERS_IDS, data })
        return null
      },
      addRickImage: (_root, { image }, { cache }) => {
        const data = { rickImage: image }
        cache.writeQuery({ query: GET_PARTY_CHARACTERS, data })
        return null
      },
      addMortyImage: (_root, { image }, { cache }) => {
        const data = { mortyImage: image }
        cache.writeQuery({ query: GET_PARTY_CHARACTERS, data })
        return null
      },
    },
  },
})