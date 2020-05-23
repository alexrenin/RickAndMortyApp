import React, {useMemo} from "react";
import styled from 'styled-components'
import ImageCharacter from '../../atoms/imageCharacter/ImageCharacter'

interface props {
  name: string,
  imageUrl?: string,

  className?: string;
}

const StyledName = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF; 
  height: 41px;
  margin-bottom: 14px;
`

const PartyItem: React.FunctionComponent<props> = ({
  imageUrl,
  name,

  className,
}) => {

  return useMemo(
    () => {
      return (
        <div className={className}>
          {imageUrl && (
            <ImageCharacter {...{
              imageUrl,
              name,
            }} />
          )}
          {!imageUrl && (
            <StyledName>
              {name}
            </StyledName>
          )}
        </div>
      )
    },
    [imageUrl, name, className]
  )
}

const StyledPartyItem = styled(PartyItem)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-shrink: 0;
  width: 180px;
  height: 220px;
  position: relative;  
  margin-top: 20px;
  margin-right: 30px; 
  background: ${props => props.imageUrl ? "white" : "#DADADA"};   
`


export default StyledPartyItem