import React from 'react';
import './Clock.css';

class Clock extends React.Component{

    

    constructor(props){
        super(props)
        this.state = {
            time : new Date()
        }
    }

    componentDidMount(){
        this.timeID = setInterval(
            ()=> this.tick(), 1000
        )
    }
    componentWillUnmount(){
        clearInterval(this.timeID)
    }

    tick(){
        this.setState({
            time : new Date()
        })
    }

    handleClose = ()=>{
        let clock = document.querySelector('.clock');
        clock.classList.add('close');       
       }
    render(){
        return(
            <div className="clock">
                <button className="btn btn-danger" onClick={()=>this.handleClose()}>X</button>
                <div className="clock-time">
                    
                    {this.state.time.toLocaleTimeString()}
                </div>
            </div>
        )
    }
}


export default Clock;