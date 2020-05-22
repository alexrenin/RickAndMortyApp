import React, {useMemo} from "react"
import styled from 'styled-components'
import { ReactComponent as CrossIcon } from './cross.svg'

interface props {
  onClick?(event: React.MouseEvent): void,
  className?: string;
}

const BtnClose: React.FunctionComponent<props> = ({
  onClick,
  className,
}) => {
  return useMemo(
    () => {
      return (
        <button
          className={className}
          onClick={onClick}
        >
          <CrossIcon />
        </button>
      )
    },
    [onClick]
  )
}

const StyledBtnClose = styled(BtnClose)`
  display: flex;
  justify-content: center;
  height: 30px;
  width: 30px;
  border: none;
  border-radius: 50%;  
  background: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: background-color ease-in 150ms;
  
  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`

export default StyledBtnClose