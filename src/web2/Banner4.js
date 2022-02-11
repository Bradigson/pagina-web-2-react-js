import React from 'react';
import B4Img from '../web2/imgs/undraw_referral_re_0aji.svg';
import B4Section2Img from '../web2/imgs/undraw_percentages_re_a1ao.svg';
import B4Section3Img from '../web2/imgs/undraw_insert_block_re_4t4l.svg';
import B4Section4Img from '../web2/imgs/undraw_online_calendar_re_wk3t.svg';
import './Banner4.css'


class Banner4 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            B4content1H1 : 'Features',
            B4content1P : 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.',


            B4content2H2 : 'Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.',
            B4content2P : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',



            B4section2H : 'Corporis temporibus maiores provident',
            B4section2P : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            
        }
    }
    
    render(){

        
        const list = ['Ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'Duis aute irure dolor in reprehenderit in voluptate velit.'];
        const element = list.map(info=>
            <li key={info.toString()}>{info}</li>
            )



            const listSection3 = ['Ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'Duis aute irure dolor in reprehenderit in voluptate velit.', 'Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.']

            const B4Section3 = listSection3.map(lists=>
                <li key={lists.toString()}>{lists}</li>
                )
        return(
            
            <div className="banner4 p-2">
               <article>
                   <section>
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
                   </section>


                   <section className="section2 mt-5">
                       <div className="section2-img mt-5 p-3">
                           <img src={B4Section2Img}/>
                       </div>
                       <div className="section2-content mt-5 p-3">
                           <h2 >{this.state.B4section2H}</h2>
                           <p>{this.state.B4section2P}</p>
                       </div>
                   </section>



                   <section className="section3 mt-5">
                       <div className="section3-img mt-5 p-3">
                           <img src={B4Section3Img}/>
                       </div>
                       <div className="section3-content mt-5 p-3">
                           <h2 >Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h2>
                           <p className="mt-4">Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
                           <ul className="mt-4">
                               {B4Section3}
                           </ul>
                       </div>
                   </section>




                   <section className="section4 mt-5">
                       <div className="section4-img mt-5 p-3">
                           <img src={B4Section4Img}/>
                       </div>
                       <div className="section4-content mt-5 p-3">
                           <h2 >Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h2>
                           <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i><br/><br/>

                           Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                       </div>
                   </section>
               </article>
            </div>
        )
    }
}


export default Banner4;