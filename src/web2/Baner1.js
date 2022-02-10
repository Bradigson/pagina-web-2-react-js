import React from 'react';
import './Baner1.css';
class Banner1 extends React.Component{
    constructor(props){
        super(props)
        this.state= {
              h2 : 'Welcome to Moderna'
        }
    }
    render(){
        return(
            <div className="banner1">
                <article className="banner1-article1">
                    <section className="text-center p-3 banner__article1-section1">
                        <h2 className="banner__article1__section1-h2">{this.state.h2}</h2>
                        <p className="banner__article1__section1-p">Although we typically say that every design you create should include just about 2-3 colors, there are ways that you can create a colorful presentation tastefully.

                        Pay close attention to the main colors of these slides. You see a lot of white, coral and navy with a few other colors splashed around the illustrations. Because the overall slide design focuses on three main colors, the way they’ve included other colors still works.</p>
                        <div>
                            <a href="" className="btn btn-outline-light">Read More</a>
                        </div>
                    </section>
                </article>

            </div>
        )
    }
}

export default Banner1;