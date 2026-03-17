import React from "react"
import {Link} from 'gatsby'
import { StyledImg,CTAImage,CTAImageTextWrapper,  CTAImageText } from "./CtaComponent.style.js";


const CtaComponent = ({image, text, link}) => (
    <CTAImage>
        <StyledImg image={image} alt={text} />
        <Link to={link}>
            <CTAImageTextWrapper>
                <CTAImageText>{text}</CTAImageText>
            </CTAImageTextWrapper>
        </Link>
    </CTAImage>
)

 export default CtaComponent