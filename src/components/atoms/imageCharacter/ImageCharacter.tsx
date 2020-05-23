import React from "react";
import styled from 'styled-components'
import {useMemo} from "react";

interface props {
  imageUrl: string,
  name?: string,
  onClick?(event: React.MouseEvent): void,
}

const ImageStyled = styled.img`  
  width: 180px;
  height: 220px;
  background-color: #dadada;
`

const ImageCharacter: React.FunctionComponent<props> = ({
  imageUrl,
  name = '',
  onClick,
}) => {
  return useMemo(
    () => {
      return (
        <ImageStyled
          src={imageUrl}
          alt={name}
          onClick={onClick || (f => f)}
        />
      )
    },
    [imageUrl, name, onClick]
  )
}


export default ImageCharacter