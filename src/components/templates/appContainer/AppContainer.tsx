import React from 'react';
import GlobalStyles from '../../atoms/globalStyle/GlobalStyle'

interface Props {
  children: React.ReactElement[] | React.ReactElement
}

const AppContainer: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}

export default AppContainer