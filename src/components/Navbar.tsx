import React from 'react'
import style from "./Style/Navbar.module.scss"
import { Link } from 'react-scroll'
import { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleBtn =()=>{
    setOpen(!open);
  }
  return (
    <>
    <nav className={style.navbar}>
      <div className={style.container}>
        <div className={style.nevManuFlex}>
      <div className={style.logo}><Link to='Home' spy={true} smooth={true} offset={-100} duration={1000}><img src='./pics/logoColorFull.svg' alt='logo'/></Link>
      <span className={`${style.burgerIcone} fa fa-bars`} onClick={toggleBtn}></span>
      </div>
      <div className={`${open && style.menu2 } ${style.menu}`}>
        <ul>
          <li><Link to='Home' spy={true} smooth={true} offset={-100} duration={1000}>Home</Link></li>
          <li><Link to='Process' spy={true} smooth={true} offset={-100} duration={1000}>Process</Link></li>
          <li><Link to='Testimonial' spy={true} smooth={true} offset={-100} duration={1000}>Testimonial</Link></li>
          <li><Link to='Services' spy={true} smooth={true} offset={-100} duration={1000}>Services</Link></li>
          <li><Link to='Facts' spy={true} smooth={true} offset={-100} duration={1000}>Facts</Link></li>
          <li><Link to='About' spy={true} smooth={true} offset={-100} duration={1000}>About</Link></li>
          <li><Link to='Pricing' spy={true} smooth={true} offset={-100} duration={1000}>Pricing</Link></li>
        </ul>
      </div>
      <div className={style.button}>Contect</div>
      </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar