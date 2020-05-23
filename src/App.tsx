import React, {useState, useCallback} from 'react';
import Form from './components/molecules/form/Form'
import styled from 'styled-components'
import PictureList from  './components/organisms/pictureList/PictureList'
import Party, {selectedCharacterType} from './components/organisms/party/Party'

interface AppProps {

  className?: string;
}

const App: React.FunctionComponent<AppProps> = (props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [excludedCharacters, setExcludedCharacters] = useState<Array<string>>([])
  const [selectedCharacters, setSelectedCharacters] = useState<Array<selectedCharacterType>>([
    {
      name: 'rick'
    },
    {
      name: 'morty'
    },
  ])

  const addExcludedCharacter = useCallback(
    (id: string): void => {
      setExcludedCharacters([
        id,
        ...excludedCharacters
      ])
    },
    [excludedCharacters, setExcludedCharacters]
  )

  const chooseCharacter = useCallback(
    (image: string, name: string): void => {
      const nameLowerCase = name.toLowerCase()
      const isMorty = nameLowerCase.indexOf('morty') > -1
      const isRick = nameLowerCase.indexOf('rick') > -1

      if (!(isMorty || isRick))
        return

      const newSelectedCharacters = selectedCharacters.map(
        (character: selectedCharacterType): selectedCharacterType => {
          if ((isMorty && character.name === 'morty') || (isRick && character.name === 'rick')) {
            return {
              ...character,
              imageUrl: image,
            }
          }

          return character
        }
      )
      setSelectedCharacters(newSelectedCharacters)
    },
    [selectedCharacters, setSelectedCharacters]
  )

  return (
      <div className={props.className}>
        <Form {...{
          onSearch: setSearchQuery,
        }} />
        <PictureList {...{
          searchQuery,
          excludedCharacters,
          addExcludedCharacter,
          chooseCharacter,
        }} />
        <Party {...{
          selectedCharacters,
        }}/>
      </div>
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
