import React, {useMemo} from "react";
import styled from 'styled-components'
import Title from '../../atoms/title/Title'
import PartyItem from '../../molecules/partyItem/PartyItem'

export type selectedCharacterType = {
  imageUrl?: string,
  name: string,
}

interface props {
  selectedCharacters: Array<selectedCharacterType>,

  className?: string;
}

const CharactersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: -30px;
`

const Party: React.FunctionComponent<props> = ({
  selectedCharacters,

  className,
}) => {

  return useMemo(
    () => {
      return (
        <div className={className}>
          <Title>
            Party
          </Title>
          <CharactersContainer>
            {selectedCharacters.map( ({ name, imageUrl }: selectedCharacterType): React.ReactElement => {
              return (
                <PartyItem key={name} {...{
                  name,
                  imageUrl,
                }} />
              )
            })}
          </CharactersContainer>
        </div>
      )
    },
    [selectedCharacters, className]
  )
}

const StyledParty = styled(Party)`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  width: 100%;
`

export default StyledParty