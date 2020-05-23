import React from 'react';
import { useQuery } from '@apollo/react-hooks'
import { GET_CHARACTERS } from './queries'
import CharacterItem from '../../molecules/characterItem/CharacterItem'
import { Character, GetCharactersData, GetCharactersVariables } from '../../../helper/interfaces/Character'
import styled from "styled-components";

interface props {
  searchQuery: string;
  excludedCharacters: Array<string>,
  addExcludedCharacter(id: string): void,
  chooseCharacter(image: string, name: string): void,

  className?: string;
}

const PictureList: React.FC<props> = ({
  searchQuery = '',
  excludedCharacters,
  addExcludedCharacter,
  chooseCharacter,

  className,
}) => {
  const { loading, data, error } = useQuery<GetCharactersData, GetCharactersVariables>(GET_CHARACTERS, {
    variables: {
      name: searchQuery,
    },
  })

  if (loading) {
    return (
      <p>
        loading...
      </p>
    )
  }

  if (error || !data || !data.characters || !data.characters.results) {
    return (
      <p>
        Characters were not found
      </p>
    )
  }

  const charactersFiltered = data.characters.results.filter( (characterItem: Character): boolean => {
    const { id } = characterItem
    return !excludedCharacters.includes(id)
  })

  return (
    <div className={className}>
      {charactersFiltered.map( (props: Character): React.ReactElement => {
        const {image, id, name} = props
        return (
          <CharacterItem
            key={id}
            {...{
              id,
              image,
              name,
              onClick: chooseCharacter,
              onCloseClick: addExcludedCharacter,
            }}
          />
        )
      })}
    </div>
  );
}

const StyledPictureList = styled(PictureList)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-right: -30px;  
`

export default StyledPictureList