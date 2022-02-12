import './Footer.css'
const Lists = (props) =>{
    const getlist1 = props.list1
    const DisplayList1 = getlist1.map(l1=>
    
        <li key={l1.toString()}><a href="">{l1}</a></li>
    )
    
    return(
        <div>
            <ul>
                <h2 className="text-info">Useful Links</h2>
               {DisplayList1}
            </ul>
        </div>
        
    )
}

const Footer = ()=>{
   const  state = {
        footerContent1H2 : 'Our Newsletter',
        footerContent1p : 'Tamen quem nulla quae legam multos aute sint culpa legam noster magna'
        }
        
        const lista1 = ['Home', 'About Us', 'Service', 'Terms of Service', 'Privacy Policy'];
        const lista2 = ['Home', 'About Us', 'Service', 'Terms of Service', 'Privacy Policy'];

        const getLista2 = lista2.map(l2=>
          
            <li key={l2.toString()}><a href="">{l2}</a></li>
         )
         


         
    return(
        <div className="footer-container">
            <footer className="footer">
                <div className="mt-3">
                    <div className="text-white footer-content-1">
                        <h2>{state.footerContent1H2}</h2>
                        <p>{state.footerContent1p}</p>
                    </div>
                    <form className="mt-3">
                        <input
                        className="form-control"
                        typr="text"
                        name="subcribe"
                        />
                        <button className="btn btn-primary btn-f">Subcribe</button>
                    </form>
                </div>
                <div className="mt-5 text-white" id="ul-Content">
                    <Lists list1={lista1} /><br/>
                    <ul>
                        <h2 className='text-info'>Our Service</h2>
                       {getLista2}<br/>
                    </ul>
                    <ul className="text-white">
                        <h2 className='text-info'>Contact Us</h2>
                        <li>A108 Adam Street</li>
                        <li>New York, NY 535022</li>
                        <li>United States</li><br/>
                        <li><b>Phone:</b> +1 5589 55488 55</li>
                        <li><b>Phone:</b> +1 5589 55488 55</li>
                    </ul>

                    <ul className="text-white contact-me-content">
                        <h2 className="text-info">About Moderna</h2>
                        <li><p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p></li>
                        <li className="mt-3">
                            <div id="redes">
                            <i className='bx bxl-twitter'></i>
                            <i className='bx bxl-facebook' ></i>
                            <i className='bx bxl-instagram' ></i>
                            <i className='bx bxl-linkedin' ></i>
                            </div>
                        </li>
                    </ul>
                    
            
                </div>

            <div className="copyRight text-center mt-5 pb-3 pt-3">
                    <h2>© Copyright Bradigson. All Rights Reserved</h2>
                    <h3>Designed by <a href="">Bradigson</a></h3>

            </div>    
            </footer>
            
        </div>
    )
}

export default Footer;