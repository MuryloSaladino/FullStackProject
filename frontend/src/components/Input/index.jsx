import { StyledInput, StyledInputContainer, StyledLabel } from "./styles";

export function Input({label, type, placeholder, register, readonly, value}) {
    return(
        <StyledInputContainer>
            {label ? <StyledLabel>{label}</StyledLabel> : null}
            <StyledInput type={type} placeholder={placeholder} {...register} readOnly={readonly ? true : false} value={value ? value : undefined}/>
        </StyledInputContainer>
    )
}