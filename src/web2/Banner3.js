import React from 'react';
import './Banner3.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';
class Banner3 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            content1H2 : 'LOREM IPSUM',
            content1P : 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
            content2H22 : 'NEMO ENIM',
            content2P : 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque'
        }
    }
    render(){
        return(
            <div className="banner3 p-2">
                <div className="banner3-video mt-2 mb-4">
                    <Router>
                    <Link to="" target="_blank" className="btn btn-primary"><i className='bx bx-play'></i></Link>
                    </Router>
                </div>
                <div className="banner3-content mt-2">
                    <div className="banner3__content-content1 ps-3">
                        <div className="banner3__content-content1-i"><i className='bx bx-fingerprint'></i></div>
                        <div className="content1 ms-4">
                            <h2>{this.state.content1H2}</h2>
                            <p>{this.state.content1P}</p>
                        </div>
                    

                    </div>
                    <div className="banner3__content-content2 ps-3">
                        <div className="banner3__content-content2-i"><i className='bx bx-gift' ></i></div>
                        <div className="content2 ms-4">
                            <h2>{this.state.content2H22}</h2>
                            <p>{this.state.content2P}</p>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default Banner3;