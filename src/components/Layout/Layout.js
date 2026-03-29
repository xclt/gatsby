import React, {useState} from "react"
import {GlobalStyles, Primary  } from './Layout.styles'
import Header from '../Header/Header'
import Hamburger from "../Hamburger/Hamburger"
import OverlayMenu from "../OverlayMenu/OverlayMenu"
import Footer from '../Footer/Footer'

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
          <Primary>
           {children}
         </Primary>
        <Footer/>
        </>
    )

}

export default Layout