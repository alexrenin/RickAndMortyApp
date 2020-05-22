import React from "react";
import styled from 'styled-components'
import {useMemo} from "react";
import ImageCharacter from '../../atoms/imageCharacter/ImageCharacter'
import BtnClose from '../../atoms/btnClose/BtnClose'

interface props {
  image: string,
  name?: string,
  onClick?(event: React.MouseEvent): void,
  onCloseClick?(event: React.MouseEvent): void,
  className?: string;
}

const BtnCloseContainer = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
`

const CharacterItem: React.FunctionComponent<props> = ({
  image,
  name = '',
  onClick,
  onCloseClick,
  className,
}) => {
  return useMemo(
    () => {
      return (
        <div className={className}>
          <ImageCharacter {...{
            imageUrl: image,
            name,
            onClick,
          }} />
          <BtnCloseContainer>
            <BtnClose
              onClick={onCloseClick}
            />
          </BtnCloseContainer>
        </div>
      )
    },
    [image, name, onClick]
  )
}

const StyledCharacterItem = styled(CharacterItem)`
  position: relative;
  margin-top: 30px;
  margin-right: 30px;  
`


export default StyledCharacterItem