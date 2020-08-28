import React, { Component } from 'react'

export default class Timer extends Component {
    
    state = {
        hours: 1,
        minutes: 0,
        seconds: 0,
    }

    componentDidMount() {

        const userAction = async () => {
            const response = await fetch('http://worldtimeapi.org/api/timezone/Europe/London');
            const myJson = await response.json();
            const formattedTime = myJson.unixtime;
            const openingDateInSec = 1607009800;
            let distance = openingDateInSec - formattedTime;
            distance = distance > 0 ? distance : 0;
            const days = Math.floor(distance / (60 * 60 * 24));
            const hours = Math.floor((distance % (60 * 60 * 24)) / ( 60 * 60));
            const minutes = Math.floor((distance % (60 * 60)) / (60));
            const seconds = Math.floor((distance % (60)));
            this.setState({
                days:days,
                hours:hours,
                minutes:minutes,
                seconds:seconds
            });
        }
        userAction();

        this.myInterval = setInterval(() => {
            const { days, seconds, minutes, hours } = this.state;

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    if(hours === 0) {
                        if(days === 0) {
                            clearInterval(this.myInterval);
                        }
                        else {
                            this.setState(({ days }) => ({
                                days: days - 1,
                                hours: 23
                            }))   
                        }
                    }
                    else {
                        this.setState(({ hours }) => ({
                            hours: hours - 1,
                            minutes: 59
                        }))
                    }
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { days, hours, minutes, seconds } = this.state
        return (
            <section id="about" className="services-area pt-50">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                        <div className="section-title text-center pb-40">
                            <div className="line m-auto" />
                            <h3 className="title"><span>Launching In</span></h3>
                        </div> 
                        </div>
                    </div> 
                    <div id="Banner" className="row justify-content-center single-services">
                        <div className="col-lg-4 col-md-7 col-sm-8">
                        <div className="text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                            <div className="about-content mt-30">
                            { minutes === 0 && seconds === 0 && hours === 0
                                ? <h1>... Start INVESTING!</h1>
                                : <h1>{days < 10 ? `0${days}` : days}:{hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                            }
                                
                            </div>
                        </div> 
                        </div>
                    </div> 
                </div> 
            </section>

        )
    }
}