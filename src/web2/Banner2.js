import './Banner2.css';

const Banner2 = ()=>{
    return(
        <div className="banner2 p-2 mb-4" id="card1">
            <div className="card mt-4">
                <div className="card-body">
                    <div className="banner2-i">
                      <i className='bx bx-basketball'></i>
                    </div>
                    <div className="banner2-content mt-3 p-2">
                        <h2>BasketBall</h2>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                    </div>

                </div>
            </div>


            <div className="card mt-4 card2">
                <div className="card-body">
                    <div className="banner2-i">
                      <i className='bx bx-file'></i>
                    </div>
                    <div className="banner2-content mt-3 p-2">
                        <h2>Sed ut perspiciatis</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
                </div>
            </div>



            <div className="card mt-4 card3">
                <div className="card-body">
                    <div className="banner2-i">
                      <i className='bx bxs-timer'></i>
                    </div>
                    <div className="banner2-content mt-3 p-2">
                        <h2>Magni Dolores</h2>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>

                </div>
            </div>


            <div className="card mt-4 card4">
                <div className="card-body">
                    <div className="banner2-i">
                      <i className='bx bx-world'></i>
                    </div>
                    <div className="banner2-content mt-3 p-2">
                        <h2>Nemo Enim</h2>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Banner2;