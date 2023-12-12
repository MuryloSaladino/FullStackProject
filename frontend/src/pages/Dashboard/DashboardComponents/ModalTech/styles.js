import styled from "styled-components";

export const StyledDialog = styled.dialog`
    width: 100vw;
    height: 100vh;
    border: none;
    margin: auto;
    position: fixed;
    background-color: transparent;

    ::backdrop{
        background: rgba(0,0,0,.5)
    }
`

export const StyledModalInterior = styled.div`
    width: 95%;
    max-width: 370px;
    margin: 20vh auto 0;

    background-color: var(--grey-3);
    border-radius: 5px;
    position: relative;

    animation: fadeIn 0.3s;

    > header{
        width: 100%;
        padding: 14px 20px;
        background-color: var(--grey-2);
        border-radius: 5px 5px 0 0;
        position: absolute;
        top: 0;
    }

    > h2{
        position: absolute;
        top: 12px;
        right: 12px;
        cursor: pointer;
    }
`