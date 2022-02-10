import React from 'react';
import B4Img from '../web2/imgs/undraw_referral_re_0aji.svg';
import './Banner4.css'


class Banner4 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            B4content1H1 : 'Features',
            B4content1P : 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.',


            B4content2H2 : 'Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.',
            B4content2P : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            
        }
    }
    
    render(){

        
        const list = ['Ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'Duis aute irure dolor in reprehenderit in voluptate velit.'];
        const element = list.map(info=>
            <li>{info}</li>
            )



        return(
            <div className="banner4 p-2">
                <div className="banner4-content1 p-3">
                    <h2>{this.state.B4content1H1}</h2>
                    <hr className=""/>
                    <p>{this.state.B4content1P}</p>
                </div>

                <div className="banner4-content2">
                    <div className="content2-img">
                        <img src={B4Img}/>
                    </div>
                    <div className="content2-content mt-4 p-1">
                        <h2>{this.state.B4content2H2}</h2>
                        <p>{this.state.B4content2P}</p>
                        <ul>
                            {element}
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}


export default Banner4;