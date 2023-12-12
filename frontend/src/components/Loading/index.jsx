import { StyledLoading, StyledLoadingBar } from "./styles";

export function Loading() {

    return(
        <StyledLoading>
            <StyledLoadingBar delay="-1"></StyledLoadingBar>
            <StyledLoadingBar delay="-0.9"></StyledLoadingBar>
            <StyledLoadingBar delay="-0.8"></StyledLoadingBar>
            <StyledLoadingBar delay="-0.7"></StyledLoadingBar>
            <StyledLoadingBar delay="-0.6"></StyledLoadingBar>
            <StyledLoadingBar delay="-0.5"></StyledLoadingBar>
            <StyledLoadingBar delay="-0.4"></StyledLoadingBar>
            <StyledLoadingBar delay="-0.3"></StyledLoadingBar>
            <StyledLoadingBar delay="-0.2"></StyledLoadingBar>
            <StyledLoadingBar delay="-0.1"></StyledLoadingBar>
            <StyledLoadingBar delay="-0"></StyledLoadingBar>
        </StyledLoading>
    )
}