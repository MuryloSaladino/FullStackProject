import styled from "styled-components";


export const Title1 = styled.h1`
    font-size: 1.125rem;
    font-weight: var(--bold);
    color: ${({color}) => color ? color : "var(--grey-0)"};
`
export const Title2 = styled.h2`
    font-size: 1rem;
    font-weight: var(--bold);
    color: ${({color}) => color ? color : "var(--grey-0)"};
`
export const Title3 = styled.h3`
    font-size: 0.875rem;
    font-weight: var(--bold);
    color: ${({color}) => color ? color : "var(--grey-0)"};
`


export const Text = styled.p`
    font-size: 0.75rem;
    font-weight: var(--regular);
    color: ${({color}) => color ? color : "var(--grey-0)"};
`
export const TextBold = styled.p`
    font-size: 0.75rem;
    font-weight: var(--bold);
    color: ${({color}) => color ? color : "var(--grey-0)"};
`
export const TextItalic = styled.p`
    font-size: 0.75rem;
    font-weight: var(--bold);
    font-style: italic;
    color: ${({color}) => color ? color : "var(--grey-0)"};
`