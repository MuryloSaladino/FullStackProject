import styled from "styled-components";

export const StyledButton = styled.button`
    ${({small}) => small ? "width: max-content" : ""};
    height: 48px;
    background-color: ${({grey, disabled, small}) =>
        grey ? "var(--grey-1)" :
        small ? "var(--grey-3)" :
        disabled ? "var(--primary-disabled)" : "var(--primary)"
    };
    padding: 10px 20px;
    border-radius: 5px;

    font-size: 1rem;

    transition: 0.3s;
    cursor: pointer;

    color: var(--grey-0);

    :hover{
        ${({grey, disabled, small}) =>
            grey ? "background-color: var(--grey-2);" :
            small ? "background-color: var(--grey-2);" :
            disabled ? "" : "background-color: var(--primary-focus);"
        };
    }
`