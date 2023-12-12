import styled from "styled-components";

export const StyledForm = styled.form`
    width: 100%;
    max-width: 400px;

    background-color: var(--grey-3);
    padding: 42px 22.5px;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    gap: 25px;

    header{
        display: flex;
        flex-direction: column;
        gap: 22px;
        align-items: center;
    }

    header p, h1{
        text-align: center;
    }
`