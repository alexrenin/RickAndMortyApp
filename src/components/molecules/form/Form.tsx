import React, {useCallback} from 'react';
import styled from 'styled-components'
import InputSearch from '../../atoms/inputSearch/InputSearch'
import { preventEvent } from "../../../helper/helper";
import _ from 'lodash';

interface FormProps {
  onSearch(value: string): void,

  className?: string;
}

const Form: React.FunctionComponent<FormProps> = (props) => {
  const { onSearch = () => {} } = props

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const { value = '' } = event.target

      if (value.length > 2) {
        _.throttle(
          () => {
            onSearch(value)
          },
          300
        )
      }
    },
    [onSearch]
  )

  return (
    <form
      onSubmit={preventEvent}
      className={props.className}
    >
      <InputSearch
        onChange={handleChange}
      />
    </form>
  )
}

const StyledForm = styled(Form)`
  display: flex;
  
  width: 100%;
  height: 80px;
  
  background: #FFFFFF;
  border: 1px solid #A0A0A0;
  box-sizing: border-box;
`

export default StyledForm;

