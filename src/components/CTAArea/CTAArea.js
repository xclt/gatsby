import React from "react";
import { useCTAAreaQuery } from "../../hooks/useCTAAreaQuery";
import { CTAImageTextWrapper } from "../CTA/CTAArea.styles";
import CTA from "./CTA";

const CTAArea = () => {
    const {cta}= useCTAAreaQuery()
    console.log(cta)

    return (
        <CTAImageTextWrapper>
            {new Array(3).fill("").map((element, i) => (
                <CTA
                    key={i}
                    image={cta.ACF_HomePage[`cta${i + 1}Image`].localFile.childImageSharp.gatsbyImageData}
                    text={cta.ACF_HomePage[`cta${i + 1}Text`]}
                    link={cta.ACF_HomePage[`cta${i + 1}Link`]}
                />  

            ))

            }
        </CTAImageTextWrapper>
    )}

    export default CTAArea