import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    height: 72px;
    padding: 0 5px;

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

export const StyledTechContainer = styled.main`
    width: 100%;
    padding: 11px 5px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    > div{
        width: 100%;
        max-width: 780px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        button{
            width: 2rem;
            height: 2rem;
            padding: 0;
        }
    }
`

export const StyledTechList = styled.ul`
    width: 100%;
    max-width: 780px;

    list-style: none;
    background-color: var(--grey-3);
    padding: 23px 26px;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    gap: 14px;

    h3{
        text-align: center;
    }

    li{
        width: 100%;
        background-color: var(--grey-4);
        padding: 14px 20px;
        border-radius: 5px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        transition: 0.3s;

        p{
            transition: 0.3s;
        }

        :hover{
            background-color: var(--grey-2);
            p{
                color: var(--grey-0);
            }
        }
    }   
`