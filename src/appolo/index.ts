import ApolloClient, { InMemoryCache, NormalizedCacheObject } from 'apollo-boost'
import { gql } from 'apollo-boost'

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
})