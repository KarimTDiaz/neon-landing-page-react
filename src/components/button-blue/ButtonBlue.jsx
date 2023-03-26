import Arrow from "../arrow/Arrow"
import { StyledButtonBlue } from "./styles"


const ButtonBlue = ({ width, height, text }) => {
    return <StyledButtonBlue width={width} height={height}>{text}<Arrow /></StyledButtonBlue>
}

export default ButtonBlue