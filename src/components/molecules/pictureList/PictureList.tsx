import React from 'react';
import { useQuery } from '@apollo/react-hooks'
import { GET_CHARACTERS } from './queries'
import CharacterItem from '../CharacterItem/CharacterItem'
import { Character, GetCharactersData, GetCharactersVariables } from '../../../helper/interfaces/Character'
import styled from "styled-components";

interface props {
  searchQuery: string;

  className?: string;
}

const PictureList: React.FC<props> = ({
  searchQuery = '',
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

  return (
    <div className={className}>
      {data.characters.results.map( (props: Character): React.ReactElement => {
        const {image, id, name} = props
        return (
          <CharacterItem
            key={id}
            {...{
              image,
              name,
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