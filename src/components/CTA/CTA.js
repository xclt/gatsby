import React from "react"
import {Link} from 'gatsby'
import { StyledImg,CTAImageTextWrapper, CTAImage, CTAImageText } from "./CTA.styles";


const CTA = ({image, text, link}) => (
    <CTAImage>
        <StyledImg image={image} alt={text} />
        <Link to={link}>
            <CTAImageTextWrapper>
                <CTAImageText>{text}</CTAImageText>
            </CTAImageTextWrapper>
        </Link>
    </CTAImage>
)

 export default CTA