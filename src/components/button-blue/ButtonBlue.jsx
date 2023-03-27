import Arrow from "../arrow/Arrow"
import { StyledButtonBlue } from "./styles"


const ButtonBlue = ({ width, height, text, margin }) => {
    return <StyledButtonBlue width={width} height={height} margin={margin}>{text}<Arrow /></StyledButtonBlue>
}

export default ButtonBlue