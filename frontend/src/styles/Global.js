import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        --primary: #FF577F;
        --primary-focus: #FF427F;
        --primary-disabled: #59323F;

        --grey-0: #F8F9FA;
        --grey-1: #868E96;
        --grey-2: #343B41;
        --grey-3: #212529;
        --grey-4: #121214;

        --sucess: #3FE864;
        --negative: #E83F5B;


        --regular: 400;
        --medium: 500;
        --bold: 700;
    }

    body{
        font-family: "Inter", sans-serif;
        background-color: var(--grey-4);
    }

    @keyframes wave {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`