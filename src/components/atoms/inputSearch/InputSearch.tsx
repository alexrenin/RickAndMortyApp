import React, { useMemo } from 'react';
import styled from 'styled-components'

interface props {
  onChange(event: React.ChangeEvent<HTMLInputElement>): void,
}

const InputStyled = styled('input')`
  margin-left: 27px;
  margin-right: 27px;
  margin-top: 22px;
  height: 33px;
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 30px;
  line-height: 35px;
  text-transform: uppercase;
  border: none;
`

const InputSearch: React.FunctionComponent<props> = ({ onChange }) => {
  return useMemo(
    () => {
      return (
        <InputStyled
          placeholder="Type something..."
          type="text"
          name="name"
          onChange={onChange}
          autoComplete="off"
          required
        />
      )
    },
    [onChange]
  )
}

export default InputSearch;

