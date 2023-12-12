import { StyledInputContainer, StyledLabel } from "../Input/styles";
import { StyledSelect } from "./styles";
import { v4 as uuidv4 } from "uuid"

export function Select({options, placeholder, label, register}) {
    return(
        <StyledInputContainer>
            {label ? <StyledLabel>{label}</StyledLabel> : null}
            <StyledSelect {...register}>
                {placeholder ? <option>{placeholder}</option> : null}
                {options.map(option => <option key={uuidv4()} value={option}>{option}</option>)}
            </StyledSelect>
        </StyledInputContainer>
    )
}