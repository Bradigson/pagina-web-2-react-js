import './Header.css';
import {useState} from 'react';

const Header = ()=>{
    const [menu, setMenu] = useState(false);
    const handleMenu = ()=>{
        setMenu(!menu);
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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Portafolio</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">
                            <div class="dropdown">
                            <button class="dropdown-toggle text-white drop" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                               Dropdown button
                            </button>
                               <ul class="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton1">
                                 <li><a class="dropdown-item fs-4" href="#">Action</a></li>
                                 <li><a class="dropdown-item fs-4 " href="#">Another action</a></li>
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