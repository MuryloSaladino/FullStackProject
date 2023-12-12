import styled from "styled-components";

export const StyledInputContainer = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: none;
`

export const StyledInput = styled.input`
    height: 48px;

    background-color: var(--grey-2);
    padding: 10px 15px;
    border-radius: 5px;
    border: solid 2px var(--grey-2);
    color: var(--grey-0);

    transition: 0.3s;

    ::placeholder{
        font-size: 1rem;
        font-weight: var(--regular);
        color: var(--grey-1);
    }

    :focus{
        border: solid 2px var(--grey-0);
    }
    :focus::placeholder{
        color: var(--grey-2);
    }
`

export const StyledLabel = styled.label`
    font-size: 0.75rem;
    font-weight: var(--regular);
    color: var(--grey-0);
`