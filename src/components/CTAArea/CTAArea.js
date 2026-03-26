import React from "react";
import { useCTAAreaQuery } from "../../hooks/useCTAAreaQuery";
import { Wrapper } from "./CTAArea.styles";
import CtaComponent from "../CtaComponent/CtaComponent";

 
const CTAArea = () => {
    const {cta}= useCTAAreaQuery() 
 
    return (
        <Wrapper>
            {new Array(3).fill("").map((element, i) => (
                <CtaComponent
                    key={i}
                    image={cta.ACF_HomePage[`cta${i + 1}Image`].localFile.childImageSharp.gatsbyImageData}
                    text={cta.ACF_HomePage[`cta${i + 1}Text`]}
                    link={cta.ACF_HomePage[`cta${i + 1}Link`]}
                />  

            ))

            }
        </Wrapper>
    )
}

    export default CTAArea