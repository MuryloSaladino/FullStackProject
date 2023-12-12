import styled from "styled-components";

export const StyledSelect = styled.select`
    height: 48px;

    background-color: var(--grey-2);
    padding: 10px 15px;
    border-radius: 5px;
    border: solid 2px var(--grey-2);
    
    transition: 0.3s;

    color: var(--grey-0);
    font-size: 1rem;

    :focus{
        border: solid 2px var(--grey-0);
    }
`