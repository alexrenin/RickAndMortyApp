import React, {useState} from 'react';
import Form from './components/molecules/form/Form'
import styled from 'styled-components'
import AppContainer from './components/templates/appContainer/AppContainer'
import PictureList from  './components/molecules/pictureList/PictureList'

interface AppProps {

  className?: string;
}

const App: React.FunctionComponent<AppProps> = (props) => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <AppContainer>
      <div className={props.className}>
        <Form {...{
          onSearch: setSearchQuery,
        }} />
        <PictureList {...{ searchQuery }} />
      </div>
    </AppContainer>
  );
}

const StyledApp = styled(App)`
  margin: 141px 195px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export default StyledApp;
