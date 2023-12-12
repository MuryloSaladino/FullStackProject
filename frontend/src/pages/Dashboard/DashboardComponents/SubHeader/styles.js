import styled from "styled-components";

export const StyledWelcome = styled.div`
    width: 100%;
    height: 118px;
    padding: 0 5px;
    border-top: solid 1px var(--grey-2);
    border-bottom: solid 1px var(--grey-2);

    div{
        height: 100%;
        width: 100%;
        max-width: 780px;
        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`