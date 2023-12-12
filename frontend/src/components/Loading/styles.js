import styled from "styled-components";

export const StyledLoading = styled.section`
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledLoadingBar = styled.div`
    width: 5px;
    height: 80px;
    background-color: var(--grey-0);
    margin: 10px;
    animation: wave 1s linear infinite;
    border-radius: 20px;

    animation-delay: ${({delay}) => delay + "s"};
`