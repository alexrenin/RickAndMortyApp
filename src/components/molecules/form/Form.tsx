import React, {useMemo} from 'react';
import styled from 'styled-components'
import InputSearch from '../../atoms/inputSearch/InputSearch'
import { preventEvent } from "../../../helper/helper";
import { throttle } from 'lodash';

interface FormProps {
  onSearch(value: string): void,

  className?: string;
}

const Form: React.FunctionComponent<FormProps> = ({
  onSearch = () => {},
  className
}) => {
  return useMemo(
    () => {
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value = '' } = event.target

        if (value.length > 2) {
          throttle(
            onSearch,
            300
          )(value)
        }
      }

      return (
        <form
          onSubmit={preventEvent}
          className={className}
        >
          <InputSearch
            onChange={handleChange}
          />
        </form>
      )
    },
    [onSearch, className]
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

