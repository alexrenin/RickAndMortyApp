import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks'
import GlobalStyles from '../../atoms/globalStyle/GlobalStyle'
import { client } from '../../../appolo/index'

interface Props {
  children: React.ReactElement[] | React.ReactElement
}

const AppContainer: React.FC<Props> = ({ children }): JSX.Element => {
  
  return (
    <>
      <GlobalStyles />
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </>
  )
}

export default AppContainer