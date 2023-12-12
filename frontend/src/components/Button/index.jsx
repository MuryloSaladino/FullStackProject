import { Link } from "react-router-dom";
import { StyledButton } from "./styles";
import { grey, primary, small } from "./styles.module.css"

export function Button({ link, children, ...rest}) {

    const buttonClass = rest.grey ? grey : rest.small ? small : primary

    return(
        link ?
        <Link className={buttonClass} to={link}>{children}</Link> 
        :
        <StyledButton link={link} {...rest} >
            {children}
        </StyledButton> 
    )
}