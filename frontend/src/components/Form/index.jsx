import { Text, Title1 } from "../../styles/typography";
import { StyledForm } from "./styles";

export function Form({children, formName, formDescription, ...rest}) {
    return(
        <StyledForm {...rest}>
            <header>
                <Title1>{formName}</Title1>
                {formDescription ? <Text color="var(--grey-1)">{formDescription}</Text> : null}
            </header>
            {children}
        </StyledForm>
    )
}