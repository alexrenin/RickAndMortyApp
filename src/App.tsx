import React from 'react';
import Form from './components/molecules/form/Form'
import styled from 'styled-components'
import AppContainer from './components/templates/appContainer/AppContainer'

interface AppProps {

  className?: string;
}

const App: React.FunctionComponent<AppProps> = (props) => {
  function onSearch(value: string): void {

  }

  return (
    <AppContainer>
      <div className={props.className}>
        <Form {...{ onSearch }} />
      </div>
    </AppContainer>
  );
}

const StyledApp = styled(App)`
  margin: 141px 195px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default StyledApp;
