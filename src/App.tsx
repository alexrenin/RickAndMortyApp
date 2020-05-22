import React, {useState, useCallback} from 'react';
import Form from './components/molecules/form/Form'
import styled from 'styled-components'
import AppContainer from './components/templates/appContainer/AppContainer'
import PictureList from  './components/organisms/pictureList/PictureList'

interface AppProps {

  className?: string;
}

const App: React.FunctionComponent<AppProps> = (props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [excludedCharacters, setExcludedCharacters] = useState<Array<string>>([])

  const addExcludedCharacter = useCallback(
    (id: string): void => {
      setExcludedCharacters([
        id,
        ...excludedCharacters
      ])
    },
    [excludedCharacters, setExcludedCharacters]
  )

  return (
    <AppContainer>
      <div className={props.className}>
        <Form {...{
          onSearch: setSearchQuery,
        }} />
        <PictureList {...{
          searchQuery,
          excludedCharacters,
          addExcludedCharacter,
        }} />
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
