import { createGlobalStyle } from "styled-components";

export const ResetStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        line-height: 150%;
    }

    button, input{
        border: none;
        background-color: transparent;
    }

    a{
        text-decoration: none;
        color: inherit;
    }
`