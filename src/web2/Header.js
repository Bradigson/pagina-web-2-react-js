import './Header.css';
import {useState} from 'react';


//Header Animation
window.addEventListener("scroll",()=>{
    let header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
})
const Header = ()=>{
    const [menu, setMenu] = useState(false);
    const handleMenu = ()=>{
        setMenu(!menu);
        let body = document.querySelector('body')
        body.classList.toggle('body');
        
    }
    const handleMenuDark   = ()=>{
        let menuDark = document.querySelector('.navbar');
        let banner2 = document.querySelector('.banner2');
        let banner3 = document.querySelector('.banner3');
        let banner4 = document.querySelector('.banner4');
        let card1 = document.querySelector('.card');
        let card2 = document.querySelector('.card2');
        let card3 = document.querySelector('.card3');
        let card4 = document.querySelector('.card4');
        let App = document.querySelector('.App')
        menuDark.classList.toggle('menu-dark');
        banner2.classList.toggle('menu-dark');
        banner3.classList.toggle('menu-dark');
        banner4.classList.toggle('menu-dark');
        card1.classList.toggle('card-dark');
        card2.classList.toggle('card-dark');
        card3.classList.toggle('card-dark');
        card4.classList.toggle('card-dark');
        App.classList.toggle('menu-dark');
    }
    const handleClock = ()=>{
        let clockBody = document.querySelector('body');
        //clockBody.classList.toggle('clock-body');
        let clock = document.querySelector('.clock');
        clock.classList.toggle('show');
        clock.classList.remove('close')
    }
    return(
        <div>
            <header>
                <h1>MODERNA</h1>
                <nav className={`${menu ? 'change' : ''}${' navbar'}`}>
                    <div className="hamburger-menu" onClick={handleMenu}>
                        <div className="line line-1"></div>
                        <div className="line line-2"></div>
                        <div className="line line-3"></div>
                    </div>
                    <ul className="header__navbar-ul text-center">
                        <li className='time'><i class='bx bxs-time-five' onClick={()=> handleClock()} ></i></li>
                        <li className="mode-dark"><button className="btn-clock" onClick={handleMenuDark}><i class='bx bxs-moon' ></i></button></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Portafolio</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Blog</a></li>
                        <li>
                            {/*The issue of a is on the block*/}
                          <a href="#">
                                <div className="dropdown">
                                   <button className="dropdown-toggle text-white drop" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown button
                                    </button>
                                    <ul className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item fs-4" href="#">Action</a></li>
                                    <li><a className="dropdown-item fs-4 " href="#">Another action
                                    </a></li>
                                    </ul>
                                </div>
                           </a>
                        </li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;


