import React, {useState} from "react"
import {GlobalStyles, Primary  } from './Layout.styles'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Hamburger from "../Hamburger/Hamburger"
import OverlayMenu from "../OverlayMenu/OverlayMenu"
import Footer from '../Footer/Footer'
import CTAArea from "../CTAArea/CTAArea"
import Quote from "../Quote/Quote"
import LatestBlogPost from "../LatestBlogPost/LatestBlogPost"
import About from "../About/About"


const Layout=({children})=> {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleOverlayMenu=()=> setMenuOpen(prev => !prev)
    return (
        <>     
        
        <GlobalStyles />
         <Hamburger handleOverlayMenu={handleOverlayMenu}/>
         <OverlayMenu menuOpen={menuOpen} callback={{handleOverlayMenu}}>

         </OverlayMenu>
         <Header/>
         <Hero/>
         <Primary>
            <CTAArea />
            <LatestBlogPost/>
            <Quote/>
            <About />
         </Primary>
        <Footer/>
        </>
    )

}

export default Layout