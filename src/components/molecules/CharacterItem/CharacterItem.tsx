import React, {useMemo, useCallback} from "react";
import styled from 'styled-components'
import ImageCharacter from '../../atoms/imageCharacter/ImageCharacter'
import BtnClose from '../../atoms/btnClose/BtnClose'

interface props {
  image: string,
  id: string,
  name?: string,
  onClick?(image: string, name: string): void,
  onCloseClick?(id: string): void,
  className?: string;
}

const BtnCloseContainer = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
`

const CharacterItem: React.FunctionComponent<props> = ({
  image,
  id,
  name = '',
  onClick = f => f,
  onCloseClick = f => f,

  className,
}) => {
  const onCloseBtnClick = useCallback(
    (event: React.MouseEvent): void => {
      onCloseClick(id)
    },
    [onCloseClick, id]
  )
  const onChooseClick = useCallback(
    (event: React.MouseEvent): void => {
      onClick(image, name)
    },
    [onClick, image, name]
  )

  return useMemo(
    () => {
      return (
        <div className={className}>
          <ImageCharacter {...{
            imageUrl: image,
            name,
            onClick: onChooseClick,
          }} />
          <BtnCloseContainer>
            <BtnClose
              onClick={onCloseBtnClick}
            />
          </BtnCloseContainer>
        </div>
      )
    },
    [image, name, onChooseClick, onCloseBtnClick, className]
  )
}

const StyledCharacterItem = styled(CharacterItem)`
  position: relative;
  margin-top: 30px;
  margin-right: 30px;   
  cursor: pointer; 
`


export default StyledCharacterItem